import { PuzzleItem } from "../../types/lesson";
import { AL_FATIHA_PUZZLES } from "./al-fatiha";
import { YUSUF_PUZZLES } from "./yusuf";
import { AR_RAHMAN_PUZZLES } from "./ar-rahman";

/**
 * All curated puzzles merged into a single record, keyed by verseKey.
 * Each surah's puzzles live in their own file for maintainability.
 */
export const CURATED_PUZZLES: Record<string, PuzzleItem[]> = {
  ...AL_FATIHA_PUZZLES,
  ...YUSUF_PUZZLES,
  ...AR_RAHMAN_PUZZLES,
};
