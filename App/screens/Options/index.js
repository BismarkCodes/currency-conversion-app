import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import colors from "../../constants/colors";

export default () => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={[styles.row, { marginTop: 50 }]}>
        <Text style={styles.txt}>Themes</Text>
      </TouchableOpacity>

      <View style={styles.seperator}></View>

      <TouchableOpacity style={styles.row}>
        <Text style={styles.txt}>React native basic</Text>
      </TouchableOpacity>

      <View style={styles.seperator}></View>

      <TouchableOpacity style={styles.row}>
        <Text style={styles.txt}>React native by example</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  txt: {
    fontSize: 16,
    color: colors.textColor,
  },
  seperator: {
    backgroundColor: colors.borderColor,
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 20,
  },
});
