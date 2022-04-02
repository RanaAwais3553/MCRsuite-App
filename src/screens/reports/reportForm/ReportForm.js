import React from "react";
import { View, Text } from "react-native";
import ReportForum from "../../../common/component/organisms/report/ReportForm";

export default function ReportFormScreen() {
  return (
    <View
      style={{ flex: 1, backgroundColor: "#f2f2f2", paddingHorizontal: 10 }}
    >
      <ReportForum />
    </View>
  );
}
