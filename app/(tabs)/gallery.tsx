import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../src/contexts/ThemeContext";
import { useProgress } from "../../src/contexts/ProgressContext";
import { LESSON_CONTENT } from "../../src/data/lessonContent";
import { VerseCard } from "../../src/components/gallery/VerseCard";
import { EmptyGallery } from "../../src/components/gallery/EmptyGallery";

export default function GalleryScreen() {
  const { palette } = useTheme();
  const { progress } = useProgress();

  // Build verse data from unlocked verse keys
  const verses = progress.unlockedVerses
    .map((key) => {
      const lesson = Object.values(LESSON_CONTENT).find((l) => l.verseKey === key);
      if (!lesson) return null;
      return {
        verseKey: key,
        arabicText: lesson.arabicText,
        translationText: lesson.translationText,
        surahName: lesson.surahName,
        ayahNumber: lesson.ayahNumber,
      };
    })
    .filter(Boolean) as Array<{
      verseKey: string;
      arabicText: string;
      translationText: string;
      surahName: string;
      ayahNumber: number;
    }>;

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: palette.background }}>
      {verses.length === 0 ? (
        <EmptyGallery />
      ) : (
        <FlatList
          data={verses}
          keyExtractor={(item) => item.verseKey}
          numColumns={2}
          renderItem={({ item }) => <VerseCard {...item} />}
          contentContainerStyle={{ padding: 8 }}
          ListHeaderComponent={
            <Text
              className="font-fredoka-bold text-xl mx-2 mb-4"
              style={{ color: palette.textOnBackground }}
            >
              {verses.length} Verse{verses.length !== 1 ? "s" : ""} Unlocked
            </Text>
          }
        />
      )}
    </SafeAreaView>
  );
}
