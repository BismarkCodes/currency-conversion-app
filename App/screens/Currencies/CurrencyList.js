import React, { useContext } from "react";
import { FlatList, StatusBar, View, StyleSheet } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import colors from "../../constants/colors";
import currencies from "../../data/currencies.json";
import { RowItems, RowSeperator } from "../../components/RowItems.js";
import { Entypo } from "@expo/vector-icons";
import { ConversionContext } from "../../util/ConversionContext";

export default ({ navigation, route = {} }) => {
  const insets = useSafeAreaInsets();
  const params = route.params || {};

  const { setBaseCurrency, setQuoteCurrency, BaseCurrency, QuoteCurrency } =
    useContext(ConversionContext);
  return (
    <SafeAreaView style={{ backgroundColor: colors.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          let selected = false;
          if (params.isBaseCurrency && item === BaseCurrency) {
            selected = true;
          } else if (!params.isBaseCurrency && item === QuoteCurrency) {
            selected = true;
          }
          return (
            <RowItems
              text={item}
              onPress={() => {
                if (params.isBaseCurrency) {
                  setBaseCurrency(item);
                } else {
                  setQuoteCurrency(item);
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
