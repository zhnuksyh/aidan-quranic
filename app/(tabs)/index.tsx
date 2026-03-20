import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../src/contexts/ThemeContext";
import { WorldSwiper } from "../../src/components/adventure/WorldSwiper";
import { WorldSelectionMenu } from "../../src/components/adventure/WorldSelectionMenu";
import { LessonModal } from "../../src/components/lesson/LessonModal";

export default function AdventureScreen() {
  const { palette, avatarColor } = useTheme();
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: palette.background }}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 py-3">
        <View className="flex-row items-center gap-3">
          <View
            className="w-10 h-10 rounded-full items-center justify-center"
            style={{ backgroundColor: avatarColor }}
          >
            <Text className="font-fredoka-bold text-white text-lg">A</Text>
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
        <Pressable
          className="rounded-2xl px-4 py-2"
          style={{ backgroundColor: palette.accent }}
          onPress={() => setMenuVisible(true)}
        >
          <Ionicons name="list" size={18} color={palette.textOnAccent} />
        </Pressable>
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
