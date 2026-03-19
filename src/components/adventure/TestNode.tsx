import { View, Text } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

export function TestNode({ index }: { index: number }) {
  const { palette } = useTheme();

  return (
    <View
      className="mx-6 my-3 rounded-2xl p-6 items-center"
      style={{ backgroundColor: palette.accent }}
    >
      <Text
        className="font-fredoka-semibold text-sm opacity-70"
        style={{ color: palette.textOnAccent }}
      >
        Lesson {index + 1}
      </Text>
      <Text
        className="font-fredoka-bold text-xl mt-1"
        style={{ color: palette.textOnAccent }}
      >
        {palette.name}
      </Text>
      <Text
        className="text-4xl mt-3"
        style={{ color: palette.textOnAccent }}
      >
        بِسْمِ
      </Text>
      <View className="flex-row mt-4 gap-3">
        <View
          className="w-8 h-8 rounded-full"
          style={{ backgroundColor: palette.background }}
        />
        <View
          className="w-8 h-8 rounded-full"
          style={{ backgroundColor: palette.accentLight }}
        />
        <View
          className="w-8 h-8 rounded-full border-2 border-white"
          style={{ backgroundColor: palette.accent }}
        />
      </View>
    </View>
  );
}
