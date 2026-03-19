import { useState } from "react";
import { View, Modal, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeContext";
import { useProgress } from "../../contexts/ProgressContext";
import { LESSON_CONTENT } from "../../data/lessonContent";
import { LessonPhase } from "../../types/lesson";
import { PhaseIndicator } from "./PhaseIndicator";
import { ImmersionPhase } from "./ImmersionPhase";
import { PuzzlePhase } from "./PuzzlePhase";
import { RevealPhase } from "./RevealPhase";
import { AudioPhase } from "./AudioPhase";

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
            <PuzzlePhase content={content} onCorrect={advancePhase} />
          )}
          {phase === "reveal" && (
            <RevealPhase content={content} onContinue={advancePhase} />
          )}
          {phase === "audio" && (
            <AudioPhase content={content} onFinish={advancePhase} />
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
}
