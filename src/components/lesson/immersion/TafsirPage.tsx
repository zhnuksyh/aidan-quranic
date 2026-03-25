import { View, Text, ScrollView } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { BookOpen } from "lucide-react-native";
import { useTheme } from "../../../contexts/ThemeContext";
import { LessonContent, TeachingCard } from "../../../types/lesson";
import { TeachingCardView } from "./TeachingCardView";

interface Props {
  content: LessonContent;
}

export function TafsirPage({ content }: Props) {
  const { palette } = useTheme();
  const cards = content.tafsirCards;

  return (
    <ScrollView className="flex-1 px-2" showsVerticalScrollIndicator={false}>
      {/* Section Header */}
      <Animated.View
        entering={FadeInUp.duration(400)}
        className="flex-row items-center justify-center gap-2 mb-4"
      >
        <BookOpen size={20} color={palette.accent} strokeWidth={2} />
        <Text
          className="font-fredoka-semibold text-base"
          style={{ color: palette.accent }}
        >
          Let's begin with understanding the verse
        </Text>
      </Animated.View>

      {/* Verse Preview Card */}
      {(content.arabicText || content.translationText) && (
        <Animated.View
          entering={FadeInUp.duration(500)}
          className="rounded-2xl p-5 mb-4"
          style={{ backgroundColor: palette.accentLight }}
        >
          {content.arabicText && (
            <Text
              className="text-2xl text-center leading-[48px] mb-3"
              style={{ color: palette.textOnBackground, writingDirection: "rtl" }}
            >
              {content.arabicText}
            </Text>
          )}
          {content.arabicText && content.translationText && (
            <View
              className="h-px mx-8 mb-3"
              style={{ backgroundColor: palette.accent, opacity: 0.2 }}
            />
          )}
          {content.translationText && (
            <Text
              className="font-fredoka text-sm text-center leading-6"
              style={{ color: palette.textOnBackground, opacity: 0.8 }}
            >
              {content.translationText}
            </Text>
          )}
          {content.translationSource && (
            <Text
              className="font-fredoka text-xs text-center mt-2"
              style={{ color: palette.textOnBackground, opacity: 0.4 }}
            >
              Translation: {content.translationSource}
            </Text>
          )}
        </Animated.View>
      )}

      {/* Teaching Cards */}
      {cards.map((card, index) => (
        <TeachingCardView
          key={index}
          card={card}
          index={index}
          palette={palette}
        />
      ))}

      {/* Source Attribution */}
      {cards.length > 0 && (
        <Animated.View
          entering={FadeInUp.duration(400).delay((cards.length + 1) * 200)}
          className="items-center mb-6"
        >
          <Text
            className="font-fredoka text-xs text-center"
            style={{ color: palette.textOnBackground, opacity: 0.5 }}
          >
            Source: {cards[0]?.sourceName} — Surah {content.surahName}, Ayah{" "}
            {content.ayahNumber}
          </Text>
        </Animated.View>
      )}
    </ScrollView>
  );
}
