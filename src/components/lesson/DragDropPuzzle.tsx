import { useState, useMemo } from "react";
import { View, Text, Pressable } from "react-native";
import * as Haptics from "expo-haptics";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "../../contexts/ThemeContext";
import { DragDropPuzzle as DragDropPuzzleType } from "../../types/lesson";

interface Props {
  puzzle: DragDropPuzzleType;
  onCorrect: () => void;
}

export function DragDropPuzzle({ puzzle, onCorrect }: Props) {
  const { palette } = useTheme();
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [isWrong, setIsWrong] = useState(false);
  const shakeX = useSharedValue(0);

  const shakeStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shakeX.value }],
  }));

  const handleSelect = async (word: string) => {
    setSelectedWord(word);

    if (word === puzzle.correctAnswer) {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setTimeout(onCorrect, 600);
    } else {
      setIsWrong(true);
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      shakeX.value = withSequence(
        withTiming(-10, { duration: 50 }),
        withTiming(10, { duration: 50 }),
        withTiming(-10, { duration: 50 }),
        withTiming(10, { duration: 50 }),
        withTiming(0, { duration: 50 })
      );
      setTimeout(() => {
        setSelectedWord(null);
        setIsWrong(false);
      }, 800);
    }
  };

  // Shuffle options once on mount
  const shuffledOptions = useMemo(() => {
    const opts = [...puzzle.options];
    for (let i = opts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opts[i], opts[j]] = [opts[j], opts[i]];
    }
    return opts;
  }, [puzzle.options]);

  // Split sentence around the blank
  const parts = puzzle.sentence.split("___");

  return (
    <View className="flex-1 justify-center">
      <Text
        className="font-fredoka-bold text-xl mb-8 text-center"
        style={{ color: palette.textOnBackground }}
      >
        Fill in the blank
      </Text>

      {/* Sentence with blank */}
      <Animated.View
        className="rounded-2xl p-5 mx-2 mb-8"
        style={[{ backgroundColor: palette.accent }, shakeStyle]}
      >
        <Text
          className="font-fredoka text-base leading-7 text-center"
          style={{ color: palette.textOnAccent }}
        >
          {parts[0]}
          <Text
            className="font-fredoka-bold"
            style={{
              color: isWrong ? "#EF4444" : palette.textOnAccent,
              textDecorationLine: "underline",
            }}
          >
            {selectedWord ?? " _____ "}
          </Text>
          {parts[1]}
        </Text>
      </Animated.View>

      {/* Word Options */}
      <View className="flex-row flex-wrap justify-center gap-3 mx-2">
        {shuffledOptions.map((word) => {
          const isSelected = selectedWord === word;
          return (
            <Pressable
              key={word}
              className="rounded-2xl px-5 py-3"
              style={{
                backgroundColor: isSelected ? palette.accent : palette.accentLight,
                opacity: selectedWord && !isSelected ? 0.5 : 1,
              }}
              onPress={() => !selectedWord && handleSelect(word)}
              disabled={selectedWord !== null}
            >
              <Text
                className="font-fredoka-semibold text-base"
                style={{
                  color: isSelected ? palette.textOnAccent : palette.textOnBackground,
                }}
              >
                {word}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
