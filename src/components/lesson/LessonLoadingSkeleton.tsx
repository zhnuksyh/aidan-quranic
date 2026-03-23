import { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "../../contexts/ThemeContext";

export function LessonLoadingSkeleton() {
  const { palette } = useTheme();
  const opacity = useSharedValue(0.3);

  useEffect(() => {
    opacity.value = withRepeat(withTiming(0.7, { duration: 800 }), -1, true);
  }, []);

  const pulseStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const skeletonBg = palette.accentLight;

  return (
    <View className="flex-1 px-2 pt-4">
      {/* Badge skeleton */}
      <View className="flex-row items-center justify-center gap-2 mb-4">
        <Animated.View
          style={[pulseStyle, { backgroundColor: skeletonBg }]}
          className="rounded-2xl w-48 h-9"
        />
        <Animated.View
          style={[pulseStyle, { backgroundColor: skeletonBg }]}
          className="rounded-2xl w-36 h-9"
        />
      </View>

      {/* Verse card skeleton */}
      <Animated.View
        style={[pulseStyle, { backgroundColor: skeletonBg }]}
        className="rounded-2xl h-32 mb-4"
      />

      {/* Teaching card skeletons */}
      {[0, 1, 2].map((i) => (
        <Animated.View
          key={i}
          style={[pulseStyle, { backgroundColor: palette.accent, opacity: 0.2 }]}
          className="rounded-2xl h-40 mb-4"
        />
      ))}
    </View>
  );
}
