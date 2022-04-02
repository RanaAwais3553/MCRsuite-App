import React from "react";
import { View, Text } from "react-native";
import DailyIncpectionReportView from "../../../common/component/organisms/report/animatedReportList/dailyIncpection/DailyIncpectionReportView";

export default function DailyIncpectionFormViewScreen({ route }) {
  return <DailyIncpectionReportView route={route} />;
}
