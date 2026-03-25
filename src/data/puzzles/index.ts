import { PuzzleItem } from "../../types/lesson";
import { AL_FATIHA_PUZZLES } from "./al-fatiha";
import { YUSUF_PUZZLES } from "./yusuf";
import { AR_RAHMAN_PUZZLES } from "./ar-rahman";

/**
 * All curated puzzles merged into a single record, keyed by verseKey.
 * Each surah's puzzles live in their own file for maintainability.
 */
const ALL_PUZZLES: Record<string, PuzzleItem[]> = {
  ...AL_FATIHA_PUZZLES,
  ...YUSUF_PUZZLES,
  ...AR_RAHMAN_PUZZLES,
};

/** Fisher-Yates shuffle */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Get a randomized subset of puzzles for a verse.
 * Picks up to `count` puzzles, ensuring variety of types when possible.
 */
export function getPuzzlesForVerse(verseKey: string, count = 3): PuzzleItem[] {
  const all = ALL_PUZZLES[verseKey];
  if (!all || all.length === 0) return [];
  if (all.length <= count) return shuffle(all);

  // Try to pick diverse types
  const byType = new Map<string, PuzzleItem[]>();
  for (const p of all) {
    const list = byType.get(p.puzzleType) ?? [];
    list.push(p);
    byType.set(p.puzzleType, list);
  }

  const picked: PuzzleItem[] = [];
  const types = shuffle([...byType.keys()]);

  // One from each type first
  for (const type of types) {
    if (picked.length >= count) break;
    const pool = byType.get(type)!;
    const idx = Math.floor(Math.random() * pool.length);
    picked.push(pool[idx]);
    pool.splice(idx, 1);
    if (pool.length === 0) byType.delete(type);
  }

  // Fill remaining from any type
  if (picked.length < count) {
    const remaining = all.filter((p) => !picked.includes(p));
    const extra = shuffle(remaining).slice(0, count - picked.length);
    picked.push(...extra);
  }

  return shuffle(picked);
}

// Legacy export for backward compatibility
export const CURATED_PUZZLES: Record<string, PuzzleItem[]> = ALL_PUZZLES;
