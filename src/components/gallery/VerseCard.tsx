import { View, Text } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

interface Props {
  verseKey: string;
  arabicText: string;
  translationText: string;
  surahName: string;
  ayahNumber: number;
}

export function VerseCard({ verseKey, arabicText, translationText, surahName, ayahNumber }: Props) {
  const { palette } = useTheme();

  return (
    <View
      className="flex-1 rounded-2xl p-4 m-1.5"
      style={{ backgroundColor: palette.accentLight }}
    >
      <Text
        className="text-lg text-center leading-[32px] mb-2"
        style={{ color: palette.textOnBackground, writingDirection: "rtl" }}
        numberOfLines={3}
      >
        {arabicText}
      </Text>
      <Text
        className="font-fredoka text-xs text-center opacity-70 mb-1"
        style={{ color: palette.textOnBackground }}
        numberOfLines={2}
      >
        {translationText}
      </Text>
      <Text
        className="font-fredoka-light text-[10px] text-center opacity-50"
        style={{ color: palette.textOnBackground }}
      >
        {surahName} {ayahNumber}
      </Text>
    </View>
  );
}
