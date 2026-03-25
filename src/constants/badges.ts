import { Badge } from "../types/badges";
import { UserProgress } from "../types/progress";
import { WORLD_LESSONS } from "../data/lessons";

export const BADGES: Badge[] = [
  // Surah Completion
  {
    id: "surah-fatiha",
    title: "Al-Fatiha Scholar",
    description: "Complete all 7 Al-Fatiha lessons",
    icon: "book-outline",
    category: "surah",
  },
  {
    id: "surah-yusuf",
    title: "Yusuf's Journey",
    description: "Complete all 6 Yusuf lessons",
    icon: "moon-outline",
    category: "surah",
  },
  {
    id: "surah-rahman",
    title: "Ar-Rahman's Gifts",
    description: "Complete all 6 Ar-Rahman lessons",
    icon: "heart-outline",
    category: "surah",
  },

  // Streak
  {
    id: "streak-3",
    title: "First Light",
    description: "Maintain a 3-day streak",
    icon: "sunny-outline",
    category: "streak",
  },
  {
    id: "streak-7",
    title: "Steady Flame",
    description: "Maintain a 7-day streak",
    icon: "flame-outline",
    category: "streak",
  },
  {
    id: "streak-30",
    title: "Unbreakable",
    description: "Maintain a 30-day streak",
    icon: "shield-outline",
    category: "streak",
  },

  // Milestones
  {
    id: "first-lesson",
    title: "First Step",
    description: "Complete your first lesson",
    icon: "footsteps-outline",
    category: "milestone",
  },
  {
    id: "ten-verses",
    title: "Ten Verses",
    description: "Unlock 10 verses",
    icon: "library-outline",
    category: "milestone",
  },
  {
    id: "all-verses",
    title: "All Verses",
    description: "Unlock all 19 verses",
    icon: "trophy-outline",
    category: "milestone",
  },

  // XP
  {
    id: "xp-100",
    title: "Century",
    description: "Reach 100 XP",
    icon: "star-outline",
    category: "xp",
  },
  {
    id: "xp-500",
    title: "Half Millennium",
    description: "Reach 500 XP",
    icon: "diamond-outline",
    category: "xp",
  },
  {
    id: "xp-1000",
    title: "Grand Scholar",
    description: "Reach 1,000 XP",
    icon: "school-outline",
    category: "xp",
  },
];

/** Check if a single badge has been earned based on current progress */
export function checkBadgeEarned(badge: Badge, progress: UserProgress): boolean {
  switch (badge.id) {
    // Surah completion
    case "surah-fatiha":
      return WORLD_LESSONS.world1.every((l) => progress.completedLessons.includes(l.id));
    case "surah-yusuf":
      return WORLD_LESSONS.world2.every((l) => progress.completedLessons.includes(l.id));
    case "surah-rahman":
      return WORLD_LESSONS.world3.every((l) => progress.completedLessons.includes(l.id));

    // Streak
    case "streak-3":
      return progress.streakDays >= 3;
    case "streak-7":
      return progress.streakDays >= 7;
    case "streak-30":
      return progress.streakDays >= 30;

    // Milestones
    case "first-lesson":
      return progress.completedLessons.length >= 1;
    case "ten-verses":
      return progress.unlockedVerses.length >= 10;
    case "all-verses":
      return progress.unlockedVerses.length >= 19;

    // XP
    case "xp-100":
      return progress.currentXP >= 100;
    case "xp-500":
      return progress.currentXP >= 500;
    case "xp-1000":
      return progress.currentXP >= 1000;

    default:
      return false;
  }
}

/** Get all badge IDs that should be earned for the given progress */
export function getEarnedBadgeIds(progress: UserProgress): string[] {
  return BADGES
    .filter((badge) => checkBadgeEarned(badge, progress))
    .map((badge) => badge.id);
}

/** Get newly earned badges by comparing before and after */
export function getNewlyEarnedBadges(
  prevEarned: string[],
  progress: UserProgress
): Badge[] {
  return BADGES.filter(
    (badge) =>
      !prevEarned.includes(badge.id) && checkBadgeEarned(badge, progress)
  );
}
