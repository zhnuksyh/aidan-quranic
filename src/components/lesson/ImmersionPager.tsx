import { useState, useRef, useCallback, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  useWindowDimensions,
  ViewToken,
} from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useTheme } from "../../contexts/ThemeContext";
import { LessonContent } from "../../types/lesson";
import { getChapter } from "../../services/api/chapters";
import { TafsirPage } from "./immersion/TafsirPage";
import { AsbabPage } from "./immersion/AsbabPage";
import { RootWordPage } from "./immersion/RootWordPage";

type PageType = "tafsir" | "asbab" | "roots";

interface PageDef {
  key: PageType;
  label: string;
}

interface Props {
  content: LessonContent;
  onContinue: () => void;
}

export function ImmersionPager({ content, onContinue }: Props) {
  const { palette } = useTheme();
  const { width } = useWindowDimensions();
  const [currentPage, setCurrentPage] = useState(0);
  const [revelationPlace, setRevelationPlace] = useState<string | null>(null);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const chapterId = parseInt(content.verseKey.split(":")[0], 10);
    getChapter(chapterId)
      .then((ch) => {
        const place = ch.revelation_place;
        setRevelationPlace(place.charAt(0).toUpperCase() + place.slice(1));
      })
      .catch(() => {});
  }, [content.verseKey]);

  // Build pages dynamically — skip pages with no data
  const pages: PageDef[] = [];
  if (content.tafsirCards.length > 0) {
    pages.push({ key: "tafsir", label: "Tafsir" });
  }
  if (content.asbabCards.length > 0) {
    pages.push({ key: "asbab", label: "Asbab" });
  }
  if (content.rootWordData && content.rootWordData.length > 0) {
    pages.push({ key: "roots", label: "Roots" });
  }
  // Fallback: if no pages at all, still show tafsir page (with verse preview)
  if (pages.length === 0) {
    pages.push({ key: "tafsir", label: "Tafsir" });
  }

  const isLastPage = currentPage >= pages.length - 1;

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index != null) {
        setCurrentPage(viewableItems[0].index);
      }
    },
    []
  );

  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const goToNext = () => {
    if (isLastPage) {
      onContinue();
    } else {
      flatListRef.current?.scrollToIndex({ index: currentPage + 1, animated: true });
    }
  };

  const renderPage = useCallback(
    ({ item }: { item: PageDef }) => {
      return (
        <View style={{ width }}>
          {item.key === "tafsir" && <TafsirPage content={content} />}
          {item.key === "asbab" && <AsbabPage content={content} />}
          {item.key === "roots" && <RootWordPage content={content} />}
        </View>
      );
    },
    [content, width]
  );

  return (
    <View className="flex-1" style={{ backgroundColor: palette.background }}>
      {/* Header Badges */}
      <View className="flex-row items-center justify-center flex-wrap gap-2 mb-2">
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

      {/* Sub-page Dots */}
      {pages.length > 1 && (
        <View className="flex-row items-center justify-center gap-1.5 mb-3">
          {pages.map((_, index) => (
            <View
              key={index}
              className="rounded-full"
              style={{
                width: index === currentPage ? 20 : 6,
                height: 6,
                backgroundColor: palette.accent,
                opacity: index === currentPage ? 1 : 0.25,
              }}
            />
          ))}
        </View>
      )}

      {/* Horizontal Page FlatList */}
      <FlatList
        ref={flatListRef}
        data={pages}
        renderItem={renderPage}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        initialNumToRender={1}
        windowSize={3}
      />

      {/* Continue / Next Button */}
      <View className="px-2 pb-8 pt-3">
        <Pressable
          className="rounded-2xl py-4 items-center"
          style={{ backgroundColor: palette.accent }}
          onPress={goToNext}
        >
          <Text
            className="font-fredoka-bold text-base"
            style={{ color: palette.textOnAccent }}
          >
            {isLastPage ? "Continue to Quiz" : "Next →"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
