import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../src/contexts/ThemeContext";
import { useProgress } from "../../src/contexts/ProgressContext";
import { AvatarDisplay } from "../../src/components/profile/AvatarDisplay";
import { StatCard } from "../../src/components/profile/StatCard";
import { SettingsSection } from "../../src/components/profile/SettingsSection";
import { WORLD_PALETTES } from "../../src/constants/worlds";

export default function ProfileScreen() {
  const { palette, currentWorldId } = useTheme();
  const { progress } = useProgress();

  const currentWorld = WORLD_PALETTES[currentWorldId];

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: palette.background }}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 32 }}>
        <AvatarDisplay xp={progress.currentXP} />

        {/* Stats Row */}
        <View className="flex-row mb-8">
          <StatCard icon="star" value={progress.currentXP} label="Total XP" />
          <StatCard icon="flame" value={progress.streakDays} label="Day Streak" />
          <StatCard
            icon="checkmark-circle"
            value={progress.completedLessons.length}
            label="Lessons"
          />
        </View>

        {/* Current World */}
        <View
          className="rounded-2xl p-5 mb-6"
          style={{ backgroundColor: palette.accentLight }}
        >
          <Text
            className="font-fredoka-medium text-sm opacity-60 mb-1"
            style={{ color: palette.textOnBackground }}
          >
            Current World
          </Text>
          <Text
            className="font-fredoka-bold text-lg"
            style={{ color: palette.textOnBackground }}
          >
            {currentWorld?.name ?? "Unknown"}
          </Text>
        </View>

        {/* Unlocked Verses Count */}
        <View
          className="rounded-2xl p-5"
          style={{ backgroundColor: palette.accentLight }}
        >
          <Text
            className="font-fredoka-medium text-sm opacity-60 mb-1"
            style={{ color: palette.textOnBackground }}
          >
            Verse Collection
          </Text>
          <Text
            className="font-fredoka-bold text-lg"
            style={{ color: palette.textOnBackground }}
          >
            {progress.unlockedVerses.length} verse{progress.unlockedVerses.length !== 1 ? "s" : ""} unlocked
          </Text>
        </View>

        <SettingsSection />
      </ScrollView>
    </SafeAreaView>
  );
}
