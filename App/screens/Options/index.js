import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import colors from "../../constants/colors";
import { Entypo } from "@expo/vector-icons";
import RowItems from "../../components/RowItems";

export default () => {
  return (
    <SafeAreaView>
      <RowItems
        text="Themes"
        rightIcon={
          <Entypo name="chevron-right" size={20} color={colors.blue} />
        }
        onPress={() => alert("Themes")}
      />

      <View style={styles.seperator}></View>

      <RowItems
        text="React native basics"
        rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        onPress={() => alert("React native basics")}
      />

      <View style={styles.seperator}></View>

      <RowItems
        text="React native by example"
        rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        onPress={() => alert("Examples")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  seperator: {
    backgroundColor: colors.borderColor,
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 20,
  },
});
