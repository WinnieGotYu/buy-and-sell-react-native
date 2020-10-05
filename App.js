import React from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    // <WelcomeScreen />
    <ViewImageScreen />
  );
}