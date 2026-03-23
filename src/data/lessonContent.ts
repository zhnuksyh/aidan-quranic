import { LessonMetadata } from "../types/lesson";

/**
 * Minimal verse metadata only — all text content (Arabic, translation,
 * tafsir, teaching cards) is fetched live from authenticated scholarly
 * sources at runtime. See CLAUDE.md for approved sources.
 */
export const LESSON_METADATA: Record<string, LessonMetadata> = {
  // ── World 1: Surah Al-Fatiha ──────────────────────────────
  "w1-l1": { verseKey: "1:1", surahName: "Al-Fatiha", ayahNumber: 1 },
  "w1-l2": { verseKey: "1:2", surahName: "Al-Fatiha", ayahNumber: 2 },
  "w1-l3": { verseKey: "1:3", surahName: "Al-Fatiha", ayahNumber: 3 },
  "w1-l4": { verseKey: "1:4", surahName: "Al-Fatiha", ayahNumber: 4 },
  "w1-l5": { verseKey: "1:5", surahName: "Al-Fatiha", ayahNumber: 5 },
  "w1-l6": { verseKey: "1:6", surahName: "Al-Fatiha", ayahNumber: 6 },
  "w1-l7": { verseKey: "1:7", surahName: "Al-Fatiha", ayahNumber: 7 },

  // ── World 2: Surah Yusuf ──────────────────────────────────
  "w2-l1": { verseKey: "12:1", surahName: "Yusuf", ayahNumber: 1 },
  "w2-l2": { verseKey: "12:2", surahName: "Yusuf", ayahNumber: 2 },
  "w2-l3": { verseKey: "12:3", surahName: "Yusuf", ayahNumber: 3 },
  "w2-l4": { verseKey: "12:4", surahName: "Yusuf", ayahNumber: 4 },
  "w2-l5": { verseKey: "12:5", surahName: "Yusuf", ayahNumber: 5 },
  "w2-l6": { verseKey: "12:6", surahName: "Yusuf", ayahNumber: 6 },

  // ── World 3: Surah Ar-Rahman ──────────────────────────────
  "w3-l1": { verseKey: "55:1", surahName: "Ar-Rahman", ayahNumber: 1 },
  "w3-l2": { verseKey: "55:2", surahName: "Ar-Rahman", ayahNumber: 2 },
  "w3-l3": { verseKey: "55:3", surahName: "Ar-Rahman", ayahNumber: 3 },
  "w3-l4": { verseKey: "55:4", surahName: "Ar-Rahman", ayahNumber: 4 },
  "w3-l5": { verseKey: "55:5", surahName: "Ar-Rahman", ayahNumber: 5 },
  "w3-l6": { verseKey: "55:6", surahName: "Ar-Rahman", ayahNumber: 6 },
};
