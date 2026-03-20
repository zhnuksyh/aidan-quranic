import { View, Text, Pressable, Modal } from "react-native";
import { BookOpen, MoonStar, Heart } from "lucide-react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { WORLD_PALETTES } from "../../constants/worlds";

const LUCIDE_ICONS: Record<string, any> = {
  BookOpen,
  MoonStar,
  Heart,
};

interface Props {
  visible: boolean;
  onClose: () => void;
}

export function WorldSelectionMenu({ visible, onClose }: Props) {
  const { palette, currentWorldId, setCurrentWorldId } = useTheme();

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View className="flex-1 justify-end">
        <Pressable className="flex-1" onPress={onClose} />
        <View
          className="rounded-t-2xl px-6 pt-6 pb-12"
          style={{ backgroundColor: palette.background }}
        >
          <Text
            className="font-fredoka-bold text-xl mb-4 text-center"
            style={{ color: palette.textOnBackground }}
          >
            Choose a Surah
          </Text>
          {Object.values(WORLD_PALETTES).map((world) => {
            const isActive = world.id === currentWorldId;
            const IconComponent = LUCIDE_ICONS[world.icon] || BookOpen;

            return (
              <Pressable
                key={world.id}
                className="rounded-2xl p-4 mb-3 flex-row items-center"
                style={{
                  backgroundColor: isActive ? world.accent : world.accentLight,
                }}
                onPress={() => {
                  setCurrentWorldId(world.id);
                  onClose();
                }}
              >
                <View
                  className="w-10 h-10 rounded-full mr-3 items-center justify-center"
                  style={{ backgroundColor: world.background }}
                >
                  <IconComponent size={20} color={world.accent} strokeWidth={2.5} />
                </View>
                <View>
                  <Text
                    className="font-fredoka-semibold text-lg"
                    style={{
                      color: isActive ? world.textOnAccent : world.textOnBackground,
                    }}
                  >
                    {world.name}
                  </Text>
                  <Text
                    className="font-fredoka text-xs opacity-80"
                    style={{
                      color: isActive ? world.textOnAccent : world.textOnBackground,
                    }}
                  >
                    {world.subtitle}{isActive ? " · Current" : ""}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      </View>
    </Modal>
  );
}
