import React from "react";
import { View, Text, ScrollView } from "react-native";
import IncidentReportForm from "../../../common/component/organisms/report/animatedReportList/incidentReport/IncidentReportForm";

export default function IncidentReportFormScreen({ navigation, route }) {
  const scrollEnable = true;
  return (
    <View
      style={{ flex: 1, backgroundColor: "#f2f2f2", paddingHorizontal: 10 }}
    >
      <IncidentReportForm route={route} navigation={navigation} />
    </View>
  );
}
