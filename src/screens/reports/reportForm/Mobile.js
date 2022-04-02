import React from "react";
import { View, Text } from "react-native";
import MobileReportForm from "../../../common/component/organisms/report/animatedReportList/mobileReport/MobileReportForm";

export default function MobileReportFormScreen({ navigation, route }) {
  return (
    <View
      style={{ flex: 1, backgroundColor: "#f2f2f2", paddingHorizontal: 10 }}
    >
      <MobileReportForm route={route} navigation={navigation} />
    </View>
  );
}
