import { useState, useEffect } from "react";
import { View, Text, Pressable, Share } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeContext";
import { useProgress } from "../../contexts/ProgressContext";
import { addBookmark, removeBookmark, getBookmarks } from "../../services/api/qfUserApi";
import { MasteryStars } from "../shared/MasteryStars";

interface Props {
  verseKey: string;
  arabicText: string;
  translationText: string;
  surahName: string;
  ayahNumber: number;
}

export function VerseCard({ verseKey, arabicText, translationText, surahName, ayahNumber }: Props) {
  const { palette } = useTheme();
  const { getMasteryStars } = useProgress();
  const [bookmarked, setBookmarked] = useState(false);
  const masteryStars = getMasteryStars(verseKey);

  useEffect(() => {
    getBookmarks().then((bm) => setBookmarked(bm.includes(verseKey)));
  }, [verseKey]);

  const handleShare = async () => {
    if (!arabicText && !translationText) return;
    const parts = [
      arabicText || null,
      translationText ? `"${translationText}"\n— Surah ${surahName}, Ayah ${ayahNumber}` : null,
      "\nFrom my Aidan verse collection",
    ].filter(Boolean);
    try {
      await Share.share({ message: parts.join("\n\n") });
    } catch {
      // User cancelled or platform error
    }
  };

  const toggleBookmark = async () => {
    if (bookmarked) {
      await removeBookmark(verseKey);
      setBookmarked(false);
    } else {
      await addBookmark(verseKey);
      setBookmarked(true);
    }
  };

  return (
    <View
      className="flex-1 rounded-2xl p-4 m-1.5"
      style={{ backgroundColor: palette.accentLight }}
    >
      <Pressable
        className="absolute top-2 right-2 z-10 p-1"
        onPress={toggleBookmark}
        hitSlop={8}
      >
        <Ionicons
          name={bookmarked ? "heart" : "heart-outline"}
          size={18}
          color={bookmarked ? palette.accent : palette.textOnBackground}
          style={{ opacity: bookmarked ? 1 : 0.4 }}
        />
      </Pressable>
      <Pressable
        className="absolute top-8 right-2 z-10 p-1"
        onPress={handleShare}
        hitSlop={8}
      >
        <Ionicons
          name="share-social-outline"
          size={16}
          color={palette.textOnBackground}
          style={{ opacity: 0.4 }}
        />
      </Pressable>
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
      <View className="flex-row items-center justify-center gap-1 mt-1">
        <Text
          className="font-fredoka-light text-[10px] text-center opacity-50"
          style={{ color: palette.textOnBackground }}
        >
          {surahName} {ayahNumber}
        </Text>
        {masteryStars > 0 && (
          <MasteryStars
            stars={masteryStars}
            size={8}
            activeColor={palette.accent}
            inactiveColor={palette.textOnBackground}
          />
        )}
      </View>
    </View>
  );
}
