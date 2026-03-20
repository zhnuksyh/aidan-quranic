import { useState, useEffect } from "react";
import { View, Modal, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { useTheme } from "../../contexts/ThemeContext";
import { useProgress } from "../../contexts/ProgressContext";
import { LESSON_CONTENT } from "../../data/lessonContent";
import { LessonPhase, LessonContent } from "../../types/lesson";
import { getTafsir } from "../../services/api";
import { PhaseIndicator } from "./PhaseIndicator";
import { ImmersionPhase } from "./ImmersionPhase";
import { PuzzlePhase } from "./PuzzlePhase";
import { RevealPhase } from "./RevealPhase";
import { AudioPhase } from "./AudioPhase";
import { CelebrationOverlay } from "./CelebrationOverlay";

const PHASE_ORDER: LessonPhase[] = ["immersion", "puzzle", "reveal", "audio", "celebration"];

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
  const [puzzleIndex, setPuzzleIndex] = useState(0);

  const baseContent = lessonId ? LESSON_CONTENT[lessonId] : null;
  const [enrichedContent, setEnrichedContent] = useState<LessonContent | null>(null);

  // Fetch live tafsir when lesson opens
  useEffect(() => {
    if (!baseContent || !visible) {
      setEnrichedContent(null);
      return;
    }

    let mounted = true;
    getTafsir(baseContent.verseKey)
      .then((tafsirs) => {
        if (!mounted || !tafsirs.length) return;
        const liveText = tafsirs[0].text.replace(/<[^>]*>/g, "");
        if (liveText.length > 50) {
          setEnrichedContent({
            ...baseContent,
            tafsirText: liveText,
            tafsirSourceName: tafsirs[0].resource_name || baseContent.tafsirSourceName,
          });
        }
      })
      .catch(() => {
        // Fallback to hardcoded content
      });

    return () => { mounted = false; };
  }, [lessonId, visible]);

  const content = enrichedContent ?? baseContent;

  const totalPuzzles = content?.puzzles?.length ?? 0;

  const advancePhase = () => {
    // If in puzzle phase and more puzzles remain, advance puzzle index
    if (phase === "puzzle" && puzzleIndex < totalPuzzles - 1) {
      setPuzzleIndex((prev) => prev + 1);
      return;
    }

    const idx = PHASE_ORDER.indexOf(phase);
    if (idx < PHASE_ORDER.length - 1) {
      const nextPhase = PHASE_ORDER[idx + 1];
      // Complete lesson when entering celebration phase
      if (nextPhase === "celebration" && lessonId && content) {
        completeLesson(lessonId, content.verseKey);
      }
      setPhase(nextPhase);
    } else {
      // After celebration — close
      handleClose();
    }
  };

  const handleClose = () => {
    setPhase("immersion");
    setPuzzleIndex(0);
    setEnrichedContent(null);
    onClose();
  };

  if (!content) return null;

  const alreadyCompleted = lessonId ? isLessonCompleted(lessonId) : false;
  const currentPuzzle = content.puzzles?.[puzzleIndex];

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="fullScreen">
      <View className="flex-1" style={{ backgroundColor: palette.background, paddingTop: insets.top }}>
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
          <Animated.View
            key={`${phase}-${puzzleIndex}`}
            entering={FadeIn.duration(300)}
            exiting={FadeOut.duration(200)}
            className="flex-1"
          >
            {phase === "immersion" && (
              <ImmersionPhase content={content} onContinue={advancePhase} />
            )}
            {phase === "puzzle" && currentPuzzle && (
              <PuzzlePhase
                puzzleItem={currentPuzzle}
                quizNumber={puzzleIndex + 1}
                totalQuizzes={totalPuzzles}
                onCorrect={advancePhase}
              />
            )}
            {phase === "reveal" && (
              <RevealPhase content={content} onContinue={advancePhase} />
            )}
            {phase === "audio" && (
              <AudioPhase content={content} onFinish={advancePhase} />
            )}
            {phase === "celebration" && (
              <CelebrationOverlay
                xpGained={alreadyCompleted ? 0 : 25}
                totalXP={progress.currentXP}
                onContinue={advancePhase}
              />
            )}
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
}
