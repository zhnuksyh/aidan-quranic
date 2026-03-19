import { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../src/contexts/ThemeContext";
import { TestNode } from "../../src/components/adventure/TestNode";
import { WorldSelectionMenu } from "../../src/components/adventure/WorldSelectionMenu";

export default function AdventureScreen() {
  const { palette, avatarColor } = useTheme();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: palette.background }}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 py-3">
        <View className="flex-row items-center gap-3">
          <View
            className="w-10 h-10 rounded-full items-center justify-center"
            style={{ backgroundColor: avatarColor }}
          >
            <Text className="font-fredoka-bold text-white text-lg">A</Text>
          </View>
          <Text
            className="font-fredoka-bold text-lg"
            style={{ color: palette.textOnBackground }}
          >
            {palette.name}
          </Text>
        </View>
        <Pressable
          className="rounded-2xl px-4 py-2"
          style={{ backgroundColor: palette.accent }}
          onPress={() => setMenuVisible(true)}
        >
          <Text
            className="font-fredoka-semibold"
            style={{ color: palette.textOnAccent }}
          >
            Worlds
          </Text>
        </Pressable>
      </View>

      {/* Node Map */}
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 24 }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <TestNode key={i} index={i} />
        ))}
      </ScrollView>

      {/* World Selection Menu */}
      <WorldSelectionMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
      />
    </SafeAreaView>
  );
}
