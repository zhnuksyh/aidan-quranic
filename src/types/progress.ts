export interface UserProgress {
  completedLessons: string[];
  currentXP: number;
  streakDays: number;
  unlockedVerses: string[];
  lastActiveDate: string | null;
  earnedBadges: string[];
  dailyChallengeDate: string | null;
  dailyChallengeId: string | null;
  dailyChallengeCompleted: boolean;
}

export const DEFAULT_PROGRESS: UserProgress = {
  completedLessons: [],
  currentXP: 0,
  streakDays: 0,
  unlockedVerses: [],
  lastActiveDate: null,
  earnedBadges: [],
  dailyChallengeDate: null,
  dailyChallengeId: null,
  dailyChallengeCompleted: false,
};
