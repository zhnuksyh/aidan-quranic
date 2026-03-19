export interface UserProgress {
  completedLessons: string[];
  currentXP: number;
  streakDays: number;
  unlockedVerses: string[];
  lastActiveDate: string | null;
}
