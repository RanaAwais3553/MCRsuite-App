import React from "react";
import { View, Text, Dimensions } from "react-native";
import TextHeading from "../atom/TextHeading";
import TextView from "../atom/TextView";

export default function ReportViewItem({
  title,
  title2,
  title3,
  firstText,
  secondText,
  thirdText,
}) {
  return (
    <View
      style={{
        width: Dimensions.get("window").width,
        paddingHorizontal: 12,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 5,
          justifyContent: "space-between",
        }}
      >
        <TextHeading title={title ? `${title}:` : ""} />
        <TextView text={firstText ? firstText : ""} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TextHeading title={title2 ? `${title2}:` : ""} />
        <TextView text={secondText ? secondText : ""} />
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 5,
          justifyContent: "space-between",
        }}
      >
        <TextHeading title={title3 ? `${title3}:` : ""} />
        <TextView text={thirdText ? thirdText : thirdText} />
      </View>
    </View>
  );
}
