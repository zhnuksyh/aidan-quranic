import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AVATAR_COLOR } from "../../constants/worlds";

export function AvatarDisplay() {
  return (
    <View className="items-center mb-6">
      <View
        className="w-24 h-24 rounded-full items-center justify-center mb-3"
        style={{ backgroundColor: AVATAR_COLOR }}
      >
        <Ionicons name="person" size={40} color="#FFFFFF" />
      </View>
      <Text className="font-fredoka-bold text-xl" style={{ color: "#1F2937" }}>
        Explorer
      </Text>
    </View>
  );
}
