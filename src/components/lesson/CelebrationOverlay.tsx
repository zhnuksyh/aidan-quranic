import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInUp, ZoomIn } from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import { useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { getLevelForXP, getXPProgress } from "../../constants/levels";

interface Props {
  xpGained: number;
  totalXP: number;
  onContinue: () => void;
}

export function CelebrationOverlay({ xpGained, totalXP, onContinue }: Props) {
  const { palette } = useTheme();
  const level = getLevelForXP(totalXP);
  const progress = getXPProgress(totalXP);

  useEffect(() => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      {/* Checkmark */}
      <Animated.View
        entering={ZoomIn.springify().damping(12)}
        className="w-24 h-24 rounded-full items-center justify-center mb-6"
        style={{ backgroundColor: palette.accent }}
      >
        <Ionicons name="checkmark" size={48} color={palette.textOnAccent} />
      </Animated.View>

      {/* Lesson Complete */}
      <Animated.Text
        entering={FadeInUp.duration(500).delay(300)}
        className="font-fredoka-bold text-2xl mb-2"
        style={{ color: palette.textOnBackground }}
      >
        Lesson Complete!
      </Animated.Text>

      {/* XP Gained */}
      <Animated.Text
        entering={FadeInUp.duration(500).delay(500)}
        className="font-fredoka-bold text-3xl mb-6"
        style={{ color: palette.accent }}
      >
        +{xpGained} XP
      </Animated.Text>

      {/* Level Info */}
      <Animated.View
        entering={FadeInUp.duration(500).delay(700)}
        className="w-full px-8 mb-8"
      >
        <View className="flex-row items-center justify-center mb-3">
          <Ionicons
            name={level.icon as any}
            size={20}
            color={palette.accent}
          />
          <Text
            className="font-fredoka-semibold text-base ml-2"
            style={{ color: palette.textOnBackground }}
          >
            Level {level.level}: {level.title}
          </Text>
        </View>

        {/* XP Progress Bar */}
        <View
          className="h-3 rounded-full overflow-hidden"
          style={{ backgroundColor: palette.accentLight }}
        >
          <View
            className="h-full rounded-full"
            style={{
              backgroundColor: palette.accent,
              width: `${Math.min(progress.fraction * 100, 100)}%`,
            }}
          />
        </View>
        <Text
          className="font-fredoka text-xs text-center mt-1 opacity-60"
          style={{ color: palette.textOnBackground }}
        >
          {progress.current} / {progress.needed} XP to next level
        </Text>
      </Animated.View>

      {/* Continue Button */}
      <Animated.View entering={FadeInUp.duration(400).delay(900)} className="w-full px-8">
        <Pressable
          className="rounded-2xl py-4 items-center"
          style={{ backgroundColor: palette.accent }}
          onPress={onContinue}
        >
          <Text
            className="font-fredoka-bold text-base"
            style={{ color: palette.textOnAccent }}
          >
            Continue
          </Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}
