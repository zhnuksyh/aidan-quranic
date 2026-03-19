import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AVATAR_COLOR } from "../../constants/worlds";
import { useTheme } from "../../contexts/ThemeContext";
import { getLevelForXP, getXPProgress } from "../../constants/levels";

interface Props {
  xp: number;
}

export function AvatarDisplay({ xp }: Props) {
  const { palette } = useTheme();
  const level = getLevelForXP(xp);
  const progress = getXPProgress(xp);

  return (
    <View className="items-center mb-6">
      {/* Avatar with Level Badge */}
      <View className="mb-3">
        <View
          className="w-24 h-24 rounded-full items-center justify-center"
          style={{ backgroundColor: AVATAR_COLOR }}
        >
          <Text className="font-fredoka-bold text-white text-4xl">A</Text>
        </View>
        {/* Level Badge */}
        <View
          className="absolute bottom-0 right-0 w-8 h-8 rounded-full items-center justify-center border-2 border-white"
          style={{ backgroundColor: palette.accent }}
        >
          <Text className="font-fredoka-bold text-white text-xs">{level.level}</Text>
        </View>
      </View>

      {/* Level Title */}
      <View className="flex-row items-center gap-1 mb-1">
        <Ionicons name={level.icon as any} size={16} color={palette.accent} />
        <Text
          className="font-fredoka-bold text-lg"
          style={{ color: palette.textOnBackground }}
        >
          {level.title}
        </Text>
      </View>

      {/* XP Progress Bar */}
      <View className="w-40 mt-1">
        <View
          className="h-2 rounded-full overflow-hidden"
          style={{ backgroundColor: palette.accentLight }}
        >
          <View
            className="h-full rounded-full"
            style={{
              backgroundColor: palette.accent,
              width: `${Math.min(progress.fraction * 100, 100)}%`,
            }}
          />
        </View>
        <Text
          className="font-fredoka text-[10px] text-center mt-0.5 opacity-50"
          style={{ color: palette.textOnBackground }}
        >
          {xp} XP
        </Text>
      </View>
    </View>
  );
}
