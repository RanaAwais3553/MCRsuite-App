import React, { useState } from "react";
import { View, Dimensions, Text } from "react-native";
import Icon from "../atom/Icon";
import Zocial from "react-native-vector-icons/Zocial";
import Fontisto from "react-native-vector-icons/Fontisto";
import TextHeading from "../atom/TextHeading";
import TextView from "../atom/TextView";
import { SiteViewStyle } from "../../styles/SiteViewStyle";
import { wp, hp } from "../../styles/Dimensions";
import RenderHtml from "react-native-render-html";
import { ListItem } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import TimeSlots from "./Accordion";
let { height: screenHeight, width: screenWidth } = Dimensions.get("window");

export default function SiteviewCard({
  name,
  email,
  address,
  sitesTimeSlotsArray,
}) {
  const [modal, setModal] = useState(false);
  const source = {
    html: `${address}`,
  };
  const callBackModal = () => {
    setModal(false);
  };
  console.log("site view card is:!....", modal);
  return (
    <View style={{ ...SiteViewStyle.container }}>
      {modal && (
        <TimeSlots
          callBackModal={callBackModal}
          sitesTimeSlotsArray={sitesTimeSlotsArray}
        />
      )}
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
      <View style={{ ...SiteViewStyle.card, flexGrow: 1 }}>
        <TextHeading title={"Email"} />
        <View style={SiteViewStyle.cardIcon}>
          <Icon Type={Zocial} names={"email"} sizes={22} colors={"#3155a5"} />
          <TextView text={email ? email : "Username@gmail.com"} />
        </View>
      </View>
      <View style={{ ...SiteViewStyle.card, flexGrow: 1, marginBottom: hp(1) }}>
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
      <TouchableOpacity
        activeOpacity={0.6}
        style={{ flexGrow: 1, marginBottom: hp(1) }}
        onPress={() => setModal(true)}
      >
        <ListItem>
          <View style={{ paddingLeft: 9 }}>
            <Icon
              Type={Ionicons}
              names={"time"}
              sizes={22}
              colors={"#3155A5"}
            />
          </View>
          <ListItem.Content>
            <ListItem.Title>
              <TextHeading title={"Time Slots"} />
            </ListItem.Title>
          </ListItem.Content>
          <Icon Type={Ionicons} names={"eye"} sizes={22} colors={"#3155A5"} />
        </ListItem>
        {/* <Accordion sitesTimeSlotsArray={sitesTimeSlotsArray} /> */}
      </TouchableOpacity>
    </View>
  );
}
