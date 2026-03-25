export type BadgeCategory = "surah" | "streak" | "milestone" | "xp";

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: BadgeCategory;
}
