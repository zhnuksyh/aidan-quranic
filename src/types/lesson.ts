export type PuzzleType = "drag-drop" | "true-false" | "multiple-choice" | "context-detective" | "cause-effect";
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

export interface ContextDetectivePuzzle {
  prompt: string;
  scenarios: { text: string; isCorrect: boolean }[];
}

export interface CauseEffectPuzzle {
  pairs: { cause: string; effect: string }[];
}

export interface PuzzleItem {
  puzzleType: PuzzleType;
  puzzleData: DragDropPuzzle | TrueFalsePuzzle | MultipleChoicePuzzle | ContextDetectivePuzzle | CauseEffectPuzzle;
  sourceNote: string;
}

export interface TafsirSegment {
  sourceId: string;
  sourceName: string;
  text: string;
}

export type TeachingCardCategory = "tafsir" | "asbab" | "root";

export interface TeachingCard {
  title: string;
  body: string;
  icon: string;
  sourceId: string;
  sourceName: string;
  category: TeachingCardCategory;
}

export interface RootWordEntry {
  position: number;
  arabic: string;
  root: string;
  rootArabic: string;
  morphology: string;
  translation: string;
}

export interface LessonMetadata {
  verseKey: string;
  surahName: string;
  ayahNumber: number;
}

export interface LessonContent {
  verseKey: string;
  surahName: string;
  ayahNumber: number;
  arabicText: string | null;
  translationText: string | null;
  translationSource: string | null;
  tafsirSegments: TafsirSegment[];
  teachingCards: TeachingCard[];
  tafsirCards: TeachingCard[];
  asbabCards: TeachingCard[];
  rootWordData: RootWordEntry[] | null;
  puzzles: PuzzleItem[];
  audioUrl: string | null;
}
