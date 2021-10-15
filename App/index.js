import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Options from "./screens/Options/index";

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Options />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
