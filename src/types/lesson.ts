export type PuzzleType = "drag-drop" | "true-false" | "multiple-choice";
export type LessonPhase = "immersion" | "puzzle" | "reveal" | "audio" | "celebration";

export interface LessonNode {
  id: string;
  worldId: string;
  order: number;
  verseKey: string;
  title: string;
}

export interface DragDropPuzzle {
  sentence: string;
  options: string[];
  correctAnswer: string;
}

export interface TrueFalsePuzzle {
  statement: string;
  isTrue: boolean;
}

export interface MultipleChoicePuzzle {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface PuzzleItem {
  puzzleType: PuzzleType;
  puzzleData: DragDropPuzzle | TrueFalsePuzzle | MultipleChoicePuzzle;
}

export interface TeachingCard {
  title: string;
  body: string;
  icon: string;
  lottieAsset?: string;
}

export interface LessonContent {
  verseKey: string;
  surahName: string;
  ayahNumber: number;
  tafsirText: string;
  tafsirSourceName: string;
  arabicText: string;
  translationText: string;
  teachingCards: TeachingCard[];
  puzzles: PuzzleItem[];
  audioUrl: string | null;
}
