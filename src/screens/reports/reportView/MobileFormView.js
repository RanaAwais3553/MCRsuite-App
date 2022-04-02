import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MobileReportView from "../../../common/component/organisms/report/animatedReportList/mobileReport/MobileReportView";

export default function MobileFormViewScreen({ route }) {
  return (
    <View style={{ flex: 1 }}>
      <MobileReportView route={route} />
    </View>
  );
}
