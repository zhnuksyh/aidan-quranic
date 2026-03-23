import { View, Text, Pressable } from "react-native";
import { AlertCircle, RefreshCw, X } from "lucide-react-native";
import { useTheme } from "../../contexts/ThemeContext";

interface Props {
  message: string | null;
  onRetry: () => void;
  onClose: () => void;
}

export function ContentErrorState({ message, onRetry, onClose }: Props) {
  const { palette } = useTheme();

  return (
    <View className="flex-1 items-center justify-center px-8">
      <AlertCircle size={48} color={palette.accent} strokeWidth={1.5} />

      <Text
        className="font-fredoka-bold text-lg text-center mt-4 mb-2"
        style={{ color: palette.textOnBackground }}
      >
        Unable to Load Content
      </Text>

      <Text
        className="font-fredoka text-sm text-center leading-6 mb-8"
        style={{ color: palette.textOnBackground, opacity: 0.6 }}
      >
        {message || "Could not load lesson content. Please check your connection."}
      </Text>

      <Pressable
        className="rounded-2xl py-4 px-8 mb-3 flex-row items-center gap-2"
        style={{ backgroundColor: palette.accent }}
        onPress={onRetry}
      >
        <RefreshCw size={18} color={palette.textOnAccent} />
        <Text
          className="font-fredoka-bold text-base"
          style={{ color: palette.textOnAccent }}
        >
          Try Again
        </Text>
      </Pressable>

      <Pressable
        className="rounded-2xl py-3 px-8 flex-row items-center gap-2"
        style={{ backgroundColor: palette.accentLight }}
        onPress={onClose}
      >
        <X size={16} color={palette.textOnBackground} />
        <Text
          className="font-fredoka-medium text-sm"
          style={{ color: palette.textOnBackground }}
        >
          Close
        </Text>
      </Pressable>
    </View>
  );
}
