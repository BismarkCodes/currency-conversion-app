import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { ScreenHeight } from "./constants/Dimensions";
import Home from "./screens/Home";
// import Option from "./screens/Options";

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: ScreenHeight - StatusBar.currentHeight,
  },
});
