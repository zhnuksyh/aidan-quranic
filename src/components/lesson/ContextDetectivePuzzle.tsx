import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import * as Haptics from "expo-haptics";
import Animated, {
  FadeInUp,
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { Search } from "lucide-react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { ContextDetectivePuzzle as ContextDetectivePuzzleType } from "../../types/lesson";

interface Props {
  puzzle: ContextDetectivePuzzleType;
  onCorrect: () => void;
}

export function ContextDetectivePuzzle({ puzzle, onCorrect }: Props) {
  const { palette } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isWrong, setIsWrong] = useState(false);
  const shakeX = useSharedValue(0);

  const shakeStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shakeX.value }],
  }));

  const handleSelect = async (index: number) => {
    if (selectedIndex !== null) return;
    setSelectedIndex(index);

    if (puzzle.scenarios[index].isCorrect) {
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
      {/* Detective Header */}
      <Animated.View
        entering={FadeInUp.duration(500)}
        className="rounded-2xl p-5 mx-2 mb-6"
        style={{ backgroundColor: palette.accent }}
      >
        <View className="flex-row items-center justify-center gap-2 mb-3">
          <Search size={22} color={palette.textOnAccent} strokeWidth={2} />
          <Text
            className="font-fredoka-bold text-base"
            style={{ color: palette.textOnAccent }}
          >
            Context Detective
          </Text>
        </View>
        <Text
          className="font-fredoka-semibold text-base leading-7 text-center"
          style={{ color: palette.textOnAccent }}
        >
          {puzzle.prompt}
        </Text>
      </Animated.View>

      {/* Scenario Cards */}
      <Animated.View style={shakeStyle} className="mx-2 gap-3">
        {puzzle.scenarios.map((scenario, index) => {
          const isSelected = selectedIndex === index;
          const isCorrectAnswer = isSelected && scenario.isCorrect;
          const isWrongAnswer = isSelected && isWrong;

          let bgColor = palette.accentLight;
          if (isCorrectAnswer) bgColor = palette.accent;
          if (isWrongAnswer) bgColor = "#EF4444";

          let textColor = palette.textOnBackground;
          if (isCorrectAnswer) textColor = palette.textOnAccent;
          if (isWrongAnswer) textColor = "#FFFFFF";

          return (
            <Animated.View
              key={index}
              entering={FadeInUp.duration(400).delay(200 + index * 150)}
            >
              <Pressable
                className="rounded-2xl px-5 py-4"
                style={{
                  backgroundColor: bgColor,
                  opacity: selectedIndex !== null && !isSelected ? 0.4 : 1,
                }}
                onPress={() => handleSelect(index)}
                disabled={selectedIndex !== null}
              >
                <Text
                  className="font-fredoka text-sm leading-6"
                  style={{ color: textColor }}
                >
                  {scenario.text}
                </Text>
              </Pressable>
            </Animated.View>
          );
        })}
      </Animated.View>
    </View>
  );
}
