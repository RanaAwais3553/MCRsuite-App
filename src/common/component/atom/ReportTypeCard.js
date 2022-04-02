import React, { useState } from "react";
import { View, Text, Dimensions, TouchableNativeFeedback } from "react-native";
import { Icon } from "react-native-elements";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../styles/DimensionsTool";
let { width: screenWidth, height: screenHeight } = Dimensions.get("window");
function ReportTypeCard({ title, onSelect }) {
  return (
    <TouchableNativeFeedback
      onPress={onSelect}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        //   backgroundColor: "#121212",
      }}
    >
      <View
        style={{
          width: widthPercentageToDP("40.3%"),
          height: heightPercentageToDP("20.3%"), // backgroundColor: "gray",
          padding: 20,
          marginHorizontal: 5,
          marginVertical: 5,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#3155A5",
          // height: screenHeight < 709 ? 90 : 120,
          // width: screenHeight < 709 ? 140 : 150,
          // marginTop: 10,
          // alignSelf: 'center',
          // justifyContent: 'center',
          // alignItems: 'center',
          // paddingHorizontal: 10,
          // backgroundColor: '#3155a5',
          // elevation: 5,
        }}
      >
        <Icon
          name="file-document-edit"
          size={screenHeight < 709 ? 50 : 70}
          type="material-community"
          color="#fff"
        />
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Avenir-Heavy",
            fontWeight: "900",
            fontSize: screenHeight < 709 ? 12 : 16,
            color: "#fff",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
}

export default ReportTypeCard;
