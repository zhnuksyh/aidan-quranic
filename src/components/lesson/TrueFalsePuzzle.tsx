import { View, Text, Pressable } from "react-native";
import * as Haptics from "expo-haptics";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeContext";
import { TrueFalsePuzzle as TrueFalsePuzzleType } from "../../types/lesson";

interface Props {
  puzzle: TrueFalsePuzzleType;
  onCorrect: () => void;
}

export function TrueFalsePuzzle({ puzzle, onCorrect }: Props) {
  const { palette } = useTheme();
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [isWrong, setIsWrong] = useState(false);

  const handleAnswer = async (value: boolean) => {
    setAnswer(value);

    if (value === puzzle.isTrue) {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setTimeout(onCorrect, 600);
    } else {
      setIsWrong(true);
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      setTimeout(() => {
        setAnswer(null);
        setIsWrong(false);
      }, 800);
    }
  };

  return (
    <View className="flex-1 justify-center">
      <Text
        className="font-fredoka-bold text-xl mb-8 text-center"
        style={{ color: palette.textOnBackground }}
      >
        True or False?
      </Text>

      {/* Statement Card */}
      <View
        className="rounded-2xl p-6 mx-2 mb-10"
        style={{
          backgroundColor: isWrong ? "#FEE2E2" : palette.accent,
        }}
      >
        <Text
          className="font-fredoka-medium text-base text-center leading-7"
          style={{ color: isWrong ? "#991B1B" : palette.textOnAccent }}
        >
          {puzzle.statement}
        </Text>
      </View>

      {/* True / False Buttons */}
      <View className="flex-row justify-center gap-6 mx-2">
        <Pressable
          className="flex-1 rounded-2xl py-5 items-center flex-row justify-center gap-2"
          style={{
            backgroundColor:
              answer === true
                ? puzzle.isTrue
                  ? "#22C55E"
                  : "#EF4444"
                : palette.accentLight,
          }}
          onPress={() => answer === null && handleAnswer(true)}
          disabled={answer !== null}
        >
          <Ionicons
            name="checkmark-circle"
            size={22}
            color={answer === true ? "#FFFFFF" : palette.textOnBackground}
          />
          <Text
            className="font-fredoka-bold text-base"
            style={{
              color: answer === true ? "#FFFFFF" : palette.textOnBackground,
            }}
          >
            True
          </Text>
        </Pressable>

        <Pressable
          className="flex-1 rounded-2xl py-5 items-center flex-row justify-center gap-2"
          style={{
            backgroundColor:
              answer === false
                ? !puzzle.isTrue
                  ? "#22C55E"
                  : "#EF4444"
                : palette.accentLight,
          }}
          onPress={() => answer === null && handleAnswer(false)}
          disabled={answer !== null}
        >
          <Ionicons
            name="close-circle"
            size={22}
            color={answer === false ? "#FFFFFF" : palette.textOnBackground}
          />
          <Text
            className="font-fredoka-bold text-base"
            style={{
              color: answer === false ? "#FFFFFF" : palette.textOnBackground,
            }}
          >
            False
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
