import { View, ScrollView } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useTheme } from "../../contexts/ThemeContext";
import { useProgress } from "../../contexts/ProgressContext";
import { WORLD_LESSONS } from "../../data/lessons";
import { LessonNodeComponent } from "./LessonNode";
import { NodePath } from "./NodePath";
import { MapBackground } from "./MapBackground";

interface Props {
  worldId: string;
  onLessonPress: (lessonId: string) => void;
}

export function AdventureMap({ worldId, onLessonPress }: Props) {
  const { palette } = useTheme();
  const { isLessonCompleted } = useProgress();

  const lessons = WORLD_LESSONS[worldId] ?? [];

  // Estimate scroll content height for background (~140px per node)
  const estimatedHeight = Math.max(lessons.length * 140, 600);

  return (
    <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 32, paddingTop: 16 }}>
      <MapBackground worldId={worldId} palette={palette} height={estimatedHeight} />
      {lessons.map((lesson, index) => {
        const completed = isLessonCompleted(lesson.id);
        // A lesson is locked if the previous one isn't completed (except first)
        const isLocked = index > 0 && !isLessonCompleted(lessons[index - 1].id);

        // Zigzag: alternate left and right alignment
        const alignSelf = index % 2 === 0 ? "flex-start" : "flex-end";
        const marginHorizontal = 48;

        return (
          <Animated.View
            key={lesson.id}
            entering={FadeInUp.delay(index * 120).springify()}
          >
            {index > 0 && (
              <NodePath
                direction={index % 2 === 0 ? "right-to-left" : "left-to-right"}
              />
            )}
            <View style={{ alignSelf, marginHorizontal }}>
              <LessonNodeComponent
                lesson={lesson}
                isCompleted={completed}
                isLocked={isLocked}
                onPress={onLessonPress}
              />
            </View>
          </Animated.View>
        );
      })}
    </ScrollView>
  );
}
