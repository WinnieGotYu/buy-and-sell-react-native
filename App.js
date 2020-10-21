import React from "react";
import { View, StyleSheet, Text } from "react-native";

import AppText from "./app/components/AppText/AppText"


export default function App() {
  return (
    <View style={styles.app}>
    <AppText>I Love React Native!</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
