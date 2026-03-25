import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserProgress, DEFAULT_PROGRESS } from "../types/progress";
import { supabase } from "./supabase";

const PROGRESS_KEY = "@aidan_progress";
const ONBOARDING_KEY = "@aidan_onboarding_seen";

export async function loadProgress(): Promise<UserProgress> {
  try {
    const raw = await AsyncStorage.getItem(PROGRESS_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    return { ...DEFAULT_PROGRESS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export async function saveProgress(progress: UserProgress): Promise<void> {
  try {
    await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch {
    // Silently fail — best effort persistence
  }
}

export async function hasSeenOnboarding(): Promise<boolean> {
  try {
    const val = await AsyncStorage.getItem(ONBOARDING_KEY);
    return val === "true";
  } catch {
    return false;
  }
}

export async function markOnboardingSeen(): Promise<void> {
  try {
    await AsyncStorage.setItem(ONBOARDING_KEY, "true");
  } catch {
    // Best effort
  }
}

export async function resetAllData(): Promise<void> {
  try {
    await AsyncStorage.multiRemove([PROGRESS_KEY, ONBOARDING_KEY]);
  } catch {
    // Best effort
  }
}

/** Upsert progress to Supabase user_progress table */
export async function syncProgressToCloud(progress: UserProgress): Promise<void> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    await supabase.from("user_progress").upsert(
      {
        user_id: user.id,
        completed_lessons: progress.completedLessons,
        current_xp: progress.currentXP,
        streak_days: progress.streakDays,
        unlocked_verses: progress.unlockedVerses,
        last_active_date: progress.lastActiveDate,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id" }
    );
  } catch {
    // Fire-and-forget — local is source of truth
  }
}

/** Load progress from Supabase, returns null if unavailable */
export async function loadProgressFromCloud(): Promise<UserProgress | null> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data, error } = await supabase
      .from("user_progress")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (error || !data) return null;

    return {
      completedLessons: data.completed_lessons ?? [],
      currentXP: data.current_xp ?? 0,
      streakDays: data.streak_days ?? 0,
      unlockedVerses: data.unlocked_verses ?? [],
      lastActiveDate: data.last_active_date ?? null,
      earnedBadges: data.earned_badges ?? [],
      dailyChallengeDate: data.daily_challenge_date ?? null,
      dailyChallengeId: data.daily_challenge_id ?? null,
      dailyChallengeCompleted: data.daily_challenge_completed ?? false,
      masteryData: data.mastery_data ?? {},
    };
  } catch {
    return null;
  }
}
