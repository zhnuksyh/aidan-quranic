import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
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
  const ayahNumber = lesson.verseKey.split(":")[1];

  return (
    <Pressable
      onPress={() => isAccessible && onPress(lesson.id)}
      className="items-center my-3"
      style={{ opacity: isAccessible ? 1 : 0.4 }}
    >
      <View>
        {/* Main node circle */}
        <View
          className="w-16 h-16 rounded-full items-center justify-center"
          style={{
            backgroundColor: isCompleted ? palette.accentLight : palette.accent,
            borderWidth: 3,
            borderColor: palette.background,
          }}
        >
          {isCompleted ? (
            <Ionicons name="checkmark" size={28} color={palette.textOnAccent} />
          ) : isLocked ? (
            <Ionicons name="lock-closed" size={20} color={palette.textOnAccent} />
          ) : (
            <Text
              className="font-fredoka-bold text-lg"
              style={{ color: palette.textOnAccent }}
            >
              {lesson.order}
            </Text>
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
