import React, { createContext, useContext, useState, useMemo, useCallback, useEffect, useRef } from "react";
import { UserProgress, MasteryEntry, DEFAULT_PROGRESS } from "../types/progress";
import { Badge } from "../types/badges";
import { getNewlyEarnedBadges, getEarnedBadgeIds } from "../constants/badges";
import { loadProgress, saveProgress, syncProgressToCloud, loadProgressFromCloud } from "../services/storage";
import { syncLessonCompletion } from "../services/api/qfUserApi";

interface ProgressContextValue {
  progress: UserProgress;
  isReady: boolean;
  newlyEarnedBadges: Badge[];
  completeLesson: (lessonId: string, verseKey: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  resetProgress: () => void;
  clearNewBadges: () => void;
  setDailyChallenge: (lessonId: string) => void;
  replayLesson: (lessonId: string, verseKey: string) => void;
  getMasteryStars: (verseKey: string) => number;
}

function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

function getYesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
}

/** Compute mastery stars from completion dates */
function computeStars(dates: string[]): number {
  if (dates.length === 0) return 0;
  if (dates.length === 1) return 1;
  // Sort dates
  const sorted = [...dates].sort();
  const first = sorted[0];
  const last = sorted[sorted.length - 1];
  const daysBetween = (new Date(last).getTime() - new Date(first).getTime()) / (1000 * 60 * 60 * 24);
  if (daysBetween >= 3) return 3;
  if (daysBetween >= 1) return 2;
  return 1;
}

function mergeMastery(
  a: Record<string, MasteryEntry>,
  b: Record<string, MasteryEntry>
): Record<string, MasteryEntry> {
  const result = { ...a };
  for (const key of Object.keys(b)) {
    if (!result[key]) {
      result[key] = b[key];
    } else {
      const allDates = [...new Set([...result[key].completionDates, ...b[key].completionDates])];
      result[key] = {
        completionDates: allDates,
        stars: computeStars(allDates),
        lastPracticed: result[key].lastPracticed > b[key].lastPracticed
          ? result[key].lastPracticed
          : b[key].lastPracticed,
      };
    }
  }
  return result;
}

/** Merge local + cloud: union of arrays, max of numbers */
function mergeProgress(local: UserProgress, cloud: UserProgress): UserProgress {
  return {
    completedLessons: [...new Set([...local.completedLessons, ...cloud.completedLessons])],
    currentXP: Math.max(local.currentXP, cloud.currentXP),
    streakDays: Math.max(local.streakDays, cloud.streakDays),
    unlockedVerses: [...new Set([...local.unlockedVerses, ...cloud.unlockedVerses])],
    lastActiveDate:
      local.lastActiveDate && cloud.lastActiveDate
        ? local.lastActiveDate > cloud.lastActiveDate
          ? local.lastActiveDate
          : cloud.lastActiveDate
        : local.lastActiveDate ?? cloud.lastActiveDate,
    earnedBadges: [...new Set([...local.earnedBadges, ...cloud.earnedBadges])],
    dailyChallengeDate: local.dailyChallengeDate && cloud.dailyChallengeDate
      ? local.dailyChallengeDate > cloud.dailyChallengeDate
        ? local.dailyChallengeDate
        : cloud.dailyChallengeDate
      : local.dailyChallengeDate ?? cloud.dailyChallengeDate,
    dailyChallengeId: local.dailyChallengeDate && cloud.dailyChallengeDate
      ? (local.dailyChallengeDate >= cloud.dailyChallengeDate
        ? local.dailyChallengeId
        : cloud.dailyChallengeId)
      : local.dailyChallengeId ?? cloud.dailyChallengeId,
    dailyChallengeCompleted: local.dailyChallengeDate && cloud.dailyChallengeDate
      ? (local.dailyChallengeDate >= cloud.dailyChallengeDate
        ? local.dailyChallengeCompleted
        : cloud.dailyChallengeCompleted)
      : local.dailyChallengeCompleted || cloud.dailyChallengeCompleted,
    masteryData: mergeMastery(local.masteryData, cloud.masteryData),
  };
}

