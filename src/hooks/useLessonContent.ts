import { useState, useEffect } from "react";
import { LessonContent, LessonMetadata, TafsirSegment } from "../types/lesson";
import { getVerseByKey, getTafsir } from "../services/api";
import { getSpa5kTafsir, SPA5K_EDITIONS } from "../services/api/tafsirSpa5k";
import { getAudioUrl } from "../services/api/audio";
import { getChapter } from "../services/api/chapters";
import {
  getCachedContent,
  setCachedContent,
  CachedVerseContent,
} from "../services/contentCache";
import { segmentTafsirToCards } from "../utils/tafsirSegmenter";
import { CURATED_PUZZLES } from "../data/curatedPuzzles";

interface UseLessonContentResult {
  content: LessonContent | null;
  isLoading: boolean;
  error: string | null;
  retry: () => void;
}

export function useLessonContent(
  metadata: LessonMetadata | null,
  visible: boolean
): UseLessonContentResult {
  const [content, setContent] = useState<LessonContent | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const retry = () => setRetryCount((c) => c + 1);

  useEffect(() => {
    if (!metadata || !visible) {
      setContent(null);
      setIsLoading(false);
      setError(null);
      return;
    }

    let mounted = true;
    const { verseKey, surahName, ayahNumber } = metadata;
    const [surahStr] = verseKey.split(":");
    const surahNumber = parseInt(surahStr, 10);

    async function fetchContent() {
      setIsLoading(true);
      setError(null);

      try {
        // 1. Check cache
        const cached = await getCachedContent(verseKey);
        if (cached && mounted) {
          const meta: LessonMetadata = { verseKey, surahName, ayahNumber };
          const built = buildContent(cached, meta);
          setContent(built);
          setIsLoading(false);
          // Fetch audio in background (not cached)
          fetchAudio(verseKey).then((url) => {
            if (mounted) setContent((prev) => prev ? { ...prev, audioUrl: url } : prev);
          });
          return;
        }

        // 2. Fetch all in parallel
        const results = await Promise.allSettled([
          getVerseByKey(verseKey),
          fetchTranslation(verseKey),
          getTafsir(verseKey, 169),
          getSpa5kTafsir(surahNumber, ayahNumber, SPA5K_EDITIONS.asbabAlNuzul),
          fetchAudio(verseKey),
        ]);

        if (!mounted) return;

        const [verseResult, translationResult, tafsirResult, asbabResult, audioResult] = results;

        // Extract Arabic text
        const arabicText =
          verseResult.status === "fulfilled"
            ? verseResult.value.text_uthmani
            : null;

        // Extract translation
        let translationText: string | null = null;
        let translationSource: string | null = null;
        if (translationResult.status === "fulfilled" && translationResult.value) {
          translationText = translationResult.value.text;
          translationSource = translationResult.value.source;
        }

        // Build tafsir segments from successful fetches
        const tafsirSegments: TafsirSegment[] = [];
        const now = Date.now();

        if (tafsirResult.status === "fulfilled" && tafsirResult.value.length > 0) {
          const raw = tafsirResult.value[0];
          const cleanText = stripHtml(raw.text);
          if (cleanText.length > 30) {
            tafsirSegments.push({
              sourceId: "qf-169",
              sourceName: raw.resource_name || "Tafsir Ibn Kathir",
              text: cleanText,
            });
          }
        }

        if (asbabResult.status === "fulfilled" && asbabResult.value) {
          const cleanText = stripHtml(asbabResult.value.text);
          if (cleanText.length > 30) {
            tafsirSegments.push({
              sourceId: "spa5k-asbab",
              sourceName: asbabResult.value.sourceName,
              text: cleanText,
            });
          }
        }

        // If we got nothing at all — error out
        if (!arabicText && !translationText && tafsirSegments.length === 0) {
          setError("Could not load lesson content. Please check your connection.");
          setIsLoading(false);
          return;
        }

        // Cache the fetched data
        if (arabicText && translationText) {
          const cacheData: CachedVerseContent = {
            arabicText,
            translationText,
            translationSource: translationSource || "Sahih International",
            tafsirs: tafsirSegments.map((s) => ({
              ...s,
              fetchedAt: now,
            })),
          };
          setCachedContent(verseKey, cacheData);
        }

        // Build teaching cards from best available tafsir
        const primaryTafsir = tafsirSegments[0];
        const teachingCards = primaryTafsir
          ? segmentTafsirToCards(
              primaryTafsir.text,
              primaryTafsir.sourceName,
              primaryTafsir.sourceId
            )
          : [];

        // Add Asbab al-Nuzul as a separate card if available
        if (tafsirSegments.length > 1) {
          const asbab = tafsirSegments[1];
          const asbabCards = segmentTafsirToCards(
            asbab.text,
            asbab.sourceName,
            asbab.sourceId,
            1
          );
          if (asbabCards.length > 0) {
            teachingCards.push(asbabCards[0]);
          }
        }

        const audioUrl =
          audioResult.status === "fulfilled" ? audioResult.value : null;

        setContent({
          verseKey,
          surahName,
          ayahNumber,
          arabicText,
          translationText,
          translationSource,
          tafsirSegments,
          teachingCards,
          puzzles: CURATED_PUZZLES[verseKey] ?? [],
          audioUrl,
        });
        setIsLoading(false);
      } catch {
        if (mounted) {
          setError("Could not load lesson content. Please check your connection.");
          setIsLoading(false);
        }
      }
    }

    fetchContent();

    return () => {
      mounted = false;
    };
  }, [metadata?.verseKey, visible, retryCount]);

  return { content, isLoading, error, retry };
}

