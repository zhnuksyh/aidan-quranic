import { useEffect, useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import {
  BookOpen,
  Heart,
  Sun,
  Star,
  Globe,
  Shield,
  Users,
  Scale,
  Compass,
  Flame,
  Leaf,
  Eye,
  Moon,
} from "lucide-react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { LessonContent } from "../../types/lesson";
import { getChapter } from "../../services/api/chapters";

const ICON_MAP: Record<string, any> = {
  "book-outline": BookOpen,
  "heart-outline": Heart,
  "sunny-outline": Sun,
  "star-outline": Star,
  "globe-outline": Globe,
  "shield-outline": Shield,
  "people-outline": Users,
  "scale-outline": Scale,
  "compass-outline": Compass,
  "flame-outline": Flame,
  "leaf-outline": Leaf,
  "eye-outline": Eye,
  "moon-outline": Moon,
};

interface Props {
  content: LessonContent;
  onContinue: () => void;
}

export function ImmersionPhase({ content, onContinue }: Props) {
  const { palette } = useTheme();
  const [revelationPlace, setRevelationPlace] = useState<string | null>(null);

  useEffect(() => {
    const chapterId = parseInt(content.verseKey.split(":")[0], 10);
    getChapter(chapterId)
      .then((ch) => {
        const place = ch.revelation_place;
        setRevelationPlace(place.charAt(0).toUpperCase() + place.slice(1));
      })
      .catch(() => {});
  }, [content.verseKey]);

  const cards = content.teachingCards;

  return (
    <View className="flex-1" style={{ backgroundColor: palette.background }}>
      {/* Header Badges — same sizing */}
      <View className="flex-row items-center justify-center flex-wrap gap-2 mb-4">
        <View
          className="rounded-2xl px-4 py-2"
          style={{ backgroundColor: palette.accentLight }}
        >
          <Text
            className="font-fredoka-medium text-sm"
            style={{ color: palette.textOnBackground }}
          >
            Surah {content.surahName} · Ayah {content.ayahNumber}
          </Text>
        </View>
        {revelationPlace && (
          <Animated.View
            entering={FadeInUp.duration(400)}
            className="rounded-2xl px-4 py-2"
            style={{ backgroundColor: palette.accentLight }}
          >
            <Text
              className="font-fredoka-medium text-sm"
              style={{ color: palette.textOnBackground }}
            >
              Revealed in {revelationPlace}
            </Text>
          </Animated.View>
        )}
      </View>

      <ScrollView className="flex-1 px-2" showsVerticalScrollIndicator={false}>
        {/* Verse Preview Card — at the TOP */}
        <Animated.View
          entering={FadeInUp.duration(500)}
          className="rounded-2xl p-5 mb-4"
          style={{ backgroundColor: palette.accentLight }}
        >
          <Text
            className="text-2xl text-center leading-[48px] mb-3"
            style={{ color: palette.textOnBackground, writingDirection: "rtl" }}
          >
            {content.arabicText}
          </Text>
          <View
            className="h-px mx-8 mb-3"
            style={{ backgroundColor: palette.accent, opacity: 0.2 }}
          />
          <Text
            className="font-fredoka text-sm text-center leading-6"
            style={{ color: palette.textOnBackground, opacity: 0.8 }}
          >
            {content.translationText}
          </Text>
        </Animated.View>

        {/* Teaching Cards */}
        {cards.map((card, index) => {
          const IconComponent = ICON_MAP[card.icon] || BookOpen;
          return (
            <Animated.View
              key={index}
              entering={FadeInUp.duration(500).delay((index + 1) * 200)}
              className="rounded-2xl p-5 mb-4"
              style={{ backgroundColor: palette.accent, opacity: 0.92 }}
            >
              {/* Lucide Icon */}
              <View className="items-center mb-3">
                <IconComponent
                  size={28}
                  color={palette.textOnAccent}
                  strokeWidth={2}
                />
              </View>

              {/* Card Title */}
              <Text
                className="font-fredoka-bold text-lg text-center mb-2"
                style={{ color: palette.textOnAccent }}
              >
                {card.title}
              </Text>

              {/* Card Body */}
              <Text
                className="font-fredoka text-sm leading-6 text-center"
                style={{ color: palette.textOnAccent, opacity: 0.9 }}
              >
                {card.body}
              </Text>
            </Animated.View>
          );
        })}

        {/* Source Attribution */}
        <Animated.View
          entering={FadeInUp.duration(400).delay((cards.length + 1) * 200)}
          className="items-center mb-6"
        >
          <Text
            className="font-fredoka text-xs text-center"
            style={{ color: palette.textOnBackground, opacity: 0.5 }}
          >
            Source: {content.tafsirSourceName} — Surah {content.surahName}, Ayah{" "}
            {content.ayahNumber}
          </Text>
        </Animated.View>
      </ScrollView>

      {/* Continue Button */}
      <View className="px-2 pb-8 pt-3">
        <Pressable
          className="rounded-2xl py-4 items-center"
          style={{ backgroundColor: palette.accent }}
          onPress={onContinue}
        >
          <Text
            className="font-fredoka-bold text-base"
            style={{ color: palette.textOnAccent }}
          >
            Continue to Quiz
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
