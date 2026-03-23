import { useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { MapPin } from "lucide-react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { LessonNode as LessonNodeType } from "../../types/lesson";

interface Props {
  lesson: LessonNodeType;
  isCompleted: boolean;
  isLocked: boolean;
  onPress: (lessonId: string) => void;
}

export function LessonNodeComponent({ lesson, isCompleted, isLocked, onPress }: Props) {
  const { palette } = useTheme();
  const isAccessible = !isLocked;
  const isCurrent = !isCompleted && !isLocked;
  const ayahNumber = lesson.verseKey.split(":")[1];

  const bounce = useSharedValue(0);

  useEffect(() => {
    if (isCurrent) {
      bounce.value = withRepeat(
        withTiming(-6, { duration: 800, easing: Easing.inOut(Easing.ease) }),
        -1,
        true
      );
    } else {
      bounce.value = 0;
    }
  }, [isCurrent]);

  const bounceStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: bounce.value }],
  }));

  return (
    <Pressable
      onPress={() => isAccessible && onPress(lesson.id)}
      className="items-center my-3"
      style={{ opacity: isAccessible ? 1 : 0.4 }}
    >
      <View style={{ overflow: "visible" }}>
        {/* Main node circle */}
        <View
          className="w-16 h-16 rounded-full items-center justify-center"
          style={{
            backgroundColor: isCompleted ? palette.accentLight : palette.accent,
            borderWidth: 3,
            borderColor: palette.background,
            overflow: "visible",
          }}
        >
          {isCompleted ? (
            <Ionicons name="checkmark" size={28} color={palette.textOnAccent} />
          ) : isLocked ? (
            <Ionicons name="lock-closed" size={20} color={palette.textOnAccent} />
          ) : (
            <Animated.View style={bounceStyle}>
              <MapPin size={26} color={palette.textOnAccent} strokeWidth={2.5} />
            </Animated.View>
          )}
        </View>

        {/* Ayah number badge — bottom-left, slightly overlapping */}
        <View
          className="absolute w-6 h-6 rounded-full items-center justify-center"
          style={{
            backgroundColor: palette.background,
            borderWidth: 2,
            borderColor: palette.accent,
            bottom: -2,
            left: -4,
          }}
        >
          <Text
            className="font-fredoka-bold"
            style={{ color: palette.accent, fontSize: 10 }}
          >
            {ayahNumber}
          </Text>
        </View>
      </View>

      <Text
        className="font-fredoka-medium text-sm mt-2 text-center"
        style={{ color: palette.textOnBackground, maxWidth: 120 }}
      >
        {lesson.title}
      </Text>
    </Pressable>
  );
}
