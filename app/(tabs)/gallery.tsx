import { useEffect, useState } from "react";
import { FlatList, Text, ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../src/contexts/ThemeContext";
import { useProgress } from "../../src/contexts/ProgressContext";
import { LESSON_METADATA } from "../../src/data/lessonContent";
import { getVerseByKey } from "../../src/services/api";
import { VerseCard } from "../../src/components/gallery/VerseCard";
import { EmptyGallery } from "../../src/components/gallery/EmptyGallery";

interface GalleryVerse {
  verseKey: string;
  arabicText: string;
  translationText: string;
  surahName: string;
  ayahNumber: number;
}

export default function GalleryScreen() {
  const { palette } = useTheme();
  const { progress } = useProgress();
  const [verses, setVerses] = useState<GalleryVerse[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (progress.unlockedVerses.length === 0) {
      setVerses([]);
      return;
    }

    let mounted = true;
    setLoading(true);

    async function fetchVerses() {
      const results: GalleryVerse[] = [];

      for (const key of progress.unlockedVerses) {
        // Get metadata for surahName/ayahNumber
        const meta = Object.values(LESSON_METADATA).find(
          (m) => m.verseKey === key
        );
        if (!meta) continue;

        try {
          const verse = await getVerseByKey(key);
          const translation = verse.translations?.[0]?.text ?? "";
          results.push({
            verseKey: key,
            arabicText: verse.text_uthmani,
            translationText: translation.replace(/<[^>]*>/g, ""),
            surahName: meta.surahName,
            ayahNumber: meta.ayahNumber,
          });
        } catch {
          // Still show the verse with metadata even if API fails
          results.push({
            verseKey: key,
            arabicText: "",
            translationText: "",
            surahName: meta.surahName,
            ayahNumber: meta.ayahNumber,
          });
        }
      }

      if (mounted) {
        setVerses(results);
        setLoading(false);
      }
    }

    fetchVerses();
    return () => { mounted = false; };
  }, [progress.unlockedVerses]);

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: palette.background }}>
      {loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color={palette.accent} />
        </View>
      ) : verses.length === 0 ? (
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
