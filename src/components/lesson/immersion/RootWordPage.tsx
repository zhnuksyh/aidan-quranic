import { View, Text, ScrollView } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { Search } from "lucide-react-native";
import { useTheme } from "../../../contexts/ThemeContext";
import { LessonContent, RootWordEntry } from "../../../types/lesson";

interface Props {
  content: LessonContent;
}

export function RootWordPage({ content }: Props) {
  const { palette } = useTheme();
  const words = content.rootWordData ?? [];

  return (
    <ScrollView className="flex-1 px-2" showsVerticalScrollIndicator={false}>
      {/* Section Header */}
      <Animated.View
        entering={FadeInUp.duration(400)}
        className="flex-row items-center justify-center gap-2 mb-4"
      >
        <Search size={20} color={palette.accent} strokeWidth={2} />
        <Text
          className="font-fredoka-bold text-lg"
          style={{ color: palette.accent }}
        >
          Root Word Explorer
        </Text>
      </Animated.View>

      {/* Full Arabic Verse */}
      {content.arabicText && (
        <Animated.View
          entering={FadeInUp.duration(500).delay(100)}
          className="rounded-2xl p-5 mb-5"
          style={{ backgroundColor: palette.accentLight }}
        >
          <Text
            className="text-2xl text-center leading-[48px]"
            style={{ color: palette.textOnBackground, writingDirection: "rtl" }}
          >
            {content.arabicText}
          </Text>
        </Animated.View>
      )}

      {/* Word Cards */}
      {words.map((word, index) => (
        <Animated.View
          key={index}
          entering={FadeInUp.duration(400).delay(200 + index * 100)}
          className="rounded-2xl p-4 mb-3 flex-row items-center"
          style={{ backgroundColor: palette.accent, opacity: 0.92 }}
        >
          {/* Arabic Word */}
          <View className="flex-1 items-center">
            <Text
              className="text-2xl mb-1"
              style={{ color: palette.textOnAccent, writingDirection: "rtl" }}
            >
              {word.arabic}
            </Text>
            {word.rootArabic ? (
              <Text
                className="text-xs"
                style={{ color: palette.textOnAccent, opacity: 0.6 }}
              >
                Root: {word.root}
              </Text>
            ) : (
              <Text
                className="text-xs"
                style={{ color: palette.textOnAccent, opacity: 0.6 }}
              >
                {word.morphology}
              </Text>
            )}
          </View>

          {/* Divider */}
          <View
            className="w-px h-10 mx-3"
            style={{ backgroundColor: palette.textOnAccent, opacity: 0.2 }}
          />

          {/* English + Morphology */}
          <View className="flex-1">
            <Text
              className="font-fredoka-semibold text-sm mb-1"
              style={{ color: palette.textOnAccent }}
            >
              {word.translation}
            </Text>
            <Text
              className="font-fredoka text-xs"
              style={{ color: palette.textOnAccent, opacity: 0.6 }}
            >
              {word.morphology}
            </Text>
          </View>
        </Animated.View>
      ))}

      {/* Source Attribution */}
      <Animated.View
        entering={FadeInUp.duration(400).delay(200 + words.length * 100)}
        className="items-center mb-6 mt-2"
      >
        <Text
          className="font-fredoka text-xs text-center"
          style={{ color: palette.textOnBackground, opacity: 0.5 }}
        >
          Source: Quranic Arabic Corpus — corpus.quran.com
        </Text>
      </Animated.View>
    </ScrollView>
  );
}
