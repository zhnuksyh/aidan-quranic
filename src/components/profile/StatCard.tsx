import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeContext";

interface Props {
  icon: keyof typeof Ionicons.glyphMap;
  value: number;
  label: string;
}

export function StatCard({ icon, value, label }: Props) {
  const { palette } = useTheme();

  return (
    <View
      className="flex-1 rounded-2xl p-4 items-center mx-1.5"
      style={{ backgroundColor: palette.accentLight }}
    >
      <Ionicons name={icon} size={24} color={palette.accent} />
      <Text
        className="font-fredoka-bold text-2xl mt-2"
        style={{ color: palette.textOnBackground }}
      >
        {value}
      </Text>
      <Text
        className="font-fredoka text-xs opacity-60"
        style={{ color: palette.textOnBackground }}
      >
        {label}
      </Text>
    </View>
  );
}
