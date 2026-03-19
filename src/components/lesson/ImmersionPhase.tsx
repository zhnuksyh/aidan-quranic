import { View, Text, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeContext";
import { LessonContent } from "../../types/lesson";

interface Props {
  content: LessonContent;
  onContinue: () => void;
}

export function ImmersionPhase({ content, onContinue }: Props) {
  const { palette } = useTheme();

  return (
    <View className="flex-1">
      {/* Source Tracker */}
      <View
        className="self-center rounded-2xl px-4 py-2 mb-4"
        style={{ backgroundColor: palette.accentLight }}
      >
        <Text
          className="font-fredoka-medium text-sm"
          style={{ color: palette.textOnBackground }}
        >
          Surah {content.surahName}, Ayah {content.ayahNumber}
        </Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Placeholder Image Area */}
        <View
          className="mx-2 rounded-2xl h-48 items-center justify-center mb-5"
          style={{ backgroundColor: palette.accentLight, opacity: 0.6 }}
        >
          <Ionicons name="book-outline" size={48} color={palette.accent} />
          <Text
            className="font-fredoka-medium text-sm mt-2"
            style={{ color: palette.accent }}
          >
            {content.surahName}
          </Text>
        </View>

        {/* Tafsir Text */}
        <View
          className="mx-2 rounded-2xl p-5 mb-6"
          style={{ backgroundColor: palette.accent, opacity: 0.9 }}
        >
          <Text
            className="font-fredoka text-base leading-7"
            style={{ color: palette.textOnAccent }}
          >
            {content.tafsirText}
          </Text>
          <Text
            className="font-fredoka-light text-xs mt-4 opacity-70"
            style={{ color: palette.textOnAccent }}
          >
            Source: {content.tafsirSourceName}
          </Text>
        </View>
      </ScrollView>

      {/* Continue Button */}
      <Pressable
        className="rounded-2xl py-4 mx-2 mb-4 items-center"
        style={{ backgroundColor: palette.accent }}
        onPress={onContinue}
      >
        <Text
          className="font-fredoka-bold text-base"
          style={{ color: palette.textOnAccent }}
        >
          Continue to Puzzle
        </Text>
      </Pressable>
    </View>
  );
}
