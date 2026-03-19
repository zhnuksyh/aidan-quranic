import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function NotFoundScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="font-fredoka text-lg">Page not found</Text>
      <Link href="/" className="mt-4">
        <Text className="font-fredoka text-blue-500">Go home</Text>
      </Link>
    </View>
  );
}
