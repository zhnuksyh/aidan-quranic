import "./global.css";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg text-red-500">Hello NativeWind</Text>
      <StatusBar style="auto" />
    </View>
  );
}
