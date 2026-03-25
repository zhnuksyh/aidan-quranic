import { View, Text, Pressable } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeContext";
import { useDailyChallenge } from "../../hooks/useDailyChallenge";

interface Props {
  onPress: (lessonId: string) => void;
}

export function DailyChallengeCard({ onPress }: Props) {
  const { palette } = useTheme();
  const { challengeLesson, isCompleted, bonusXP } = useDailyChallenge();

  return (
    <Animated.View entering={FadeInDown.duration(400)} className="mx-5 mb-3">
      <Pressable
        className="rounded-2xl p-4 flex-row items-center"
        style={{ backgroundColor: palette.accent, opacity: isCompleted ? 0.7 : 1 }}
        onPress={() => !isCompleted && onPress(challengeLesson.id)}
        disabled={isCompleted}
      >
        {/* Icon */}
        <View
          className="w-11 h-11 rounded-full items-center justify-center mr-3"
          style={{ backgroundColor: palette.textOnAccent, opacity: 0.2 }}
        >
          <Ionicons
            name={isCompleted ? "checkmark-circle" : "today"}
            size={24}
            color={palette.textOnAccent}
          />
        </View>

        {/* Text */}
        <View className="flex-1">
          <Text
            className="font-fredoka-bold text-sm"
            style={{ color: palette.textOnAccent }}
          >
            {isCompleted ? "Challenge Complete!" : "Today's Challenge"}
          </Text>
          <Text
            className="font-fredoka text-xs mt-0.5"
            style={{ color: palette.textOnAccent, opacity: 0.8 }}
          >
            {isCompleted
              ? `${challengeLesson.title} — Done for today!`
              : challengeLesson.title}
          </Text>
        </View>

        {/* XP Badge */}
        {!isCompleted && (
          <View
            className="rounded-full px-3 py-1"
            style={{ backgroundColor: palette.textOnAccent, opacity: 0.2 }}
          >
            <Text
              className="font-fredoka-bold text-xs"
              style={{ color: palette.textOnAccent }}
            >
              +{25 + bonusXP} XP
            </Text>
          </View>
        )}
      </Pressable>
    </Animated.View>
  );
}
