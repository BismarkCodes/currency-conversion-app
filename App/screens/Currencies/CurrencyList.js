import React from "react";
import { FlatList, StatusBar, View, StyleSheet } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import colors from "../../constants/colors";
import currencies from "../../data/currencies.json";
import { RowItems, RowSeperator } from "../../components/RowItems.js";
import { Entypo } from "@expo/vector-icons";

export default ({ navigation, route = {} }) => {
  const insets = useSafeAreaInsets();
  const params = route.params || {};
  console.log(route.params.title);
  return (
    <SafeAreaView style={{ backgroundColor: colors.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          const selected = params.activeCurrency === item;
          return (
            <RowItems
              text={item}
              onPress={() => {
                if (params.onChange) {
                  params.onChange(item);
                }
                navigation.pop();
              }}
              rightIcon={
                selected && (
                  <View style={styles.icon}>
                    <Entypo name="check" size={20} color={colors.white} />
                  </View>
                )
              }
            />
          );
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeperator />}
        ListFooterComponent={() => (
          <View style={{ marginBottom: insets.bottom }} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    backgroundColor: colors.blue,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
