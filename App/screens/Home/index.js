import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import colors from "../../constants/colors";
import { ScreenHeight, ScreenWidth } from "../../constants/Dimensions";

export default Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: ScreenHeight,
    backgroundColor: colors.blue,
  },
});
