import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "../../contexts/ThemeContext";

interface Props {
  direction: "left-to-right" | "right-to-left";
}

const WIDTH = 200;
const HEIGHT = 48;

export function NodePath({ direction }: Props) {
  const { palette } = useTheme();

  // S-curve from top to bottom, curving left or right
  const d =
    direction === "left-to-right"
      ? `M ${WIDTH * 0.3} 0 C ${WIDTH * 0.3} ${HEIGHT * 0.5}, ${WIDTH * 0.7} ${HEIGHT * 0.5}, ${WIDTH * 0.7} ${HEIGHT}`
      : `M ${WIDTH * 0.7} 0 C ${WIDTH * 0.7} ${HEIGHT * 0.5}, ${WIDTH * 0.3} ${HEIGHT * 0.5}, ${WIDTH * 0.3} ${HEIGHT}`;

  return (
    <View className="items-center my-0">
      <Svg width={WIDTH} height={HEIGHT}>
        <Path
          d={d}
          stroke={palette.accentLight}
          strokeWidth={3}
          strokeDasharray="8,6"
          fill="none"
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
}
