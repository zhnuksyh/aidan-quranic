import { LessonNode } from "../types/lesson";

export const WORLD_LESSONS: Record<string, LessonNode[]> = {
  world1: [
    { id: "w1-l1", worldId: "world1", order: 1, verseKey: "1:1", title: "The Basmalah" },
    { id: "w1-l2", worldId: "world1", order: 2, verseKey: "1:2", title: "Lord of All" },
    { id: "w1-l3", worldId: "world1", order: 3, verseKey: "1:3", title: "The Most Merciful" },
    { id: "w1-l4", worldId: "world1", order: 4, verseKey: "1:4", title: "Day of Judgment" },
    { id: "w1-l5", worldId: "world1", order: 5, verseKey: "1:5", title: "The Straight Path" },
  ],
  world2: [
    { id: "w2-l1", worldId: "world2", order: 1, verseKey: "12:1", title: "The Clear Book" },
    { id: "w2-l2", worldId: "world2", order: 2, verseKey: "12:2", title: "An Arabic Quran" },
    { id: "w2-l3", worldId: "world2", order: 3, verseKey: "12:3", title: "The Best of Stories" },
    { id: "w2-l4", worldId: "world2", order: 4, verseKey: "12:4", title: "Yusuf's Dream" },
  ],
  world3: [
    { id: "w3-l1", worldId: "world3", order: 1, verseKey: "55:1", title: "The Most Gracious" },
    { id: "w3-l2", worldId: "world3", order: 2, verseKey: "55:2", title: "Taught the Quran" },
    { id: "w3-l3", worldId: "world3", order: 3, verseKey: "55:3", title: "Created Humanity" },
    { id: "w3-l4", worldId: "world3", order: 4, verseKey: "55:4", title: "Gift of Speech" },
  ],
};
