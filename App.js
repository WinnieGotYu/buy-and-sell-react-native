import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={3}>Hello WORLD WORLD WORLD </Text>
      <Image style={styles.meme} source={require("./assets/meme.png")} />
      <Image
        source={{
          width: 200,
          height: 200,
          uri: "https://picsum.photos/id/237/200/300",
        }}
      />
      <Button
        title="Click Me"
        onPress={() =>
          Alert.alert("Select A Pet", "I prefer this pet:", [
            {
              text: "Dog",
              onPress: () => console.log("You selected Dog"),
            },
            { text: "Cat", onPress: () => console.log("You selected Cat") },
          ])
        }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  meme: {
    height: 400,
    width: "100%",
  },
});
