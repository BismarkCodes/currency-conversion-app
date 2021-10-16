import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../constants/colors";

export const ConversionInput = ({ text, onPress, ...props }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...props} keyboardType="numeric" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 6,
    marginVertical: 10,
    marginHorizontal: 30,
  },
  button: {
    borderRightWidth: 1,
    borderRightColor: colors.borderColor,
    padding: 10,
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
  },
  input: {
    flex: 1, //takes up the remaining space
    color: colors.textLight,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
