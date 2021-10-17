import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
// importing required navigation modules
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// importing screens
import Home from "../screens/Home/index";
import Options from "../screens/Options/index";
import CurrencyList from "../screens/Currencies/CurrencyList";

// creating instance of stack navigator
const MainStack = createNativeStackNavigator();

// creating navigation container/component
const MainStackScreen = () => (
  <SafeAreaProvider>
    <MainStack.Navigator initialRouteName="Currency List">
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <MainStack.Screen name="Options" component={Options} />
      <MainStack.Screen name="Currency List" component={CurrencyList} />
    </MainStack.Navigator>
  </SafeAreaProvider>
);

// exporting navigation
export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
