import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../src/contexts/ThemeContext";
import { SurahList } from "../../src/components/explore/SurahList";

export default function ExploreScreen() {
  const { palette } = useTheme();

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: palette.background }}>
      <SurahList />
    </SafeAreaView>
  );
}
