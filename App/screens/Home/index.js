import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";
import * as MyDimensions from "../../constants/Dimensions";

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: MyDimensions.ScreenHeight,
    width: MyDimensions.ScreenWidth,
    backgroundColor: colors.blue,
  },
});
