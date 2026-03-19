import { useRef, useCallback, useEffect } from "react";
import { ScrollView, Dimensions, View, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { WORLD_PALETTES } from "../../constants/worlds";
import { AdventureMap } from "./AdventureMap";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const WORLD_IDS = Object.keys(WORLD_PALETTES);

interface Props {
  onLessonPress: (lessonId: string) => void;
}

export function WorldSwiper({ onLessonPress }: Props) {
  const { currentWorldId, setCurrentWorldId, palette } = useTheme();
  const scrollRef = useRef<ScrollView>(null);
  const isUserScroll = useRef(true);

  const onMomentumScrollEnd = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const pageIndex = Math.round(e.nativeEvent.contentOffset.x / SCREEN_WIDTH);
      const worldId = WORLD_IDS[pageIndex];
      if (worldId && worldId !== currentWorldId) {
        isUserScroll.current = true;
        setCurrentWorldId(worldId);
      }
    },
    [currentWorldId, setCurrentWorldId]
  );

  // Sync scroll when world changes from WorldSelectionMenu
  useEffect(() => {
    const targetIndex = WORLD_IDS.indexOf(currentWorldId);
    if (targetIndex >= 0) {
      scrollRef.current?.scrollTo({ x: targetIndex * SCREEN_WIDTH, animated: true });
    }
  }, [currentWorldId]);

  const initialIndex = WORLD_IDS.indexOf(currentWorldId);

  return (
    <View className="flex-1">
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onMomentumScrollEnd}
        contentOffset={{ x: initialIndex * SCREEN_WIDTH, y: 0 }}
      >
        {WORLD_IDS.map((worldId) => (
          <View key={worldId} style={{ width: SCREEN_WIDTH }}>
            <AdventureMap worldId={worldId} onLessonPress={onLessonPress} />
          </View>
        ))}
      </ScrollView>

      {/* Page Indicator */}
      <View className="flex-row justify-center py-2 gap-2">
        {WORLD_IDS.map((worldId) => (
          <View
            key={worldId}
            className="h-2 rounded-full"
            style={{
              width: worldId === currentWorldId ? 24 : 8,
              backgroundColor: worldId === currentWorldId
                ? palette.accent
                : palette.accentLight,
            }}
          />
        ))}
      </View>
    </View>
  );
}
