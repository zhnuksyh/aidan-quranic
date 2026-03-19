import { View, ScrollView } from "react-native";
import { useProgress } from "../../contexts/ProgressContext";
import { WORLD_LESSONS } from "../../data/lessons";
import { LessonNodeComponent } from "./LessonNode";
import { NodePath } from "./NodePath";

interface Props {
  worldId: string;
  onLessonPress: (lessonId: string) => void;
}

export function AdventureMap({ worldId, onLessonPress }: Props) {
  const { isLessonCompleted } = useProgress();

  const lessons = WORLD_LESSONS[worldId] ?? [];

  return (
    <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 32, paddingTop: 16 }}>
      {lessons.map((lesson, index) => {
        const completed = isLessonCompleted(lesson.id);
        // A lesson is locked if the previous one isn't completed (except first)
        const isLocked = index > 0 && !isLessonCompleted(lessons[index - 1].id);

        // Zigzag: alternate left and right alignment
        const alignSelf = index % 2 === 0 ? "flex-start" : "flex-end";
        const marginHorizontal = 48;

        return (
          <View key={lesson.id}>
            {index > 0 && <NodePath />}
            <View style={{ alignSelf, marginHorizontal }}>
              <LessonNodeComponent
                lesson={lesson}
                isCompleted={completed}
                isLocked={isLocked}
                onPress={onLessonPress}
              />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
