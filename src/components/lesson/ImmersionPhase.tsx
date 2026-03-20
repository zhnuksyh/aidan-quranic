import { useEffect, useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useTheme } from "../../contexts/ThemeContext";
import { LessonContent } from "../../types/lesson";
import { LottieIcon } from "./LottieIcon";
import { getChapter } from "../../services/api/chapters";

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
    <View className="flex-1">
      {/* Header Badges */}
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
            className="rounded-2xl px-3 py-2"
            style={{ backgroundColor: palette.accentLight }}
          >
            <Text
              className="font-fredoka text-xs"
              style={{ color: palette.accent }}
            >
              Revealed in {revelationPlace}
            </Text>
          </Animated.View>
        )}
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Teaching Cards */}
        {cards.map((card, index) => (
          <Animated.View
            key={index}
            entering={FadeInUp.duration(500).delay(index * 200)}
            className="mx-2 rounded-2xl p-5 mb-4"
            style={{ backgroundColor: palette.accent, opacity: 0.92 }}
          >
            {/* Lottie / Icon */}
            <View className="items-center mb-3">
              <LottieIcon
                lottieAsset={card.lottieAsset}
                fallbackIcon={card.icon}
                size={80}
                color={palette.textOnAccent}
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
        ))}

        {/* Avatar + Source Row */}
        <Animated.View
          entering={FadeInUp.duration(400).delay(cards.length * 200)}
          className="flex-row items-center justify-center gap-3 mb-4"
        >
          <View
            className="w-8 h-8 rounded-full items-center justify-center"
            style={{ backgroundColor: "#FB923C" }}
          >
            <Text className="font-fredoka-bold text-sm text-white">A</Text>
          </View>
          <Text
            className="font-fredoka text-xs"
            style={{ color: palette.textOnBackground, opacity: 0.6 }}
          >
            Source: {content.tafsirSourceName}
          </Text>
        </Animated.View>

        {/* Verse Preview Card */}
        <Animated.View
          entering={FadeInUp.duration(500).delay(cards.length * 200 + 200)}
          className="mx-2 rounded-2xl p-5 mb-6"
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
          Continue to Quiz
        </Text>
      </Pressable>
    </View>
  );
}
