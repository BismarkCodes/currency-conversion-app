import { Entypo } from "@expo/vector-icons";
import { format } from "date-fns";
import React, { useEffect, useState, useContext } from "react";
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
  ActivityIndicator,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components/Button";
import { ConversionInput } from "../../components/ConversionInput";
import colors from "../../constants/colors";
import * as MyDimensions from "../../constants/Dimensions";
import { ConversionContext } from "../../util/ConversionContext";

const Home = ({ navigation }) => {
  const [value, setValue] = useState("100");
  const {
    BaseCurrency,
    QuoteCurrency,
    isLoading,
    swapCurrencies,
    date,
    rates,
  } = useContext(ConversionContext);

  const conversionVal = rates[QuoteCurrency];

  // states to control scrolling
  const [scrollable, setScrollable] = useState(false);
  const [data, setdata] = useState();

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

  // return null;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView style={styles.container}>
        <View style={{ flex: 1 }}>
          {console.log(data)}
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
            {/* checking if api is loading data */}
            {isLoading ? (
              <ActivityIndicator
                style={{ marginTop: 20 }}
                color={colors.white}
                size={24}
              />
            ) : (
              <>
                <ConversionInput
                  value={value}
                  text={BaseCurrency}
                  onChangeText={(value) => setValue(value)}
                  onPress={() =>
                    navigation.push("Currency List", {
                      title: "Base Currency",
                      isBaseCurrency: true,
                    })
                  }
                />
                <ConversionInput
                  text={QuoteCurrency}
                  onPress={() =>
                    navigation.push("Currency List", {
                      title: "Quote Currency",
                      isBaseCurrency: false,
                    })
                  }
                  value={
                    value && `${(parseFloat(value) * conversionVal).toFixed(2)}`
                  }
                  editable={false}
                />
                <Text style={styles.conversionInfoText}>
                  {`1 ${BaseCurrency} = ${conversionVal} ${QuoteCurrency} as of ${
                    date && format(new Date(date), "MMMM do, yyyy")
                  }`}
                </Text>
                {/* Reverse currency button component */}
                <Button
                  text="Reverse currency"
                  onPress={() => swapCurrencies()}
                />
              </>
            )}
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
