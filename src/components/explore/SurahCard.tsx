import { View, Text, Pressable } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { QFChapter } from "../../types/verse";

interface Props {
  chapter: QFChapter;
  onPress?: () => void;
}

export function SurahCard({ chapter, onPress }: Props) {
  const { palette } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center rounded-2xl p-4 mb-3 mx-4"
      style={{ backgroundColor: palette.accentLight }}
    >
      {/* Number Badge */}
      <View
        className="w-10 h-10 rounded-full items-center justify-center mr-4"
        style={{ backgroundColor: palette.accent }}
      >
        <Text
          className="font-fredoka-bold text-sm"
          style={{ color: palette.textOnAccent }}
        >
          {chapter.id}
        </Text>
      </View>

      {/* Names */}
      <View className="flex-1">
        <Text
          className="font-fredoka-semibold text-base"
          style={{ color: palette.textOnBackground }}
        >
          {chapter.name_simple}
        </Text>
        <Text
          className="font-fredoka text-xs opacity-60"
          style={{ color: palette.textOnBackground }}
        >
          {chapter.translated_name.name} · {chapter.verses_count} verses
        </Text>
      </View>

      {/* Arabic Name */}
      <Text
        className="text-lg"
        style={{ color: palette.textOnBackground, writingDirection: "rtl" }}
      >
        {chapter.name_arabic}
      </Text>
    </Pressable>
  );
}
