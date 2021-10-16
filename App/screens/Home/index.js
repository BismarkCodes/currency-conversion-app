import { format } from "date-fns";
import React from "react";
import { Alert, Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/Button";
import { ConversionInput } from "../../components/ConversionInput";
import colors from "../../constants/colors";
import * as MyDimensions from "../../constants/Dimensions";

const Home = () => {
  const USD = "USD";
  const GBP = "GBP";
  const conversionVal = 0.845;
  const date = new Date();

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
      {/* Title */}
      <Text style={styles.pageTitle}>Currency Converter</Text>
      {/* Conversion inputs */}
      <ConversionInput
        text={USD}
        onPress={() => Alert.alert("todo", "USD VALUE")}
        onChangeText={(value) => console.log(value)}
      />
      <ConversionInput
        text={GBP}
        onPress={() => Alert.alert("todo", "GBP VALUE")}
        onChangeText={(value) => console.log(value)}
        editable={false}
      />
      <Text style={styles.conversionInfoText}>
        {`1 ${USD} = ${conversionVal} ${GBP} as of ${format(
          date,
          "MMMM do, yyyy"
        )}`}
      </Text>
      {/* Reverse currency button component */}
      <Button text="Reverse currency" onPress={() => Alert.alert("Todo")} />
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
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
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
  pageTitle: {
    fontSize: 30,
    marginTop: -50,
    marginBottom: 10,
    color: colors.white,
    fontWeight: "bold",
  },
  conversionInfoText: {
    fontSize: 14,
    marginBottom: 10,
    color: colors.white,
  },
});
