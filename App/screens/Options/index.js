import React from "react";
import { Alert, Linking, ScrollView } from "react-native";
import colors from "../../constants/colors";
import { Entypo } from "@expo/vector-icons";
import { RowItems, RowSeperator } from "../../components/RowItems";
import { SafeAreaView } from "react-native-safe-area-context";

// linking items to browser
const openUrl = (url) => {
  Linking.openUrl(url).catch(() => {
    Alert.alert("Sorry, something went wrong.", "Please try again later");
  });
};
export default () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <RowItems
          text="Themes"
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
          onPress={() => alert("Themes")}
        />
        <RowSeperator />

        <RowItems
          text="React native basics"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          onPress={() =>
            openUrl(
              "https://learn.reactnativeschool.com/courses/175915/lectures/17152196"
            )
          }
        />

        <RowSeperator />

        <RowItems
          text="React native by example"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          onPress={() => openUrl("https://google.com")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
