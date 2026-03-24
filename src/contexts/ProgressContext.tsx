import React, { createContext, useContext, useState, useMemo, useCallback, useEffect, useRef } from "react";
import { UserProgress, DEFAULT_PROGRESS } from "../types/progress";
import { loadProgress, saveProgress, syncProgressToCloud, loadProgressFromCloud } from "../services/storage";
import { syncLessonCompletion } from "../services/api/qfUserApi";

interface ProgressContextValue {
  progress: UserProgress;
  isReady: boolean;
  completeLesson: (lessonId: string, verseKey: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  resetProgress: () => void;
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
  };
}

const ProgressContext = createContext<ProgressContextValue | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [isReady, setIsReady] = useState(false);
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

      return {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
        currentXP: prev.currentXP + 25,
        unlockedVerses: [...new Set([...prev.unlockedVerses, verseKey])],
        streakDays: newStreak,
        lastActiveDate: today,
      };
    });
  }, []);

  const resetProgress = useCallback(() => {
    setProgress(DEFAULT_PROGRESS);
  }, []);

  const isLessonCompleted = useCallback(
    (lessonId: string) => progress.completedLessons.includes(lessonId),
    [progress.completedLessons]
  );

  const value = useMemo(
    () => ({ progress, isReady, completeLesson, isLessonCompleted, resetProgress }),
    [progress, isReady, completeLesson, isLessonCompleted, resetProgress]
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
