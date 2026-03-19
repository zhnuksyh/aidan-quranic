import React, { createContext, useContext, useState, useMemo, useCallback, useEffect, useRef } from "react";
import { UserProgress } from "../types/progress";
import { loadProgress, saveProgress } from "../services/storage";

interface ProgressContextValue {
  progress: UserProgress;
  completeLesson: (lessonId: string, verseKey: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  resetProgress: () => void;
}

const DEFAULT_PROGRESS: UserProgress = {
  completedLessons: [],
  currentXP: 0,
  streakDays: 0,
  unlockedVerses: [],
  lastActiveDate: null,
};

function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

function getYesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
}

const ProgressContext = createContext<ProgressContextValue | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const isLoaded = useRef(false);

  // Load from AsyncStorage on mount
  useEffect(() => {
    loadProgress().then((saved) => {
      setProgress(saved);
      isLoaded.current = true;
    });
  }, []);

  // Save to AsyncStorage on every change (after initial load)
  useEffect(() => {
    if (isLoaded.current) {
      saveProgress(progress);
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
    () => ({ progress, completeLesson, isLessonCompleted, resetProgress }),
    [progress, completeLesson, isLessonCompleted, resetProgress]
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
