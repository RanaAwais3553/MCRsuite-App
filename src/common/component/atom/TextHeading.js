import React from "react";
import { View, Text } from "react-native";
import { wp } from "../../styles/Dimensions";
import { SiteViewStyle } from "../../styles/SiteViewStyle";

export default function TextHeading({ title }) {
  return (
    <Text
      style={{
        width: wp(47),
        // backgroundColor: "#121212",
        ...SiteViewStyle.cardHeading,
      }}
    >
      {title}
    </Text>
  );
}
