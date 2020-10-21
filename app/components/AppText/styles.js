import { StyleSheet, Platform } from 'react-native';


const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "red",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
  }
})

export default styles;