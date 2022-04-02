import React from "react";
import { View, Dimensions, Text } from "react-native";
import Icon from "../atom/Icon";
import Zocial from "react-native-vector-icons/Zocial";
import Fontisto from "react-native-vector-icons/Fontisto";
import TextHeading from "../atom/TextHeading";
import TextView from "../atom/TextView";
import { SiteViewStyle } from "../../styles/SiteViewStyle";
import Accordion from "./Accordion";
import { wp, hp } from "../../styles/Dimensions";
import RenderHtml from "react-native-render-html";
let { height: screenHeight, width: screenWidth } = Dimensions.get("window");

export default function SiteviewCard({
  name,
  email,
  address,
  sitesTimeSlotsArray,
}) {
  const source = {
    html: `${address}`,
  };
  return (
    <View style={SiteViewStyle.container}>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          // backgroundColor: "#121212",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "OpenSans-Bold",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          {name}
        </Text>
        {/* <TextHeading title={name ? name : "John Paul Construction"} /> */}
      </View>
      <View style={SiteViewStyle.card}>
        <TextHeading title={"Email"} />
        <View style={SiteViewStyle.cardIcon}>
          <Icon Type={Zocial} names={"email"} sizes={22} colors={"#3155a5"} />
          <TextView text={email ? email : "Username@gmail.com"} />
        </View>
      </View>
      <View style={SiteViewStyle.card}>
        <TextHeading title={"Address"} />
        <View style={SiteViewStyle.cardIcon}>
          <Icon
            Type={Fontisto}
            names={"map-marker-alt"}
            sizes={22}
            colors={"#3155a5"}
          />
          <View style={{ width: screenWidth / 1.5 }}>
            <RenderHtml contentWidth={screenWidth} source={source} />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginVertical: hp(1),
        }}
      >
        <Accordion sitesTimeSlotsArray={sitesTimeSlotsArray} />
      </View>
    </View>
  );
}
