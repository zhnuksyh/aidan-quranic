import { useMemo, useEffect } from "react";
import { useProgress } from "../contexts/ProgressContext";
import { WORLD_LESSONS } from "../data/lessons";
import { LessonNode } from "../types/lesson";

const DAILY_BONUS_XP = 10;

function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

/** Deterministic daily pick: hash date string to pick from uncompleted lessons */
function hashDate(date: string): number {
  let hash = 0;
  for (let i = 0; i < date.length; i++) {
    hash = (hash * 31 + date.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

export function useDailyChallenge() {
  const { progress, setDailyChallenge } = useProgress();

  const result = useMemo(() => {
    const today = getToday();
    const allLessons = Object.values(WORLD_LESSONS).flat();
    const uncompleted = allLessons.filter(
      (l) => !progress.completedLessons.includes(l.id)
    );

    // If all lessons are completed, pick from all lessons (replay challenge)
    const pool = uncompleted.length > 0 ? uncompleted : allLessons;
    const index = hashDate(today) % pool.length;
    const challengeLesson: LessonNode = pool[index];

    // Check if today's challenge matches what's stored and is completed
    const isCompleted =
      progress.dailyChallengeDate === today &&
      progress.dailyChallengeId === challengeLesson.id &&
      progress.dailyChallengeCompleted;

    return {
      challengeLesson,
      isCompleted,
      bonusXP: DAILY_BONUS_XP,
    };
  }, [progress]);

  // Store the daily challenge in progress so completeLesson can detect it
  useEffect(() => {
    setDailyChallenge(result.challengeLesson.id);
  }, [result.challengeLesson.id, setDailyChallenge]);

  return result;
}
