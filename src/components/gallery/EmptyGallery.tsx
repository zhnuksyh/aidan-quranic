import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeContext";

export function EmptyGallery() {
  const { palette } = useTheme();

  return (
    <View className="flex-1 items-center justify-center px-8">
      <Ionicons name="book-outline" size={64} color={palette.accent} />
      <Text
        className="font-fredoka-bold text-xl mt-4 mb-2 text-center"
        style={{ color: palette.textOnBackground }}
      >
        No verses yet!
      </Text>
      <Text
        className="font-fredoka text-sm text-center opacity-60"
        style={{ color: palette.textOnBackground }}
      >
        Complete lessons to unlock Quranic verses and build your collection.
      </Text>
    </View>
  );
}
