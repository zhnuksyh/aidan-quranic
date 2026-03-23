import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { BookOpen, MoonStar, Heart } from "lucide-react-native";
import { useTheme } from "../../src/contexts/ThemeContext";
import { useProgress } from "../../src/contexts/ProgressContext";
import { WorldSwiper } from "../../src/components/adventure/WorldSwiper";
import { WorldSelectionMenu } from "../../src/components/adventure/WorldSelectionMenu";
import { LessonModal } from "../../src/components/lesson/LessonModal";

const LUCIDE_ICONS: Record<string, any> = {
  BookOpen,
  MoonStar,
  Heart,
};

export default function AdventureScreen() {
  const { palette, avatarColor } = useTheme();
  const { progress } = useProgress();
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);

  const xpDisplay = progress.currentXP >= 1000
    ? `${(progress.currentXP / 1000).toFixed(1)}k`
    : `${progress.currentXP}`;

  const IconComponent = LUCIDE_ICONS[palette.icon] || BookOpen;

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: palette.background }}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 py-3">
        <View className="flex-row items-center gap-3">
          <View
            className="w-10 h-10 rounded-full items-center justify-center"
            style={{ backgroundColor: avatarColor }}
          >
            <IconComponent size={20} color="#FFFFFF" strokeWidth={2.5} />
          </View>
          <View>
            <Text
              className="font-fredoka-bold text-lg"
              style={{ color: palette.textOnBackground }}
            >
              {palette.name}
            </Text>
            <Text
              className="font-fredoka text-xs opacity-60"
              style={{ color: palette.textOnBackground }}
            >
              {palette.subtitle}
            </Text>
          </View>
        </View>
        <View className="flex-row items-center gap-2">
          <View
            className="flex-row items-center gap-1 rounded-full px-3 py-1"
            style={{ backgroundColor: palette.accentLight }}
          >
            <Ionicons name="flame" size={14} color={palette.accent} />
            <Text
              className="font-fredoka-semibold text-sm"
              style={{ color: palette.textOnBackground }}
            >
              {progress.streakDays}
            </Text>
          </View>
          <View
            className="flex-row items-center gap-1 rounded-full px-3 py-1"
            style={{ backgroundColor: palette.accentLight }}
          >
            <Ionicons name="star" size={14} color={palette.accent} />
            <Text
              className="font-fredoka-semibold text-sm"
              style={{ color: palette.textOnBackground }}
            >
              {xpDisplay}
            </Text>
          </View>
          <Pressable
            className="rounded-2xl px-4 py-2"
            style={{ backgroundColor: palette.accent }}
            onPress={() => setMenuVisible(true)}
          >
            <Ionicons name="list" size={18} color={palette.textOnAccent} />
          </Pressable>
        </View>
      </View>

      {/* Lesson Node Map — swipe L/R between worlds */}
      <WorldSwiper onLessonPress={setSelectedLessonId} />

      {/* World Selection Menu */}
      <WorldSelectionMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
      />

      {/* Lesson Modal */}
      <LessonModal
        lessonId={selectedLessonId}
        visible={selectedLessonId !== null}
        onClose={() => setSelectedLessonId(null)}
      />
    </SafeAreaView>
  );
}
