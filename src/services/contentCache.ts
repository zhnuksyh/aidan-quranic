import AsyncStorage from "@react-native-async-storage/async-storage";

const CACHE_PREFIX = "@aidan_verse_";
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export interface CachedTafsir {
  sourceId: string;
  sourceName: string;
  text: string;
  fetchedAt: number;
}

export interface CachedVerseContent {
  arabicText: string;
  translationText: string;
  translationSource: string;
  tafsirs: CachedTafsir[];
}

export async function getCachedContent(
  verseKey: string
): Promise<CachedVerseContent | null> {
  try {
    const raw = await AsyncStorage.getItem(`${CACHE_PREFIX}${verseKey}`);
    if (!raw) return null;

    const cached: CachedVerseContent & { _cachedAt?: number } =
      JSON.parse(raw);

    // Check TTL
    const oldest = cached.tafsirs.reduce(
      (min, t) => Math.min(min, t.fetchedAt),
      Date.now()
    );
    if (Date.now() - oldest > CACHE_TTL_MS) {
      await AsyncStorage.removeItem(`${CACHE_PREFIX}${verseKey}`);
      return null;
    }

    return cached;
  } catch {
    return null;
  }
}

export async function setCachedContent(
  verseKey: string,
  content: CachedVerseContent
): Promise<void> {
  try {
    await AsyncStorage.setItem(
      `${CACHE_PREFIX}${verseKey}`,
      JSON.stringify(content)
    );
  } catch {
    // Silently fail — caching is best-effort
  }
}