const ProgressContext = createContext<ProgressContextValue | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [isReady, setIsReady] = useState(false);
  const [newlyEarnedBadges, setNewlyEarnedBadges] = useState<Badge[]>([]);
  const isLoaded = useRef(false);

  // Load from AsyncStorage on mount, then merge with cloud
  useEffect(() => {
    loadProgress().then(async (local) => {
      setProgress(local);
      isLoaded.current = true;
      setIsReady(true);

      // Attempt cloud merge in background
      try {
        const cloud = await loadProgressFromCloud();
        if (cloud) {
          setProgress((prev) => mergeProgress(prev, cloud));
        }
      } catch {
        // Cloud unavailable — local is fine
      }
    });
  }, []);

  // Save to AsyncStorage + cloud on every change (after initial load)
  useEffect(() => {
    if (isLoaded.current) {
      saveProgress(progress);
      syncProgressToCloud(progress); // fire-and-forget
    }
  }, [progress]);

  const completeLesson = useCallback((lessonId: string, verseKey: string) => {
    setProgress((prev) => {
      if (prev.completedLessons.includes(lessonId)) return prev;

      const today = getToday();
      let newStreak = prev.streakDays;

      if (prev.lastActiveDate === today) {
        // Already active today — no streak change
      } else if (prev.lastActiveDate === getYesterday()) {
        newStreak = prev.streakDays + 1;
      } else {
        // Gap > 1 day or first activity
        newStreak = 1;
      }

      // Sync to QF User API (fire-and-forget)
      syncLessonCompletion(verseKey);

      // Daily challenge bonus: +10 XP if this lesson is today's challenge
      const isDailyChallenge =
        prev.dailyChallengeDate === today &&
        prev.dailyChallengeId === lessonId &&
        !prev.dailyChallengeCompleted;
      const xpGain = 25 + (isDailyChallenge ? 10 : 0);

      // Initialize mastery for this verse
      const prevMastery = prev.masteryData[verseKey];
      const completionDates = [today];
      const newMastery: MasteryEntry = {
        stars: 1,
        lastPracticed: today,
        completionDates,
      };

      const updated: UserProgress = {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
        currentXP: prev.currentXP + xpGain,
        unlockedVerses: [...new Set([...prev.unlockedVerses, verseKey])],
        streakDays: newStreak,
        lastActiveDate: today,
        earnedBadges: prev.earnedBadges,
        dailyChallengeDate: prev.dailyChallengeDate,
        dailyChallengeId: prev.dailyChallengeId,
        dailyChallengeCompleted: isDailyChallenge ? true : prev.dailyChallengeCompleted,
        masteryData: { ...prev.masteryData, [verseKey]: prevMastery ?? newMastery },
      };

      // Check for newly earned badges
      const newBadges = getNewlyEarnedBadges(prev.earnedBadges, updated);
      if (newBadges.length > 0) {
        updated.earnedBadges = getEarnedBadgeIds(updated);
        // Schedule badge notification (can't call setState inside setState)
        setTimeout(() => setNewlyEarnedBadges(newBadges), 0);
      }

      return updated;
    });
  }, []);

  const clearNewBadges = useCallback(() => {
    setNewlyEarnedBadges([]);
  }, []);

  const replayLesson = useCallback((lessonId: string, verseKey: string) => {
    setProgress((prev) => {
      const today = getToday();
      const existing = prev.masteryData[verseKey];
      const allDates = existing
        ? [...new Set([...existing.completionDates, today])]
        : [today];
      const stars = computeStars(allDates);

      return {
        ...prev,
        masteryData: {
          ...prev.masteryData,
          [verseKey]: { stars, lastPracticed: today, completionDates: allDates },
        },
      };
    });
  }, []);

  const getMasteryStars = useCallback(
    (verseKey: string) => progress.masteryData[verseKey]?.stars ?? 0,
    [progress.masteryData]
  );

  const setDailyChallenge = useCallback((lessonId: string) => {
    const today = getToday();
    setProgress((prev) => {
      if (prev.dailyChallengeDate === today && prev.dailyChallengeId === lessonId) {
        return prev; // Already set for today
      }
      return { ...prev, dailyChallengeDate: today, dailyChallengeId: lessonId, dailyChallengeCompleted: false };
    });
  }, []);

  const resetProgress = useCallback(() => {
    setProgress(DEFAULT_PROGRESS);
    setNewlyEarnedBadges([]);
  }, []);

  const isLessonCompleted = useCallback(
    (lessonId: string) => progress.completedLessons.includes(lessonId),
    [progress.completedLessons]
  );

  const value = useMemo(
    () => ({
      progress,
      isReady,
      newlyEarnedBadges,
      completeLesson,
      isLessonCompleted,
      resetProgress,
      clearNewBadges,
      setDailyChallenge,
      replayLesson,
      getMasteryStars,
    }),
    [progress, isReady, newlyEarnedBadges, completeLesson, isLessonCompleted, resetProgress, clearNewBadges, setDailyChallenge, replayLesson, getMasteryStars]
  );

  return (
    <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}
