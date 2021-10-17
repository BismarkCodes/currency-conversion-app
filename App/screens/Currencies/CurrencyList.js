import React from "react";
import { StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../../constants/colors";

export default () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ backgroundColor: colors.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
    </View>
  );
};
