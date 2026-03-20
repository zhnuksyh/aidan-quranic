import "../global.css";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import {
  Fredoka_300Light,
  Fredoka_400Regular,
  Fredoka_500Medium,
  Fredoka_600SemiBold,
  Fredoka_700Bold,
} from "@expo-google-fonts/fredoka";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import { ThemeProvider } from "../src/contexts/ThemeContext";
import { ProgressProvider } from "../src/contexts/ProgressContext";
import { AuthProvider } from "../src/contexts/AuthContext";
import { WelcomeScreen } from "../src/components/onboarding/WelcomeScreen";
import { ErrorBoundary } from "../src/components/common/ErrorBoundary";
import { hasSeenOnboarding, markOnboardingSeen } from "../src/services/storage";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Fredoka_300Light,
    Fredoka_400Regular,
    Fredoka_500Medium,
    Fredoka_600SemiBold,
    Fredoka_700Bold,
  });
  const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null);

  useEffect(() => {
    if (!fontsLoaded) return;
    hasSeenOnboarding().then((seen) => {
      setShowOnboarding(!seen);
      SplashScreen.hideAsync();
    });
  }, [fontsLoaded]);

  if (!fontsLoaded || showOnboarding === null) return null;

  const handleOnboardingComplete = () => {
    markOnboardingSeen();
    setShowOnboarding(false);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <ThemeProvider>
          <ProgressProvider>
            <ErrorBoundary>
              {showOnboarding ? (
                <WelcomeScreen onComplete={handleOnboardingComplete} />
              ) : (
                <Stack screenOptions={{ headerShown: false }} />
              )}
            </ErrorBoundary>
          </ProgressProvider>
        </ThemeProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
