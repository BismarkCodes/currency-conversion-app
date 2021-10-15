import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Options from "./screens/Options/index";

export default () => {
  return (
    <SafeAreaView>
      <Options />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
