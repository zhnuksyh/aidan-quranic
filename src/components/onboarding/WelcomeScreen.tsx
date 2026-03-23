import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, { BounceIn, FadeInUp } from "react-native-reanimated";
import { WORLD_PALETTES, AVATAR_COLOR } from "../../constants/worlds";

const palette = WORLD_PALETTES.world1;

interface Props {
  onComplete: () => void;
}

const FEATURES = [
  { icon: "map-outline" as const, text: "Explore Tafsir stories" },
  { icon: "extension-puzzle-outline" as const, text: "Solve interactive puzzles" },
  { icon: "headset-outline" as const, text: "Listen to Quran recitation" },
];

export function WelcomeScreen({ onComplete }: Props) {
  return (
    <View
      className="flex-1 items-center justify-center px-8"
      style={{ backgroundColor: palette.background }}
    >
      {/* Avatar */}
      <Animated.View
        entering={BounceIn.duration(800)}
        className="w-28 h-28 rounded-full items-center justify-center mb-6"
        style={{ backgroundColor: AVATAR_COLOR }}
      >
        <Text className="font-fredoka-bold text-white text-5xl">A</Text>
      </Animated.View>

      {/* Title */}
      <Animated.Text
        entering={FadeInUp.duration(600).delay(400)}
        className="font-fredoka-bold text-4xl mb-2"
        style={{ color: palette.textOnBackground }}
      >
        Aidan
      </Animated.Text>

      <Animated.Text
        entering={FadeInUp.duration(600).delay(600)}
        className="font-fredoka text-base mb-10 opacity-70"
        style={{ color: palette.textOnBackground }}
      >
        Your Quranic companion
      </Animated.Text>

      {/* Features */}
      {FEATURES.map((feature, i) => (
        <Animated.View
          key={feature.icon}
          entering={FadeInUp.duration(500).delay(800 + i * 150)}
          className="flex-row items-center mb-4 w-full"
        >
          <View
            className="w-10 h-10 rounded-full items-center justify-center mr-4"
            style={{ backgroundColor: palette.accentLight }}
          >
            <Ionicons name={feature.icon} size={20} color={palette.accent} />
          </View>
          <Text
            className="font-fredoka-medium text-base"
            style={{ color: palette.textOnBackground }}
          >
            {feature.text}
          </Text>
        </Animated.View>
      ))}

      {/* Begin Button */}
      <Animated.View
        entering={FadeInUp.duration(500).delay(1300)}
        className="w-full mt-8"
      >
        <Pressable
          className="rounded-2xl py-4 items-center"
          style={{ backgroundColor: palette.accent }}
          onPress={onComplete}
        >
          <Text
            className="font-fredoka-bold text-lg"
            style={{ color: palette.textOnAccent }}
          >
            Begin Journey
          </Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}
