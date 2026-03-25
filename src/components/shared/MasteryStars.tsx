import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  stars: number;
  maxStars?: number;
  size?: number;
  activeColor: string;
  inactiveColor: string;
}

export function MasteryStars({ stars, maxStars = 3, size = 10, activeColor, inactiveColor }: Props) {
  return (
    <View className="flex-row gap-0.5">
      {Array.from({ length: maxStars }, (_, i) => (
        <Ionicons
          key={i}
          name={i < stars ? "star" : "star-outline"}
          size={size}
          color={i < stars ? activeColor : inactiveColor}
          style={{ opacity: i < stars ? 1 : 0.3 }}
        />
      ))}
    </View>
  );
}
