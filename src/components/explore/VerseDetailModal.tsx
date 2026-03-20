import { useEffect, useState } from "react";
import { View, Text, Modal, FlatList, Pressable, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeContext";
import { QFChapter } from "../../types/verse";
import { getVersesByChapter } from "../../services/api";

interface VerseItem {
  verse_key: string;
  text_uthmani: string;
  translation: string;
}

interface Props {
  chapter: QFChapter | null;
  visible: boolean;
  onClose: () => void;
}

export function VerseDetailModal({ chapter, visible, onClose }: Props) {
  const { palette } = useTheme();
  const insets = useSafeAreaInsets();
  const [verses, setVerses] = useState<VerseItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!chapter || !visible) return;
    let mounted = true;
    setLoading(true);
    setError(false);

    getVersesByChapter(chapter.id)
      .then((data) => {
        if (mounted) setVerses(data);
      })
      .catch(() => {
        if (mounted) setError(true);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => { mounted = false; };
  }, [chapter, visible]);

  if (!chapter) return null;

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="fullScreen">
      <View className="flex-1" style={{ backgroundColor: palette.background, paddingTop: insets.top }}>
        {/* Header */}
        <View className="flex-row items-center px-4 py-3 mb-2">
          <Pressable onPress={onClose} className="p-2 mr-3">
            <Ionicons name="arrow-back" size={24} color={palette.textOnBackground} />
          </Pressable>
          <View className="flex-1">
            <Text
              className="font-fredoka-bold text-lg"
              style={{ color: palette.textOnBackground }}
            >
              {chapter.name_simple}
            </Text>
            <Text
              className="font-fredoka text-xs opacity-60"
              style={{ color: palette.textOnBackground }}
            >
              {chapter.translated_name.name} · {chapter.verses_count} verses
            </Text>
          </View>
          <Text
            className="text-xl"
            style={{ color: palette.textOnBackground }}
          >
            {chapter.name_arabic}
          </Text>
        </View>

        {/* Content */}
        {loading && (
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color={palette.accent} />
            <Text
              className="font-fredoka text-sm mt-3 opacity-60"
              style={{ color: palette.textOnBackground }}
            >
              Loading verses...
            </Text>
          </View>
        )}

        {error && !loading && (
          <View className="flex-1 items-center justify-center px-8">
            <Ionicons name="cloud-offline-outline" size={48} color={palette.accent} />
            <Text
              className="font-fredoka-semibold text-base mt-3 text-center"
              style={{ color: palette.textOnBackground }}
            >
              Unable to load verses
            </Text>
            <Pressable
              className="mt-4 rounded-2xl px-6 py-3"
              style={{ backgroundColor: palette.accent }}
              onPress={() => {
                setError(false);
                setLoading(true);
                getVersesByChapter(chapter.id)
                  .then(setVerses)
                  .catch(() => setError(true))
                  .finally(() => setLoading(false));
              }}
            >
              <Text
                className="font-fredoka-bold text-sm"
                style={{ color: palette.textOnAccent }}
              >
                Retry
              </Text>
            </Pressable>
          </View>
        )}

        {!loading && !error && (
          <FlatList
            data={verses}
            keyExtractor={(item) => item.verse_key}
            contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 32 }}
            renderItem={({ item }) => {
              const ayahNum = item.verse_key.split(":")[1];
              return (
                <View
                  className="rounded-2xl p-4 mb-3"
                  style={{ backgroundColor: palette.accentLight }}
                >
                  {/* Ayah Number */}
                  <View className="flex-row items-center mb-3">
                    <View
                      className="w-8 h-8 rounded-full items-center justify-center"
                      style={{ backgroundColor: palette.accent }}
                    >
                      <Text
                        className="font-fredoka-bold text-xs"
                        style={{ color: palette.textOnAccent }}
                      >
                        {ayahNum}
                      </Text>
                    </View>
                  </View>

                  {/* Arabic Text */}
                  <Text
                    className="text-xl leading-10 text-right mb-3"
                    style={{ color: palette.textOnBackground, writingDirection: "rtl" }}
                  >
                    {item.text_uthmani}
                  </Text>

                  {/* Translation */}
                  <Text
                    className="font-fredoka text-sm leading-5 opacity-70"
                    style={{ color: palette.textOnBackground }}
                  >
                    {item.translation.replace(/<[^>]*>/g, "")}
                  </Text>
                </View>
              );
            }}
          />
        )}
      </View>
    </Modal>
  );
}
