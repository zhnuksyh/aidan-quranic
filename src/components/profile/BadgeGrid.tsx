import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useTheme } from "../../contexts/ThemeContext";
import { useProgress } from "../../contexts/ProgressContext";
import { BADGES } from "../../constants/badges";
import { BadgeCategory } from "../../types/badges";

const CATEGORY_LABELS: Record<BadgeCategory, string> = {
  surah: "Surah Completion",
  streak: "Streak",
  milestone: "Milestones",
  xp: "XP Goals",
};

const CATEGORY_ORDER: BadgeCategory[] = ["milestone", "surah", "streak", "xp"];

export function BadgeGrid() {
  const { palette } = useTheme();
  const { progress } = useProgress();
  const earned = new Set(progress.earnedBadges);

  return (
    <View className="mb-6">
      <Text
        className="font-fredoka-bold text-lg mb-4"
        style={{ color: palette.textOnBackground }}
      >
        Achievements
      </Text>

      {CATEGORY_ORDER.map((category) => {
        const badges = BADGES.filter((b) => b.category === category);
        if (badges.length === 0) return null;

        return (
          <View key={category} className="mb-4">
            <Text
              className="font-fredoka-medium text-xs mb-2 uppercase tracking-wider"
              style={{ color: palette.textOnBackground, opacity: 0.5 }}
            >
              {CATEGORY_LABELS[category]}
            </Text>

            <View className="flex-row flex-wrap gap-3">
              {badges.map((badge, index) => {
                const isEarned = earned.has(badge.id);
                return (
                  <Animated.View
                    key={badge.id}
                    entering={FadeInUp.duration(300).delay(index * 80)}
                    className="rounded-2xl p-3 items-center"
                    style={{
                      backgroundColor: isEarned ? palette.accent : palette.accentLight,
                      opacity: isEarned ? 1 : 0.5,
                      width: "30%",
                    }}
                  >
                    <Ionicons
                      name={isEarned ? (badge.icon.replace("-outline", "") as any) : (badge.icon as any)}
                      size={24}
                      color={isEarned ? palette.textOnAccent : palette.textOnBackground}
                    />
                    <Text
                      className="font-fredoka-semibold text-xs text-center mt-2"
                      style={{
                        color: isEarned ? palette.textOnAccent : palette.textOnBackground,
                      }}
                      numberOfLines={2}
                    >
                      {badge.title}
                    </Text>
                    <Text
                      className="font-fredoka text-[10px] text-center mt-1"
                      style={{
                        color: isEarned ? palette.textOnAccent : palette.textOnBackground,
                        opacity: 0.7,
                      }}
                      numberOfLines={2}
                    >
                      {badge.description}
                    </Text>
                    {!isEarned && (
                      <Ionicons
                        name="lock-closed"
                        size={10}
                        color={palette.textOnBackground}
                        style={{ opacity: 0.4, marginTop: 4 }}
                      />
                    )}
                  </Animated.View>
                );
              })}
            </View>
          </View>
        );
      })}
    </View>
  );
}