/** Fetch translation using the correct Sahih International ID (20) */
async function fetchTranslation(
  verseKey: string
): Promise<{ text: string; source: string } | null> {
  try {
    const [chapter, verse] = verseKey.split(":");
    const response = await fetch(
      `https://api.quran.com/api/v4/verses/by_key/${verseKey}?language=en&translations=20`
    );
    if (!response.ok) return null;
    const data = await response.json();
    const translation = data.verse?.translations?.[0];
    if (!translation) return null;
    return {
      text: stripHtml(translation.text),
      source: translation.resource_name || "Sahih International",
    };
  } catch {
    return null;
  }
}

async function fetchAudio(verseKey: string): Promise<string | null> {
  try {
    return await getAudioUrl(verseKey);
  } catch {
    return null;
  }
}

function stripHtml(text: string): string {
  return text
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function buildContent(
  cached: CachedVerseContent,
  metadata: LessonMetadata
): LessonContent {
  const tafsirSegments: TafsirSegment[] = cached.tafsirs.map((t) => ({
    sourceId: t.sourceId,
    sourceName: t.sourceName,
    text: t.text,
  }));

  const primaryTafsir = tafsirSegments[0];
  const teachingCards = primaryTafsir
    ? segmentTafsirToCards(
        primaryTafsir.text,
        primaryTafsir.sourceName,
        primaryTafsir.sourceId
      )
    : [];

  // Add Asbab al-Nuzul card if cached
  if (tafsirSegments.length > 1) {
    const asbab = tafsirSegments[1];
    const asbabCards = segmentTafsirToCards(
      asbab.text,
      asbab.sourceName,
      asbab.sourceId,
      1
    );
    if (asbabCards.length > 0) {
      teachingCards.push(asbabCards[0]);
    }
  }

  return {
    verseKey: metadata.verseKey,
    surahName: metadata.surahName,
    ayahNumber: metadata.ayahNumber,
    arabicText: cached.arabicText,
    translationText: cached.translationText,
    translationSource: cached.translationSource,
    tafsirSegments,
    teachingCards,
    puzzles: CURATED_PUZZLES[metadata.verseKey] ?? [],
    audioUrl: null, // Audio fetched separately (not cached)
  };
}
