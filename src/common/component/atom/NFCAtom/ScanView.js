import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { hp, wp } from "../../../styles/Dimensions";
import { ProfileStyle } from "../../../styles/ProfileStyle";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
export default function SCanView({ navigation, modalVisibles }) {
  return (
    <View>
      <View
        style={{
          height: hp(20),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icons name="nfc" size={120} color="#3155A5" />
      </View>
      <Text style={{ alignSelf: "center", marginBottom: hp(4) }}>
        Ready to Scan NFC
      </Text>

      <Pressable
        style={[ProfileStyle.button, ProfileStyle.buttonClose]}
        onPress={() => {
          modalVisibles(false);
          // modalHandler();
          navigation.navigate("Home");
        }}
      >
        <Text style={ProfileStyle.textStyle}>Cancel</Text>
      </Pressable>
    </View>
  );
}
