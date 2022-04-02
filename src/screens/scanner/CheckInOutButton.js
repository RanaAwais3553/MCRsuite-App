import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { hp, wp } from "../../common/styles/Dimensions";
function CheckInOutButton({ callBackStatus, prevState }) {
  const [status, setStatus] = useState(prevState);
  return (
    <View
      style={{
        flex: 1,
        alignSelf: "stretch",
        backgroundColor: "#121212",
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setStatus("Check In"), callBackStatus("Check In");
        }}
        activeOpacity={0.8}
        style={{
          flex: 0.3,
          backgroundColor: status === "Check In" ? "#3155a5" : "#fff",
          paddingVertical: hp(1.5),
          marginHorizontal: wp(5),
          // paddingHorizontal: wp(2),
          borderRadius: hp(1),
          // marginTop: hp(10),
        }}
      >
        <Text
          style={{
            color: status === "Check In" ? "#fff" : "#121212",
            fontFamily:
              status === "Check In" ? "OpenSans-Bold" : "OpenSans-Regular",
            textAlign: "center",
          }}
        >
          Check In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setStatus("Check Out"), callBackStatus("Check Out");
        }}
        activeOpacity={0.8}
        style={{
          flex: 0.3,
          paddingVertical: hp(1.5),
          marginHorizontal: wp(5),
          // paddingHorizontal: wp(1),
          borderRadius: hp(1),
          backgroundColor: status === "Check Out" ? "#3155a5" : "#fff",
        }}
      >
        <Text
          style={{
            color: status === "Check Out" ? "#fff" : "#121212",
            fontFamily:
              status === "Check Out" ? "OpenSans-Bold" : "OpenSans-Regular",
            textAlign: "center",
          }}
        >
          Check Out
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default CheckInOutButton;
