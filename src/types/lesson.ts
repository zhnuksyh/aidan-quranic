export type PuzzleType = "drag-drop" | "true-false";
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

export interface LessonContent {
  verseKey: string;
  surahName: string;
  ayahNumber: number;
  tafsirText: string;
  tafsirSourceName: string;
  arabicText: string;
  translationText: string;
  puzzleType: PuzzleType;
  puzzleData: DragDropPuzzle | TrueFalsePuzzle;
  audioUrl: string | null;
}
