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
  // storing styles into array for easy overriding of styles
  const containerStyles = [styles.container];
  // disabled input control
  if (props.editable === false) {
    containerStyles.push(styles.containerDisabled);
  }
  return (
    <View style={containerStyles}>
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
  containerDisabled: {
    backgroundColor: colors.whiteOffset,
  },
  button: {
    borderRightWidth: 1,
    borderRightColor: colors.borderColor,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    backgroundColor: colors.white,
    padding: 10,
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: colors.blue,
  },
  input: {
    flex: 1, //takes up the remaining space
    color: colors.textLight,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
