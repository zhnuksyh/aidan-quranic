import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import * as Haptics from "expo-haptics";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "../../contexts/ThemeContext";
import { MultipleChoicePuzzle as MultipleChoicePuzzleType } from "../../types/lesson";

interface Props {
  puzzle: MultipleChoicePuzzleType;
  onCorrect: () => void;
}

export function MultipleChoicePuzzle({ puzzle, onCorrect }: Props) {
  const { palette } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isWrong, setIsWrong] = useState(false);
  const shakeX = useSharedValue(0);

  const shakeStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shakeX.value }],
  }));

  const handleSelect = async (index: number) => {
    setSelectedIndex(index);

    if (index === puzzle.correctIndex) {
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
        setSelectedIndex(null);
        setIsWrong(false);
      }, 800);
    }
  };

  return (
    <View className="flex-1 justify-center">
      {/* Question Card */}
      <Animated.View
        className="rounded-2xl p-5 mx-2 mb-8"
        style={[{ backgroundColor: palette.accent }, shakeStyle]}
      >
        <Text
          className="font-fredoka-semibold text-base leading-7 text-center"
          style={{ color: palette.textOnAccent }}
        >
          {puzzle.question}
        </Text>
      </Animated.View>

      {/* Options */}
      <View className="mx-2 gap-3">
        {puzzle.options.map((option, index) => {
          const isSelected = selectedIndex === index;
          const isCorrectAnswer = isSelected && index === puzzle.correctIndex;
          const isWrongAnswer = isSelected && isWrong;

          let bgColor = palette.accentLight;
          if (isCorrectAnswer) bgColor = palette.accent;
          if (isWrongAnswer) bgColor = "#EF4444";

          let textColor = palette.textOnBackground;
          if (isCorrectAnswer) textColor = palette.textOnAccent;
          if (isWrongAnswer) textColor = "#FFFFFF";

          return (
            <Pressable
              key={index}
              className="rounded-2xl px-5 py-4"
              style={{
                backgroundColor: bgColor,
                opacity: selectedIndex !== null && !isSelected ? 0.5 : 1,
              }}
              onPress={() => selectedIndex === null && handleSelect(index)}
              disabled={selectedIndex !== null}
            >
              <Text
                className="font-fredoka text-base"
                style={{ color: textColor }}
              >
                {option}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
