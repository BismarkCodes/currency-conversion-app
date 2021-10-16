import React from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";
import * as MyDimensions from "../../constants/Dimensions";

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />

      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/background.png")}
          resizeMode="contain"
          style={styles.logoBackground}
        />
        <Image
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
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
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoBackground: {
    width: MyDimensions.ScreenWidth * 0.45,
    height: MyDimensions.ScreenHeight * 0.45,
  },
  logo: {
    position: "absolute",
    width: MyDimensions.ScreenWidth * 0.25,
    height: MyDimensions.ScreenHeight * 0.25,
  },
});
