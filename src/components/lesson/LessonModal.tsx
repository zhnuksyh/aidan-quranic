import { useState } from "react";
import { View, Modal, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { useTheme } from "../../contexts/ThemeContext";
import { useProgress } from "../../contexts/ProgressContext";
import { LESSON_METADATA } from "../../data/lessonContent";
import { LessonPhase } from "../../types/lesson";
import { useLessonContent } from "../../hooks/useLessonContent";
import { PhaseIndicator } from "./PhaseIndicator";
import { ImmersionPhase } from "./ImmersionPhase";
import { RevealPhase } from "./RevealPhase";
import { AudioPhase } from "./AudioPhase";
import { CelebrationOverlay } from "./CelebrationOverlay";
import { LessonLoadingSkeleton } from "./LessonLoadingSkeleton";
import { ContentErrorState } from "./ContentErrorState";

// TODO: Re-enable "puzzle" phase after curated puzzles are ready
const PHASE_ORDER: LessonPhase[] = ["immersion", "reveal", "audio", "celebration"];

interface Props {
  lessonId: string | null;
  visible: boolean;
  onClose: () => void;
}

export function LessonModal({ lessonId, visible, onClose }: Props) {
  const { palette } = useTheme();
  const { completeLesson, isLessonCompleted, progress } = useProgress();
  const insets = useSafeAreaInsets();
  const [phase, setPhase] = useState<LessonPhase>("immersion");

  const metadata = lessonId ? LESSON_METADATA[lessonId] ?? null : null;
  const { content, isLoading, error, retry } = useLessonContent(metadata, visible);

  const advancePhase = () => {
    const idx = PHASE_ORDER.indexOf(phase);
    if (idx < PHASE_ORDER.length - 1) {
      const nextPhase = PHASE_ORDER[idx + 1];
      if (nextPhase === "celebration" && lessonId && content) {
        completeLesson(lessonId, content.verseKey);
      }
      setPhase(nextPhase);
    } else {
      handleClose();
    }
  };

  const handleClose = () => {
    setPhase("immersion");
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="fullScreen">
      <View className="flex-1" style={{ backgroundColor: palette.background, paddingTop: insets.top }}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-4 py-2">
          <Pressable onPress={handleClose} className="p-2">
            <Ionicons name="close" size={24} color={palette.textOnBackground} />
          </Pressable>
          {content && <PhaseIndicator currentPhase={phase} />}
          <View className="w-10" />
        </View>

        {/* Content */}
        <View className="flex-1 px-5">
          {isLoading && <LessonLoadingSkeleton />}

          {error && !isLoading && (
            <ContentErrorState message={error} onRetry={retry} onClose={handleClose} />
          )}

          {content && !isLoading && !error && (
            <Animated.View
              key={phase}
              entering={FadeIn.duration(300)}
              exiting={FadeOut.duration(200)}
              className="flex-1"
            >
              {phase === "immersion" && (
                <ImmersionPhase content={content} onContinue={advancePhase} />
              )}
              {phase === "reveal" && (
                <RevealPhase content={content} onContinue={advancePhase} />
              )}
              {phase === "audio" && (
                <AudioPhase content={content} onFinish={advancePhase} />
              )}
              {phase === "celebration" && (
                <CelebrationOverlay
                  xpGained={lessonId && isLessonCompleted(lessonId) ? 0 : 25}
                  totalXP={progress.currentXP}
                  onContinue={advancePhase}
                />
              )}
            </Animated.View>
          )}
        </View>
      </View>
    </Modal>
  );
}
