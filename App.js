import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppButton from "./app/components/AppButton";

import AppText from "./app/components/AppText";

export default function App() {
  return (
    <View style={styles.app}>
      <AppButton
        title="Login"
        onPress={() => {
          console.log("Tapped Button");
        }}
      />
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
