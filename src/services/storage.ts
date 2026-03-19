import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserProgress } from "../types/progress";

const PROGRESS_KEY = "@aidan_progress";
const ONBOARDING_KEY = "@aidan_onboarding_seen";

const DEFAULT_PROGRESS: UserProgress = {
  completedLessons: [],
  currentXP: 0,
  streakDays: 0,
  unlockedVerses: [],
  lastActiveDate: null,
};

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
