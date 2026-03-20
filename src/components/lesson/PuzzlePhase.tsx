import { View, Text } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { DragDropPuzzle } from "./DragDropPuzzle";
import { TrueFalsePuzzle } from "./TrueFalsePuzzle";
import { MultipleChoicePuzzle } from "./MultipleChoicePuzzle";
import type {
  PuzzleItem,
  DragDropPuzzle as DragDropPuzzleType,
  TrueFalsePuzzle as TrueFalsePuzzleType,
  MultipleChoicePuzzle as MultipleChoicePuzzleType,
} from "../../types/lesson";

interface Props {
  puzzleItem: PuzzleItem;
  quizNumber: number;
  totalQuizzes: number;
  onCorrect: () => void;
}

export function PuzzlePhase({ puzzleItem, quizNumber, totalQuizzes, onCorrect }: Props) {
  const { palette } = useTheme();

  return (
    <View className="flex-1">
      {totalQuizzes > 1 && (
        <Text
          className="font-fredoka-semibold text-sm text-center mb-4"
          style={{ color: palette.accent }}
        >
          Quiz {quizNumber} of {totalQuizzes}
        </Text>
      )}

      {puzzleItem.puzzleType === "drag-drop" && (
        <DragDropPuzzle
          puzzle={puzzleItem.puzzleData as DragDropPuzzleType}
          onCorrect={onCorrect}
        />
      )}
      {puzzleItem.puzzleType === "true-false" && (
        <TrueFalsePuzzle
          puzzle={puzzleItem.puzzleData as TrueFalsePuzzleType}
          onCorrect={onCorrect}
        />
      )}
      {puzzleItem.puzzleType === "multiple-choice" && (
        <MultipleChoicePuzzle
          puzzle={puzzleItem.puzzleData as MultipleChoicePuzzleType}
          onCorrect={onCorrect}
        />
      )}
    </View>
  );
}
