import { View, Text, ScrollView } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { Compass } from "lucide-react-native";
import { useTheme } from "../../../contexts/ThemeContext";
import { LessonContent } from "../../../types/lesson";
import { TeachingCardView } from "./TeachingCardView";

interface Props {
  content: LessonContent;
}

export function AsbabPage({ content }: Props) {
  const { palette } = useTheme();
  const cards = content.asbabCards;

  return (
    <ScrollView className="flex-1 px-2" showsVerticalScrollIndicator={false}>
      {/* Section Header */}
      <Animated.View
        entering={FadeInUp.duration(400)}
        className="flex-row items-center justify-center gap-2 mb-4"
      >
        <Compass size={20} color={palette.accent} strokeWidth={2} />
        <Text
          className="font-fredoka-bold text-lg"
          style={{ color: palette.accent }}
        >
          Reasons of Revelation
        </Text>
      </Animated.View>

      {/* Context intro */}
      <Animated.View
        entering={FadeInUp.duration(400).delay(100)}
        className="rounded-2xl p-4 mb-4"
        style={{ backgroundColor: palette.accentLight }}
      >
        <Text
          className="font-fredoka text-sm text-center leading-6"
          style={{ color: palette.textOnBackground, opacity: 0.8 }}
        >
          Discover the historical context and circumstances that led to the revelation of this verse.
        </Text>
      </Animated.View>

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
