export interface XPLevel {
  level: number;
  title: string;
  minXP: number;
  icon: string;
}

export const XP_LEVELS: XPLevel[] = [
  { level: 1, title: "Seeker", minXP: 0, icon: "leaf" },
  { level: 2, title: "Explorer", minXP: 100, icon: "compass" },
  { level: 3, title: "Scholar", minXP: 250, icon: "book" },
  { level: 4, title: "Illuminated", minXP: 500, icon: "sunny" },
  { level: 5, title: "Guardian", minXP: 1000, icon: "shield-checkmark" },
];

export function getLevelForXP(xp: number): XPLevel {
  for (let i = XP_LEVELS.length - 1; i >= 0; i--) {
    if (xp >= XP_LEVELS[i].minXP) return XP_LEVELS[i];
  }
  return XP_LEVELS[0];
}

export function getXPProgress(xp: number): { current: number; needed: number; fraction: number } {
  const currentLevel = getLevelForXP(xp);
  const currentIdx = XP_LEVELS.indexOf(currentLevel);
  const nextLevel = XP_LEVELS[currentIdx + 1];
  if (!nextLevel) return { current: xp, needed: xp, fraction: 1 };
  const inLevel = xp - currentLevel.minXP;
  const span = nextLevel.minXP - currentLevel.minXP;
  return { current: inLevel, needed: span, fraction: inLevel / span };
}
