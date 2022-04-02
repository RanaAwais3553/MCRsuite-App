import React from "react";
import { View, Text } from "react-native";
import DailyIncpectionReportForm from "../../../common/component/organisms/report/animatedReportList/dailyIncpection/DailyIncpectionReportForm";

export default function DailyInceptionFormScreen({ route, navigation }) {
  return (
    <View
      style={{ flex: 1, backgroundColor: "#f2f2f2", paddingHorizontal: 10 }}
    >
      <DailyIncpectionReportForm route={route} navigation={navigation} />
    </View>
  );
}
