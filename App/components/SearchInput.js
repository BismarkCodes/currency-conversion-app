import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../constants/colors";

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="ios-search-sharp" size={24} color="grey" />
      <TextInput placeholder="Search" style={styles.input} />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    height: 45,
    // width: "85%",
    marginVertical: 20,
    marginBottom: 0,
    backgroundColor: "#DDEAF3",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 20,
  },
  input: {
    paddingLeft: 15,
    fontSize: 16,
  },
});
