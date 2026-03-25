import { useState, useMemo } from "react";
import { View, Text, Pressable } from "react-native";
import * as Haptics from "expo-haptics";
import Animated, {
  FadeInUp,
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { Scale } from "lucide-react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { CauseEffectPuzzle as CauseEffectPuzzleType } from "../../types/lesson";

const PAIR_COLORS = ["#818CF8", "#F59E0B", "#34D399", "#F472B6"];

interface Props {
  puzzle: CauseEffectPuzzleType;
  onCorrect: () => void;
}

export function CauseEffectPuzzle({ puzzle, onCorrect }: Props) {
  const { palette } = useTheme();
  const [selectedCause, setSelectedCause] = useState<number | null>(null);
  const [matches, setMatches] = useState<Map<number, number>>(new Map());
  const [wrongPair, setWrongPair] = useState(false);
  const shakeX = useSharedValue(0);

  const shakeStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shakeX.value }],
  }));

  // Shuffle effects once on mount
  const shuffledEffectIndices = useMemo(() => {
    const indices = puzzle.pairs.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  }, [puzzle.pairs]);

  const allMatched = matches.size === puzzle.pairs.length;

  const handleCausePress = (causeIdx: number) => {
    if (allMatched || wrongPair) return;
    if (matches.has(causeIdx)) return;
    setSelectedCause(causeIdx === selectedCause ? null : causeIdx);
  };

  const handleEffectPress = (effectIdx: number) => {
    if (selectedCause === null || allMatched || wrongPair) return;
    for (const [, v] of matches) {
      if (v === effectIdx) return;
    }
    setMatches((prev) => new Map(prev).set(selectedCause, effectIdx));
    setSelectedCause(null);
  };

  const handleCheck = async () => {
    let allCorrect = true;
    for (const [causeIdx, effectIdx] of matches) {
      if (effectIdx !== causeIdx) {
        allCorrect = false;
        break;
      }
    }

    if (allCorrect) {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setTimeout(onCorrect, 600);
    } else {
      setWrongPair(true);
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      shakeX.value = withSequence(
        withTiming(-10, { duration: 50 }),
        withTiming(10, { duration: 50 }),
        withTiming(-10, { duration: 50 }),
        withTiming(10, { duration: 50 }),
        withTiming(0, { duration: 50 })
      );
      setTimeout(() => {
        setMatches(new Map());
        setSelectedCause(null);
        setWrongPair(false);
      }, 1000);
    }
  };

  const getMatchColor = (causeIdx: number): string | null => {
    if (!matches.has(causeIdx)) return null;
    const matchedKeys = [...matches.keys()];
    const order = matchedKeys.indexOf(causeIdx);
    return PAIR_COLORS[order % PAIR_COLORS.length];
  };

  const getEffectMatchColor = (effectIdx: number): string | null => {
    for (const [causeIdx, matchedEffectIdx] of matches) {
      if (matchedEffectIdx === effectIdx) {
        return getMatchColor(causeIdx);
      }
    }
    return null;
  };

  return (
    <View className="flex-1 justify-center">
      {/* Header */}
      <Animated.View
        entering={FadeInUp.duration(500)}
        className="rounded-2xl p-5 mx-2 mb-6"
        style={{ backgroundColor: palette.accent }}
      >
        <View className="flex-row items-center justify-center gap-2 mb-1">
          <Scale size={20} color={palette.textOnAccent} strokeWidth={2} />
          <Text
            className="font-fredoka-bold text-base"
            style={{ color: palette.textOnAccent }}
          >
            Match Cause & Effect
          </Text>
        </View>
        <Text
          className="font-fredoka text-xs text-center"
          style={{ color: palette.textOnAccent, opacity: 0.7 }}
        >
          Tap a cause, then tap its matching effect
        </Text>
      </Animated.View>

      <Animated.View style={shakeStyle} className="mx-2">
        {/* Causes & Effects side by side */}
        <View className="flex-row gap-2">
          {/* Causes Column */}
          <View className="flex-1 gap-2">
            <Text
              className="font-fredoka-semibold text-xs text-center mb-1"
              style={{ color: palette.accent }}
            >
              CAUSE
            </Text>
            {puzzle.pairs.map((pair, causeIdx) => {
              const matchColor = getMatchColor(causeIdx);
              const isSelected = selectedCause === causeIdx;

              return (
                <Animated.View
                  key={causeIdx}
                  entering={FadeInUp.duration(400).delay(200 + causeIdx * 100)}
                >
                  <Pressable
                    className="rounded-2xl px-3 py-3"
                    style={{
                      backgroundColor: matchColor || (isSelected ? palette.accent : palette.accentLight),
                      borderWidth: isSelected ? 2 : 0,
                      borderColor: palette.accent,
                    }}
                    onPress={() => handleCausePress(causeIdx)}
                  >
                    <Text
                      className="font-fredoka text-xs leading-5"
                      style={{
                        color: matchColor || isSelected
                          ? "#FFFFFF"
                          : palette.textOnBackground,
                      }}
                    >
                      {pair.cause}
                    </Text>
                  </Pressable>
                </Animated.View>
              );
            })}
          </View>

          {/* Effects Column */}
          <View className="flex-1 gap-2">
            <Text
              className="font-fredoka-semibold text-xs text-center mb-1"
              style={{ color: palette.accent }}
            >
              EFFECT
            </Text>
            {shuffledEffectIndices.map((effectIdx, displayIdx) => {
              const matchColor = getEffectMatchColor(effectIdx);

              return (
                <Animated.View
                  key={effectIdx}
                  entering={FadeInUp.duration(400).delay(300 + displayIdx * 100)}
                >
                  <Pressable
                    className="rounded-2xl px-3 py-3"
                    style={{
                      backgroundColor: matchColor || palette.accentLight,
                      borderWidth: selectedCause !== null && !matchColor ? 1 : 0,
                      borderColor: palette.accent,
                      borderStyle: "dashed",
                    }}
                    onPress={() => handleEffectPress(effectIdx)}
                  >
                    <Text
                      className="font-fredoka text-xs leading-5"
                      style={{
                        color: matchColor ? "#FFFFFF" : palette.textOnBackground,
                      }}
                    >
                      {puzzle.pairs[effectIdx].effect}
                    </Text>
                  </Pressable>
                </Animated.View>
              );
            })}
          </View>
        </View>
      </Animated.View>

      {/* Check Button — appears when all matched */}
      {allMatched && (
        <Animated.View entering={FadeInUp.duration(300)} className="px-2 pt-6">
          <Pressable
            className="rounded-2xl py-4 items-center"
            style={{ backgroundColor: palette.accent }}
            onPress={handleCheck}
          >
            <Text
              className="font-fredoka-bold text-base"
              style={{ color: palette.textOnAccent }}
            >
              Check Matches
            </Text>
          </Pressable>
        </Animated.View>
      )}
    </View>
  );
}
