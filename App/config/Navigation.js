import React from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// importing required navigation modules
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// importing screens
import Home from "../screens/Home/index";
import Options from "../screens/Options/index";
import CurrencyList from "../screens/Currencies/CurrencyList";

// importing constants
import colors from "../constants/colors";
import { Entypo } from "@expo/vector-icons";
import {
  horizontalAnimation,
  verticalAnimation,
} from "../constants/ScreenSliderAnimation";

// creating instance of stack navigator
const MainStack = createNativeStackNavigator();

// creating navigation container/component
const MainStackScreen = () => (
  <SafeAreaProvider>
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <MainStack.Screen name="Options" component={Options} />
    </MainStack.Navigator>
  </SafeAreaProvider>
);

// creating a modal screen to slide-in from bottom
const ModalStack = createNativeStackNavigator();
const ModalStackScreen = () => (
  <ModalStack.Navigator>
    <ModalStack.Screen
      name="Main"
      component={MainStackScreen}
      options={{ headerShown: false }}
    />
    <ModalStack.Screen
      name="Currency List"
      component={CurrencyList}
      options={({ route, navigation }) => ({
        title: route.params && route.params.title,
        presentation: "modal",
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{ paddingVertical: 10 }}
          >
            <Entypo name="cross" size={24} color={colors.blue} />
          </TouchableOpacity>
        ),
      })}
    />
  </ModalStack.Navigator>
);

// exporting navigation
export default () => (
  <NavigationContainer>
    <ModalStackScreen />
  </NavigationContainer>
);
