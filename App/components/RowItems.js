import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

export default RowItems = ({ rightIcon, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.txt}>{text}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

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
});
