import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  State
> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#E0E7FF",
            paddingHorizontal: 32,
          }}
        >
          <Ionicons name="alert-circle-outline" size={56} color="#6366F1" />
          <Text
            style={{
              fontFamily: "Fredoka_700Bold",
              fontSize: 20,
              color: "#1E1B4B",
              marginTop: 16,
              textAlign: "center",
            }}
          >
            Something went wrong
          </Text>
          <Text
            style={{
              fontFamily: "Fredoka_400Regular",
              fontSize: 14,
              color: "#1E1B4B",
              opacity: 0.6,
              marginTop: 8,
              textAlign: "center",
            }}
          >
            Don't worry, your progress is saved.
          </Text>
          <Pressable
            onPress={this.handleRetry}
            style={{
              backgroundColor: "#6366F1",
              borderRadius: 16,
              paddingVertical: 14,
              paddingHorizontal: 32,
              marginTop: 24,
            }}
          >
            <Text
              style={{
                fontFamily: "Fredoka_700Bold",
                fontSize: 16,
                color: "#FFFFFF",
              }}
            >
              Try Again
            </Text>
          </Pressable>
        </View>
      );
    }

    return this.props.children;
  }
}
