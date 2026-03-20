import { useEffect } from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";
import LottieView from "lottie-react-native";

const LOTTIE_MAP: Record<string, any> = {
  book: require("../../assets/lottie/book.json"),
  stars: require("../../assets/lottie/stars.json"),
  heart: require("../../assets/lottie/heart.json"),
  scales: require("../../assets/lottie/scales.json"),
  nature: require("../../assets/lottie/nature.json"),
};

interface Props {
  lottieAsset?: string;
  fallbackIcon: string;
  size: number;
  color: string;
}

export function LottieIcon({ lottieAsset, fallbackIcon, size, color }: Props) {
  const scale = useSharedValue(1);

  useEffect(() => {
    if (!lottieAsset || !LOTTIE_MAP[lottieAsset]) {
      scale.value = withRepeat(
        withTiming(1.08, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
        -1,
        true
      );
    }
  }, [lottieAsset, scale]);

  const pulseStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  if (lottieAsset && LOTTIE_MAP[lottieAsset]) {
    return (
      <View style={{ width: size, height: size, alignItems: "center", justifyContent: "center" }}>
        <LottieView
          source={LOTTIE_MAP[lottieAsset]}
          autoPlay
          loop
          style={{ width: size, height: size }}
        />
      </View>
    );
  }

  return (
    <Animated.View style={[{ alignItems: "center", justifyContent: "center" }, pulseStyle]}>
      <Ionicons name={fallbackIcon as any} size={size * 0.6} color={color} />
    </Animated.View>
  );
}
