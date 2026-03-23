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

// Arabic Unicode ranges for detection
const ARABIC_RE =
  /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/;
// Match a run of Arabic text (including diacritics, spaces, punctuation between Arabic words)
const ARABIC_RUN_RE =
  /([\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF][\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF\u064B-\u065F\s\u060C\u061B\u061F\u0640«»\-]*[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF\u064B-\u065F])/g;

interface TextSegment {
  text: string;
  isArabic: boolean;
}

/**
 * Split text into alternating Arabic and non-Arabic segments.
 * Arabic runs are detected by Unicode ranges, not by \n delimiters.
 */
function splitByLanguage(text: string): TextSegment[] {
  if (!ARABIC_RE.test(text)) {
    return [{ text, isArabic: false }];
  }

  const parts: TextSegment[] = [];
  let lastIndex = 0;

  // Reset regex state
  ARABIC_RUN_RE.lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = ARABIC_RUN_RE.exec(text)) !== null) {
    // English text before this Arabic block
    if (match.index > lastIndex) {
      const english = cleanSegment(text.slice(lastIndex, match.index));
      if (english) parts.push({ text: english, isArabic: false });
    }
    // Arabic block
    const arabic = cleanSegment(match[0]);
    if (arabic) parts.push({ text: arabic, isArabic: true });
    lastIndex = match.index + match[0].length;
  }

  // Remaining non-Arabic text
  if (lastIndex < text.length) {
    const remaining = cleanSegment(text.slice(lastIndex));
    if (remaining) parts.push({ text: remaining, isArabic: false });
  }

  return parts.length > 0 ? parts : [{ text, isArabic: false }];
}

/** Remove stray leading/trailing periods and whitespace from a segment */
function cleanSegment(s: string): string {
  return s.replace(/^[\s.,:;]+/, "").replace(/[\s.]+$/, "").trim();
}

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

  // Collect unique source names for bottom attribution
  const sourceNames = [
    ...new Set(cards.map((c) => c.sourceName).filter(Boolean)),
  ];

  return (
    <View className="flex-1" style={{ backgroundColor: palette.background }}>
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

        {/* Teaching Cards (verbatim tafsir excerpts) */}
        {cards.map((card, index) => {
          const IconComponent = ICON_MAP[card.icon] || BookOpen;
          return (
            <Animated.View
              key={index}
              entering={FadeInUp.duration(500).delay((index + 1) * 200)}
              className="rounded-2xl p-5 mb-4"
              style={{ backgroundColor: palette.accent, opacity: 0.92 }}
            >
              {/* Icon */}
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

              {/* Card Body — split paragraphs first, then by language */}
              <View className="gap-3">
                {card.body.split("\n\n").map((paragraph, pIdx) => {
                  const segs = splitByLanguage(paragraph);
                  return (
                    <View key={pIdx} className="gap-1">
                      {segs.map((seg, sIdx) => (
                        <Text
                          key={sIdx}
                          className={`text-center ${
                            seg.isArabic
                              ? "text-base leading-10"
                              : "font-fredoka text-sm leading-6"
                          }`}
                          style={{
                            color: palette.textOnAccent,
                            opacity: 0.9,
                            writingDirection: seg.isArabic ? "rtl" : "ltr",
                          }}
                        >
                          {seg.text}
                        </Text>
                      ))}
                    </View>
                  );
                })}
              </View>

              {/* Per-card source attribution */}
              {card.sourceName && (
                <Text
                  className="font-fredoka text-xs text-center mt-3"
                  style={{ color: palette.textOnAccent, opacity: 0.5 }}
                >
                  — {card.sourceName}
                </Text>
              )}
            </Animated.View>
          );
        })}

        {/* Source Attribution */}
        {sourceNames.length > 0 && (
          <Animated.View
            entering={FadeInUp.duration(400).delay((cards.length + 1) * 200)}
            className="items-center mb-6"
          >
            <Text
              className="font-fredoka text-xs text-center"
              style={{ color: palette.textOnBackground, opacity: 0.5 }}
            >
              Sources: {sourceNames.join(" · ")} — Surah {content.surahName},
              Ayah {content.ayahNumber}
            </Text>
          </Animated.View>
        )}
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
