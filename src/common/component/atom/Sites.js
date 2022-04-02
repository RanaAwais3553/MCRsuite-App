import React from "react";
import { View, Text, TouchableNativeFeedback, Dimensions } from "react-native";
import { hp, wp } from "../../styles/Dimensions";
let { width: screenWidth, height: screenHeight } = Dimensions.get("window");
function Sites({ title, onSelect }) {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 10,
        // marginLeft: 5,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        //  backgroundColor: "#121212",
        width: "100%",
      }}
    >
      <TouchableNativeFeedback onPress={onSelect} style={{ flex: 1 }}>
        <View
          style={{
            height: hp(9),
            width: wp(38),
            backgroundColor: "#3155a5",
            paddingHorizontal: 5,
            elevation: 5,
            borderRadius: 12,
            justifyContent: "center",
          }}
        >
          <Text
            numberOfLines={2}
            ellipsizeMode={"tail"}
            style={{
              textAlign: "center",
              color: "#fbfbfb",
              fontFamily: "Avenir-Heavy",
              fontWeight: "900",
              fontSize: wp(3.7),
            }}
          >
            {title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default Sites;
