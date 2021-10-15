import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

export const RowItems = ({ rightIcon, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.txt}>{text}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

export const RowSeperator = () => <View style={styles.seperator}></View>;

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
