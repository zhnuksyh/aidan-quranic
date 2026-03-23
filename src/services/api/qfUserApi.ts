import { getQFTokens, isQFConnected } from "../qfAuth";
import { loadProgress } from "../storage";

// ── Mock mode: matches qfAuth.ts ──
const QF_MOCK = true;

const QF_API_BASE = "https://apis.quran.foundation";
const QF_CLIENT_ID = "PLACEHOLDER_CLIENT_ID";

// ── Types ──

export interface QFStreak {
  id: string;
  type: "QURAN";
  status: "ACTIVE" | "INACTIVE";
  currentCount: number;
  startDate: string;
}

export interface QFBookmark {
  id: string;
  verseKey: string;
  createdAt: string;
}

// ── Authenticated fetch wrapper ──

async function qfFetch(path: string, options: RequestInit = {}): Promise<Response> {
  const tokens = await getQFTokens();
  if (!tokens) throw new Error("Not authenticated with Quran.com");

  return fetch(`${QF_API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": tokens.accessToken,
      "x-client-id": QF_CLIENT_ID,
      ...(options.headers as Record<string, string>),
    },
  });
}

// ── Streaks ──

export async function getStreaks(): Promise<QFStreak[]> {
  if (QF_MOCK) {
    const progress = await loadProgress();
    return [
      {
        id: "mock-streak",
        type: "QURAN",
        status: progress.streakDays > 0 ? "ACTIVE" : "INACTIVE",
        currentCount: progress.streakDays,
        startDate: new Date().toISOString(),
      },
    ];
  }

  const res = await qfFetch("/streaks?type=QURAN&status=ACTIVE");
  const data = await res.json();
  return data.streaks ?? [];
}

// ── Reading Sessions ──

export async function createReadingSession(verseKey: string): Promise<void> {
  const [chapter, verse] = verseKey.split(":").map(Number);

  if (QF_MOCK) {
    console.log(`[QF API] Mock: createReadingSession(${chapter}:${verse})`);
    return;
  }

  await qfFetch("/reading-sessions", {
    method: "POST",
    body: JSON.stringify({
      chapterNumber: chapter,
      verseFrom: verse,
      verseTo: verse,
    }),
  });
}

// ── Activity Days ──

export async function postActivityDay(): Promise<void> {
  if (QF_MOCK) {
    console.log("[QF API] Mock: postActivityDay()");
    return;
  }

  await qfFetch("/activity-days", {
    method: "POST",
    body: JSON.stringify({
      type: "QURAN",
      date: new Date().toISOString().split("T")[0],
    }),
  });
}

// ── Bookmarks ──

const BOOKMARKS_KEY = "@aidan_qf_bookmarks";

export async function addBookmark(verseKey: string): Promise<void> {
  if (QF_MOCK) {
    // Save locally
    const AsyncStorage = (await import("@react-native-async-storage/async-storage")).default;
    const raw = await AsyncStorage.getItem(BOOKMARKS_KEY);
    const bookmarks: string[] = raw ? JSON.parse(raw) : [];
    if (!bookmarks.includes(verseKey)) {
      bookmarks.push(verseKey);
      await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
    }
    console.log(`[QF API] Mock: addBookmark(${verseKey})`);
    return;
  }

  const [chapter, verse] = verseKey.split(":").map(Number);
  await qfFetch("/bookmarks", {
    method: "POST",
    body: JSON.stringify({ key: chapter, verseNumber: verse, type: "ayah" }),
  });
}

export async function removeBookmark(verseKey: string): Promise<void> {
  if (QF_MOCK) {
    const AsyncStorage = (await import("@react-native-async-storage/async-storage")).default;
    const raw = await AsyncStorage.getItem(BOOKMARKS_KEY);
    const bookmarks: string[] = raw ? JSON.parse(raw) : [];
    const filtered = bookmarks.filter((k) => k !== verseKey);
    await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(filtered));
    console.log(`[QF API] Mock: removeBookmark(${verseKey})`);
    return;
  }

  // Real API: would need bookmark ID — fetch bookmarks first, find matching, then DELETE
}

export async function getBookmarks(): Promise<string[]> {
  if (QF_MOCK) {
    const AsyncStorage = (await import("@react-native-async-storage/async-storage")).default;
    const raw = await AsyncStorage.getItem(BOOKMARKS_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  const res = await qfFetch("/bookmarks?type=ayah");
  const data = await res.json();
  return (data.bookmarks ?? []).map((b: { key: number; verseNumber: number }) => `${b.key}:${b.verseNumber}`);
}

// ── Sync helper: call after lesson completion ──

export async function syncLessonCompletion(verseKey: string): Promise<void> {
  const connected = await isQFConnected();
  if (!connected) return;

  try {
    await Promise.all([
      createReadingSession(verseKey),
      postActivityDay(),
    ]);
  } catch {
    // Fire-and-forget — local progress is source of truth
  }
}
