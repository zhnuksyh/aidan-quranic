import { View, Text, Pressable, Share } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInUp, ZoomIn } from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import { useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { getLevelForXP, getXPProgress } from "../../constants/levels";
import { Badge } from "../../types/badges";

interface Props {
  xpGained: number;
  totalXP: number;
  lessonTitle?: string;
  streakDays?: number;
  newBadges?: Badge[];
  onContinue: () => void;
}

export function CelebrationOverlay({ xpGained, totalXP, lessonTitle, streakDays, newBadges, onContinue }: Props) {
  const { palette } = useTheme();
  const level = getLevelForXP(totalXP);
  const progress = getXPProgress(totalXP);

  const handleShare = async () => {
    const titleStr = lessonTitle ? `"${lessonTitle}"` : "a Quranic lesson";
    const streakStr = (streakDays ?? 0) > 0 ? ` | ${streakDays}-day streak` : "";
    const xpStr = xpGained > 0 ? `\n+${xpGained} XP | Level ${level.level}: ${level.title}${streakStr}` : "";
    const message = `Just completed ${titleStr} on Aidan!${xpStr}\n\nAidan — Your Quranic Companion`;
    try {
      await Share.share({ message });
    } catch {
      // User cancelled or platform error
    }
  };

  useEffect(() => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      {/* Checkmark */}
      <Animated.View
        entering={ZoomIn.springify().damping(20).stiffness(150)}
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
        {xpGained > 0 ? "Lesson Complete!" : "Practice Complete!"}
      </Animated.Text>

      {/* XP Gained — hide when replaying */}
      {xpGained > 0 && (
        <Animated.Text
          entering={FadeInUp.duration(500).delay(500)}
          className="font-fredoka-bold text-3xl mb-6"
          style={{ color: palette.accent }}
        >
          +{xpGained} XP
        </Animated.Text>
      )}
      {xpGained === 0 && <View className="mb-6" />}

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

      {/* New Badges */}
      {newBadges && newBadges.length > 0 && (
        <Animated.View
          entering={FadeInUp.duration(500).delay(800)}
          className="w-full px-8 mb-6"
        >
          <Text
            className="font-fredoka-semibold text-sm text-center mb-3"
            style={{ color: palette.textOnBackground, opacity: 0.7 }}
          >
            {newBadges.length === 1 ? "New Badge Earned!" : "New Badges Earned!"}
          </Text>
          <View className="flex-row justify-center gap-4">
            {newBadges.map((badge) => (
              <Animated.View
                key={badge.id}
                entering={ZoomIn.springify().damping(15).stiffness(120).delay(1000)}
                className="rounded-2xl p-3 items-center"
                style={{ backgroundColor: palette.accent, width: 90 }}
              >
                <Ionicons
                  name={badge.icon.replace("-outline", "") as any}
                  size={24}
                  color={palette.textOnAccent}
                />
                <Text
                  className="font-fredoka-semibold text-xs text-center mt-1"
                  style={{ color: palette.textOnAccent }}
                  numberOfLines={2}
                >
                  {badge.title}
                </Text>
              </Animated.View>
            ))}
          </View>
        </Animated.View>
      )}

      {/* Share Button */}
      <Animated.View entering={FadeInUp.duration(400).delay(newBadges && newBadges.length > 0 ? 1200 : 800)} className="w-full px-8 mb-3">
        <Pressable
          className="rounded-2xl py-3 items-center flex-row justify-center gap-2"
          style={{ backgroundColor: palette.accentLight }}
          onPress={handleShare}
        >
          <Ionicons name="share-social-outline" size={18} color={palette.accent} />
          <Text
            className="font-fredoka-semibold text-base"
            style={{ color: palette.accent }}
          >
            Share Achievement
          </Text>
        </Pressable>
      </Animated.View>

      {/* Continue Button */}
      <Animated.View entering={FadeInUp.duration(400).delay(newBadges && newBadges.length > 0 ? 1300 : 900)} className="w-full px-8">
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
