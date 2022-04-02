import React from "react";
import { View, Text } from "react-native";
import SiteVisitReportForm from "../../../common/component/organisms/report/animatedReportList/siteVisite/SiteVisitReportForm";

export default function SiteVisitReportFormScreen({ navigation, route }) {
  return (
    <View
      style={{ flex: 1, backgroundColor: "#f2f2f2", paddingHorizontal: 10 }}
    >
      <SiteVisitReportForm route={route} navigation={navigation} />
    </View>
  );
}
