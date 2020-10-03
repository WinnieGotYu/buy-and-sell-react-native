import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Image, SafeAreaView, Button } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={3}>Hello WORLD WORLD WORLD </Text>
      <Image style={styles.meme} source={require("./assets/meme.png")} />
      <Image
        source={{
          width: 200,
          height: 200,
          uri: "https://picsum.photos/id/237/200/300"
        }}
      />
      <Button title="Click Me" onPress={() => console.log("Button Clicked")}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  meme: {
    height: 400,
    width: "100%",
    // justifyContent: 'center',
    // alignItems: 'center'
  },
});
