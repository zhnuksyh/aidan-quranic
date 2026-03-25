export interface UserProgress {
  completedLessons: string[];
  currentXP: number;
  streakDays: number;
  unlockedVerses: string[];
  lastActiveDate: string | null;
  earnedBadges: string[];
}

export const DEFAULT_PROGRESS: UserProgress = {
  completedLessons: [],
  currentXP: 0,
  streakDays: 0,
  unlockedVerses: [],
  lastActiveDate: null,
  earnedBadges: [],
};
