import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./config/Navigation";
import { ScreenHeight } from "./constants/Dimensions";
import { api } from "./util/api";

api("/latest?base=USD")
  .then((response) => {
    // console.log(response);
  })
  .catch((e) => {
    console.log(e);
  });

export default () => <Navigation />;
