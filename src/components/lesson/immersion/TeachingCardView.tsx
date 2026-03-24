import { View, Text } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import {
  BookOpen, Heart, Sun, Star, Globe, Shield,
  Users, Scale, Compass, Flame, Leaf, Eye, Moon,
} from "lucide-react-native";
import { TeachingCard } from "../../../types/lesson";

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

const ARABIC_RE = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/;
const ARABIC_RUN_RE =
  /([\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF][\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF\u064B-\u065F\s\u060C\u061B\u061F\u0640«»\-]*[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF\u064B-\u065F])/g;

interface TextSegment {
  text: string;
  isArabic: boolean;
}

function splitByLanguage(text: string): TextSegment[] {
  if (!ARABIC_RE.test(text)) {
    return [{ text, isArabic: false }];
  }

  const parts: TextSegment[] = [];
  let lastIndex = 0;
  ARABIC_RUN_RE.lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = ARABIC_RUN_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      const english = cleanSegment(text.slice(lastIndex, match.index));
      if (english) parts.push({ text: english, isArabic: false });
    }
    const arabic = cleanSegment(match[0]);
    if (arabic) parts.push({ text: arabic, isArabic: true });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    const remaining = cleanSegment(text.slice(lastIndex));
    if (remaining) parts.push({ text: remaining, isArabic: false });
  }

  return parts.length > 0 ? parts : [{ text, isArabic: false }];
}

function cleanSegment(s: string): string {
  return s.replace(/^[\s.,:;]+/, "").replace(/[\s.]+$/, "").trim();
}

interface Props {
  card: TeachingCard;
  index: number;
  palette: any;
}

export function TeachingCardView({ card, index, palette }: Props) {
  const IconComponent = ICON_MAP[card.icon] || BookOpen;

  return (
    <Animated.View
      entering={FadeInUp.duration(500).delay((index + 1) * 200)}
      className="rounded-2xl p-5 mb-4"
      style={{ backgroundColor: palette.accent, opacity: 0.92 }}
    >
      <View className="items-center mb-3">
        <IconComponent size={28} color={palette.textOnAccent} strokeWidth={2} />
      </View>

      <Text
        className="font-fredoka-bold text-lg text-center mb-2"
        style={{ color: palette.textOnAccent }}
      >
        {card.title}
      </Text>

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
}
