import { qfFetch } from "./client";
import { QFVerse, QFTranslation, QFTafsir } from "../../types/verse";

interface VerseResponse {
  verse: QFVerse;
}

interface TranslationsResponse {
  translations: QFTranslation[];
}

interface TafsirResponse {
  tafsir: {
    resource_id: number;
    resource_name: string;
    text: string;
  };
}

export async function getVerseByKey(verseKey: string): Promise<QFVerse> {
  const data = await qfFetch<VerseResponse>(
    `/verses/by_key/${verseKey}?language=en&fields=text_uthmani`
  );
  return data.verse;
}

export async function getTranslation(
  verseKey: string,
  translationId = 20 // Sahih International
): Promise<QFTranslation[]> {
  const [chapter, verse] = verseKey.split(":");
  const data = await qfFetch<TranslationsResponse>(
    `/verses/by_chapter/${chapter}?translations=${translationId}&verse_number=${verse}`
  );
  return data.translations;
}

interface VersesResponse {
  verses: QFVerse[];
}

export async function getVersesByChapter(
  chapterId: number,
  translationId = 20
): Promise<{ verse_key: string; text_uthmani: string; translation: string }[]> {
  const data = await qfFetch<VersesResponse>(
    `/verses/by_chapter/${chapterId}?language=en&translations=${translationId}&fields=text_uthmani&per_page=286`
  );
  return data.verses.map((v) => ({
    verse_key: v.verse_key,
    text_uthmani: v.text_uthmani,
    translation: v.translations?.[0]?.text ?? "",
  }));
}

export async function getTafsir(
  verseKey: string,
  tafsirId = 169 // Ibn Kathir (English)
): Promise<QFTafsir[]> {
  const data = await qfFetch<TafsirResponse>(
    `/tafsirs/${tafsirId}/by_ayah/${verseKey}`
  );
  const t = data.tafsir;
  if (!t?.text) return [];
  return [
    {
      tafsir_id: t.resource_id,
      text: t.text,
      resource_name: t.resource_name,
      verse_key: verseKey,
    },
  ];
}
