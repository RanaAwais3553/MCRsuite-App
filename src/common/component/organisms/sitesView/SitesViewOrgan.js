import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SiteViewStyle } from "../../../styles/SiteViewStyle";
import Logo from "../../atom/Logo";
import SiteviewCard from "../../molecules/SiteViewCard";

export default function SitesViewOrgan({
  name,
  email,
  address,
  sitesTimeSlotsArray,
}) {
  return (
    <View style={{ flex: 1 }}>
      <View style={SiteViewStyle.userDetail}>
        <SiteviewCard
          name={name}
          email={email}
          address={address}
          sitesTimeSlotsArray={sitesTimeSlotsArray}
        />
      </View>
    </View>
  );
}
