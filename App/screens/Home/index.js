import { Entypo } from "@expo/vector-icons";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components/Button";
import { ConversionInput } from "../../components/ConversionInput";
import colors from "../../constants/colors";
import * as MyDimensions from "../../constants/Dimensions";

const Home = ({ navigation }) => {
  const [BaseCurrency, setBaseCurrency] = useState("USD");
  const [QuoteCurrency, setQuoteCurrency] = useState("GBP");
  const [value, setValue] = useState("100");
  const conversionVal = 0.845;
  const date = new Date();

  const swapCurrencies = () => {
    setBaseCurrency(QuoteCurrency);
    setQuoteCurrency(BaseCurrency);
  };

  // states to control scrolling
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    const showListener = Keyboard.addListener("keyboardDidShow", (event) => {
      event.endCoordinates.height; //helps get keyboard height
      setScrollable(true);
    });
    const hideListener = Keyboard.addListener("keyboardDidHide", () => {
      setScrollable(false);
    });

    // unsubscribe from useEffect
    // prevents mememory leeks
    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView style={styles.container}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
          <TouchableOpacity
            style={styles.optionsButton}
            onPress={() => navigation.push("Options")}
          >
            <Entypo name="cog" size={24} color={colors.white} />
          </TouchableOpacity>
          <ScrollView>
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
              value={value}
              text={BaseCurrency}
              onChangeText={(value) => setValue(value)}
              onPress={() =>
                navigation.push("Currency List", {
                  title: "Base Currency",
                  activeCurrency: BaseCurrency,
                  onChange: (currency) => setBaseCurrency(currency),
                })
              }
            />
            <ConversionInput
              text={QuoteCurrency}
              onPress={() =>
                navigation.push("Currency List", {
                  title: "Quote Currency",
                  activeCurrency: QuoteCurrency,
                  onChange: (currency) => setQuoteCurrency(currency),
                })
              }
              value={
                value && `${(parseFloat(value) * conversionVal).toFixed(2)}`
              }
              editable={false}
            />
            <Text style={styles.conversionInfoText}>
              {`1 ${BaseCurrency} = ${conversionVal} ${QuoteCurrency} as of ${format(
                date,
                "MMMM do, yyyy"
              )}`}
            </Text>
            {/* Reverse currency button component */}
            <Button text="Reverse currency" onPress={() => swapCurrencies()} />
          </ScrollView>
          <View style={{ marginBottom: 15 }} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
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
    textAlign: "center",
  },
  conversionInfoText: {
    fontSize: 14,
    marginBottom: 10,
    color: colors.white,
    textAlign: "center",
  },
  optionsButton: {
    alignSelf: "flex-end",
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
