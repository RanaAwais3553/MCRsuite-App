import React from "react";
import { View, Text } from "react-native";
import IncidentReportView from "../../../common/component/organisms/report/animatedReportList/incidentReport/IncidentReportView";

export default function IncidentFormViewScreen({ route }) {
  return <IncidentReportView route={route} />;
}
