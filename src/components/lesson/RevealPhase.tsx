import { useEffect, useState } from "react";
import { View, Text, Pressable, Share } from "react-native";
import * as Haptics from "expo-haptics";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useTheme } from "../../contexts/ThemeContext";
import { LessonContent } from "../../types/lesson";

interface Props {
  content: LessonContent;
  onContinue: () => void;
}

export function RevealPhase({ content, onContinue }: Props) {
  const { palette } = useTheme();
  const [showReflection, setShowReflection] = useState(false);

  const handleShare = async () => {
    if (!content.translationText && !content.arabicText) return;
    const source = content.translationSource ? ` (${content.translationSource})` : "";
    const parts = [
      content.translationText ? `"${content.translationText}"\n— Surah ${content.surahName}, Ayah ${content.ayahNumber}${source}` : null,
      content.arabicText ? `\n${content.arabicText}` : null,
      "\nStudied on Aidan — Quranic Learning",
    ].filter(Boolean);
    try {
      await Share.share({ message: parts.join("\n") });
    } catch {
      // User cancelled or platform error
    }
  };

  useEffect(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    const timer = setTimeout(() => setShowReflection(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 justify-center">
      {/* Reflection Prompt */}
      <Animated.View entering={FadeInUp.duration(500)} className="items-center mb-6 mx-4">
        <Text
          className="font-fredoka-medium text-sm text-center"
          style={{ color: palette.accent }}
        >
          Take a moment to reflect on this verse...
        </Text>
      </Animated.View>

      {/* Arabic Text */}
      <Animated.View entering={FadeInUp.duration(600).delay(200)} className="items-center mb-8">
        <Text
          className="text-3xl text-center leading-[56px]"
          style={{ color: palette.textOnBackground, writingDirection: "rtl" }}
        >
          {content.arabicText ?? ""}
        </Text>
      </Animated.View>

      {/* Translation */}
      {showReflection && (
        <Animated.View entering={FadeInUp.duration(600).delay(200)} className="items-center mb-8 mx-4">
          <View
            className="rounded-2xl p-5"
            style={{ backgroundColor: palette.accentLight }}
          >
            <Text
              className="font-fredoka text-base text-center leading-7"
              style={{ color: palette.textOnBackground }}
            >
              {content.translationText ?? ""}
            </Text>
          </View>
          <Text
            className="font-fredoka-light text-xs mt-3 opacity-60"
            style={{ color: palette.textOnBackground }}
          >
            Surah {content.surahName}, Ayah {content.ayahNumber}
          </Text>
          {content.translationSource && (
            <Text
              className="font-fredoka-light text-xs mt-1 opacity-40"
              style={{ color: palette.textOnBackground }}
            >
              Translation: {content.translationSource}
            </Text>
          )}
        </Animated.View>
      )}

      {/* Share Button */}
      {showReflection && (content.arabicText || content.translationText) && (
        <Animated.View entering={FadeInUp.duration(400).delay(300)} className="items-center mb-3">
          <Pressable
            className="flex-row items-center gap-2 py-2 px-4 rounded-full"
            style={{ backgroundColor: palette.accentLight }}
            onPress={handleShare}
          >
            <Ionicons name="share-social-outline" size={16} color={palette.accent} />
            <Text className="font-fredoka-medium text-sm" style={{ color: palette.accent }}>
              Share this verse
            </Text>
          </Pressable>
        </Animated.View>
      )}

      {/* Continue Button */}
      {showReflection && (
        <Animated.View entering={FadeInUp.duration(400).delay(400)}>
          <Pressable
            className="rounded-2xl py-4 mx-2 items-center"
            style={{ backgroundColor: palette.accent }}
            onPress={onContinue}
          >
            <Text
              className="font-fredoka-bold text-base"
              style={{ color: palette.textOnAccent }}
            >
              Listen to Recitation
            </Text>
          </Pressable>
        </Animated.View>
      )}
    </View>
  );
}
