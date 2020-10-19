import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors"

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.signUpButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end", // Default is "flex-start"
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logoContainer:{
    position: "absolute",
    top: 90,
    alignItems: "center"
  },
  signUpButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;
