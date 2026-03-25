import React, { createContext, useContext, useState, useMemo, useCallback, useEffect, useRef } from "react";
import { UserProgress, DEFAULT_PROGRESS } from "../types/progress";
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
}

function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

function getYesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
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

      const updated: UserProgress = {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
        currentXP: prev.currentXP + 25,
        unlockedVerses: [...new Set([...prev.unlockedVerses, verseKey])],
        streakDays: newStreak,
        lastActiveDate: today,
        earnedBadges: prev.earnedBadges,
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
    }),
    [progress, isReady, newlyEarnedBadges, completeLesson, isLessonCompleted, resetProgress, clearNewBadges]
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
