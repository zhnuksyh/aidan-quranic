import { useState } from "react";
import { View, Text, Modal, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeContext";
import { useProgress } from "../../contexts/ProgressContext";
import { LESSON_CONTENT } from "../../data/lessonContent";
import { LessonPhase } from "../../types/lesson";
import { PhaseIndicator } from "./PhaseIndicator";
import { ImmersionPhase } from "./ImmersionPhase";

const PHASE_ORDER: LessonPhase[] = ["immersion", "puzzle", "reveal", "audio"];

interface Props {
  lessonId: string | null;
  visible: boolean;
  onClose: () => void;
}

export function LessonModal({ lessonId, visible, onClose }: Props) {
  const { palette } = useTheme();
  const { completeLesson } = useProgress();
  const [phase, setPhase] = useState<LessonPhase>("immersion");

  const content = lessonId ? LESSON_CONTENT[lessonId] : null;

  const advancePhase = () => {
    const idx = PHASE_ORDER.indexOf(phase);
    if (idx < PHASE_ORDER.length - 1) {
      setPhase(PHASE_ORDER[idx + 1]);
    } else {
      // Lesson complete
      if (lessonId && content) {
        completeLesson(lessonId, content.verseKey);
      }
      handleClose();
    }
  };

  const handleClose = () => {
    setPhase("immersion");
    onClose();
  };

  if (!content) return null;

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="fullScreen">
      <SafeAreaView className="flex-1" style={{ backgroundColor: palette.background }}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-4 py-2">
          <Pressable onPress={handleClose} className="p-2">
            <Ionicons name="close" size={24} color={palette.textOnBackground} />
          </Pressable>
          <PhaseIndicator currentPhase={phase} />
          <View className="w-10" />
        </View>

        {/* Phase Content */}
        <View className="flex-1 px-5">
          {phase === "immersion" && (
            <ImmersionPhase content={content} onContinue={advancePhase} />
          )}
          {phase === "puzzle" && (
            <PlaceholderPhase
              title="Puzzle"
              subtitle="Test your understanding"
              onContinue={advancePhase}
            />
          )}
          {phase === "reveal" && (
            <PlaceholderPhase
              title="Reveal"
              subtitle={content.arabicText}
              onContinue={advancePhase}
            />
          )}
          {phase === "audio" && (
            <PlaceholderPhase
              title="Audio"
              subtitle="Listen to the recitation"
              onContinue={advancePhase}
            />
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
}

// Temporary placeholder for phases — will be replaced in subsequent commits
function PlaceholderPhase({
  title,
  subtitle,
  onContinue,
}: {
  title: string;
  subtitle: string;
  onContinue: () => void;
}) {
  const { palette } = useTheme();

  return (
    <View className="flex-1 justify-center items-center">
      <Text
        className="font-fredoka-bold text-2xl mb-2"
        style={{ color: palette.textOnBackground }}
      >
        {title}
      </Text>
      <Text
        className="font-fredoka text-base text-center mb-8 px-4"
        style={{ color: palette.textOnBackground }}
      >
        {subtitle}
      </Text>
      <Pressable
        className="rounded-2xl px-8 py-4"
        style={{ backgroundColor: palette.accent }}
        onPress={onContinue}
      >
        <Text
          className="font-fredoka-semibold text-base"
          style={{ color: palette.textOnAccent }}
        >
          Continue
        </Text>
      </Pressable>
    </View>
  );
}
