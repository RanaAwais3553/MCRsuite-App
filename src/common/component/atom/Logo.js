import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { loginStyle } from "../../styles/LoginStyle";

export default function Logo({ logoHeight, logoWidth }) {
  const { width: viewportWidth, height: viewportHeight } =
    Dimensions.get("window");
  function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
  }
  function hp(percentage) {
    const value = (percentage * viewportHeight) / 100;
    return Math.round(value);
  }

  return (
    <View style={loginStyle.logo}>
      <Image
        resizeMode="contain"
        source={require("../../../../assets/mcr.png")}
        style={{ height: hp(logoHeight), width: wp(logoWidth) }}
      ></Image>
    </View>
  );
}
