import { useEffect, useRef, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInUp } from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import { useTheme } from "../../contexts/ThemeContext";
import { LessonContent } from "../../types/lesson";

interface Props {
  content: LessonContent;
  onFinish: () => void;
}

export function AudioPhase({ content, onFinish }: Props) {
  const { palette } = useTheme();
  const soundRef = useRef<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  // Build audio URL from QF CDN using verse key
  const audioUrl =
    content.audioUrl ??
    `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${content.verseKey.replace(":", "/")}`;

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      soundRef.current?.unloadAsync();
    };
  }, []);

  const handlePlayPause = async () => {
    try {
      if (isPlaying && soundRef.current) {
        await soundRef.current.pauseAsync();
        setIsPlaying(false);
        return;
      }

      if (soundRef.current) {
        await soundRef.current.playAsync();
        setIsPlaying(true);
        return;
      }

      // First time — load and play
      await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
      const { sound } = await Audio.Sound.createAsync(
        { uri: audioUrl },
        { shouldPlay: true },
        (status) => {
          if (status.isLoaded && status.didJustFinish) {
            setIsPlaying(false);
            setHasPlayed(true);
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          }
        }
      );
      soundRef.current = sound;
      setIsPlaying(true);
    } catch {
      // Audio failed — let user skip
      setHasPlayed(true);
    }
  };

  return (
    <View className="flex-1 justify-center">
      {/* Verse Reference */}
      <Animated.View entering={FadeInUp.duration(600)} className="items-center mb-6">
        <Text
          className="font-fredoka-medium text-sm opacity-60"
          style={{ color: palette.textOnBackground }}
        >
          Surah {content.surahName}, Ayah {content.ayahNumber}
        </Text>
      </Animated.View>

      {/* Arabic Text */}
      <Animated.View entering={FadeInUp.duration(600).delay(200)} className="items-center mb-10">
        <Text
          className="text-3xl text-center leading-[56px]"
          style={{ color: palette.textOnBackground, writingDirection: "rtl" }}
        >
          {content.arabicText}
        </Text>
      </Animated.View>

      {/* Play Button */}
      <Animated.View entering={FadeInUp.duration(400).delay(400)} className="items-center mb-10">
        <Pressable
          className="w-20 h-20 rounded-full items-center justify-center"
          style={{ backgroundColor: palette.accent }}
          onPress={handlePlayPause}
        >
          <Ionicons
            name={isPlaying ? "pause" : "play"}
            size={36}
            color={palette.textOnAccent}
          />
        </Pressable>
        <Text
          className="font-fredoka text-sm mt-3 opacity-60"
          style={{ color: palette.textOnBackground }}
        >
          {isPlaying ? "Playing..." : hasPlayed ? "Tap to replay" : "Tap to listen"}
        </Text>
      </Animated.View>

      {/* Finish Button */}
      <Animated.View entering={FadeInUp.duration(400).delay(600)}>
        <Pressable
          className="rounded-2xl py-4 mx-2 items-center"
          style={{ backgroundColor: palette.accent }}
          onPress={onFinish}
        >
          <Text
            className="font-fredoka-bold text-base"
            style={{ color: palette.textOnAccent }}
          >
            Finish Lesson
          </Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}
