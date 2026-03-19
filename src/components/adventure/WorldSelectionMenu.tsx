import { View, Text, Pressable, Modal } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { WORLD_PALETTES } from "../../constants/worlds";

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
            Choose a World
          </Text>
          {Object.values(WORLD_PALETTES).map((world) => (
            <Pressable
              key={world.id}
              className="rounded-2xl p-4 mb-3 flex-row items-center"
              style={{
                backgroundColor:
                  world.id === currentWorldId ? world.accent : world.accentLight,
              }}
              onPress={() => {
                setCurrentWorldId(world.id);
                onClose();
              }}
            >
              <View
                className="w-10 h-10 rounded-full mr-3"
                style={{ backgroundColor: world.background }}
              />
              <View>
                <Text
                  className="font-fredoka-semibold text-lg"
                  style={{
                    color:
                      world.id === currentWorldId
                        ? world.textOnAccent
                        : world.textOnBackground,
                  }}
                >
                  {world.name}
                </Text>
                {world.id === currentWorldId && (
                  <Text
                    className="font-fredoka text-xs opacity-80"
                    style={{ color: world.textOnAccent }}
                  >
                    Current
                  </Text>
                )}
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </Modal>
  );
}
