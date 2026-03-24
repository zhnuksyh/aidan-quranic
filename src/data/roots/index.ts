import { RootWordEntry } from "../../types/lesson";
import { AL_FATIHA_ROOTS } from "./al-fatiha";

/**
 * All root word data merged into a single record, keyed by verseKey.
 * Each surah's data lives in its own file. Add new surahs here as they're created.
 * Source: Quranic Arabic Corpus (corpus.quran.com)
 */
const ROOT_DATA: Record<string, RootWordEntry[]> = {
  ...AL_FATIHA_ROOTS,
};

export function getRootWordData(verseKey: string): RootWordEntry[] | null {
  return ROOT_DATA[verseKey] ?? null;
}
