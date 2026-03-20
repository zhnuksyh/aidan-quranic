import { View, Text } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { DragDropPuzzle } from "./DragDropPuzzle";
import { TrueFalsePuzzle } from "./TrueFalsePuzzle";
import type {
  PuzzleItem,
  DragDropPuzzle as DragDropPuzzleType,
  TrueFalsePuzzle as TrueFalsePuzzleType,
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

      {puzzleItem.puzzleType === "drag-drop" ? (
        <DragDropPuzzle
          puzzle={puzzleItem.puzzleData as DragDropPuzzleType}
          onCorrect={onCorrect}
        />
      ) : (
        <TrueFalsePuzzle
          puzzle={puzzleItem.puzzleData as TrueFalsePuzzleType}
          onCorrect={onCorrect}
        />
      )}
    </View>
  );
}
