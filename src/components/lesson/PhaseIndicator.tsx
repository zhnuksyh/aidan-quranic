import { View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { LessonPhase } from "../../types/lesson";

const PHASES: LessonPhase[] = ["immersion", "puzzle", "reveal", "audio"];

interface Props {
  currentPhase: LessonPhase;
}

export function PhaseIndicator({ currentPhase }: Props) {
  const { palette } = useTheme();
  const currentIndex = PHASES.indexOf(currentPhase);

  return (
    <View className="flex-row justify-center gap-2 py-3">
      {PHASES.map((phase, index) => (
        <View
          key={phase}
          className="h-2 rounded-full"
          style={{
            width: index === currentIndex ? 32 : 12,
            backgroundColor:
              index <= currentIndex ? palette.accent : palette.accentLight,
          }}
        />
      ))}
    </View>
  );
}
