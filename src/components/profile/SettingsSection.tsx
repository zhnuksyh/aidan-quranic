import { useState, useEffect } from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeContext";
import { useProgress } from "../../contexts/ProgressContext";
import { resetAllData } from "../../services/storage";
import { isQFConnected, loginWithQF, logoutQF } from "../../services/qfAuth";

interface SettingsRowProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
  accent: string;
  textColor: string;
}

function SettingsRow({ icon, label, onPress, accent, textColor }: SettingsRowProps) {
  return (
    <Pressable
      className="flex-row items-center py-3.5"
      onPress={onPress}
    >
      <Ionicons name={icon} size={20} color={accent} />
      <Text
        className="font-fredoka-medium text-base flex-1 ml-3"
        style={{ color: textColor }}
      >
        {label}
      </Text>
      <Ionicons name="chevron-forward" size={18} color={textColor} style={{ opacity: 0.4 }} />
    </Pressable>
  );
}

export function SettingsSection() {
  const { palette } = useTheme();
  const { resetProgress } = useProgress();
  const [qfConnected, setQfConnected] = useState(false);

  useEffect(() => {
    isQFConnected().then(setQfConnected);
  }, []);

  const handleQFConnect = async () => {
    if (qfConnected) {
      Alert.alert(
        "Disconnect Quran.com",
        "Your local progress will be kept, but syncing will stop.",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Disconnect",
            style: "destructive",
            onPress: async () => {
              await logoutQF();
              setQfConnected(false);
            },
          },
        ]
      );
    } else {
      const success = await loginWithQF();
      if (success) setQfConnected(true);
    }
  };

  const handleResetProgress = () => {
    Alert.alert(
      "Reset Progress",
      "This will erase all your XP, streaks, and completed lessons. Are you sure?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Reset",
          style: "destructive",
          onPress: async () => {
            await resetAllData();
            resetProgress();
          },
        },
      ]
    );
  };

  const handleAbout = () => {
    Alert.alert(
      "About Aidan",
      "A gamified Quranic Tafsir companion.\n\nBuilt for the Quran Foundation Hackathon.\n\nVersion 1.0.0"
    );
  };

  return (
    <View
      className="rounded-2xl px-5 py-2 mt-6"
      style={{ backgroundColor: palette.accentLight }}
    >
      <Text
        className="font-fredoka-bold text-base mt-3 mb-1"
        style={{ color: palette.textOnBackground }}
      >
        Settings
      </Text>
      <SettingsRow
        icon={qfConnected ? "checkmark-circle" : "globe-outline"}
        label={qfConnected ? "Quran.com Connected" : "Connect to Quran.com"}
        onPress={handleQFConnect}
        accent={palette.accent}
        textColor={palette.textOnBackground}
      />
      <SettingsRow
        icon="refresh"
        label="Reset Progress"
        onPress={handleResetProgress}
        accent={palette.accent}
        textColor={palette.textOnBackground}
      />
      <SettingsRow
        icon="information-circle-outline"
        label="About"
        onPress={handleAbout}
        accent={palette.accent}
        textColor={palette.textOnBackground}
      />
    </View>
  );
}
