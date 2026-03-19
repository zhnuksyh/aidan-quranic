import { View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

export function NodePath() {
  const { palette } = useTheme();

  return (
    <View className="items-center my-1">
      {[0, 1, 2].map((i) => (
        <View
          key={i}
          className="w-1 h-2 rounded-full my-0.5"
          style={{ backgroundColor: palette.accentLight }}
        />
      ))}
    </View>
  );
}
