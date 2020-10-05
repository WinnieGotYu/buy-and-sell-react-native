import React from "react";
import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.app}>
      <View style={styles.container}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex:1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  container: {
    backgroundColor: 'dodgerblue', 
    width: 100, 
    height: 100,

  }
})