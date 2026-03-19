import { useEffect, useState } from "react";
import { FlatList, Text, View, ActivityIndicator } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { QFChapter } from "../../types/verse";
import { getChapters } from "../../services/api";
import { SurahCard } from "./SurahCard";
import { FALLBACK_CHAPTERS } from "../../data/fallbackChapters";

export function SurahList() {
  const { palette } = useTheme();
  const [chapters, setChapters] = useState<QFChapter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await getChapters();
        if (mounted) setChapters(data);
      } catch {
        // Use fallback data if API fails
        if (mounted) setChapters(FALLBACK_CHAPTERS);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color={palette.accent} />
      </View>
    );
  }

  return (
    <FlatList
      data={chapters}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <SurahCard chapter={item} />}
      contentContainerStyle={{ paddingVertical: 8 }}
      ListHeaderComponent={
        <Text
          className="font-fredoka-bold text-xl mx-4 mb-4"
          style={{ color: palette.textOnBackground }}
        >
          114 Surahs
        </Text>
      }
    />
  );
}
