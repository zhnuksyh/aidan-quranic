import { LessonContent } from "../../types/lesson";
import { DragDropPuzzle } from "./DragDropPuzzle";
import { TrueFalsePuzzle } from "./TrueFalsePuzzle";
import type {
  DragDropPuzzle as DragDropPuzzleType,
  TrueFalsePuzzle as TrueFalsePuzzleType,
} from "../../types/lesson";

interface Props {
  content: LessonContent;
  onCorrect: () => void;
}

export function PuzzlePhase({ content, onCorrect }: Props) {
  if (content.puzzleType === "drag-drop") {
    return (
      <DragDropPuzzle
        puzzle={content.puzzleData as DragDropPuzzleType}
        onCorrect={onCorrect}
      />
    );
  }

  return (
    <TrueFalsePuzzle
      puzzle={content.puzzleData as TrueFalsePuzzleType}
      onCorrect={onCorrect}
    />
  );
}
