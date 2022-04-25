import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import { wp } from "../../../styles/Dimensions";
let { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const SitesListHeader = ({ siteListArray, navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          width: "92%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#3155a5",
            fontSize: wp(5),
            //marginBottom: 8,
            fontFamily: "OpenSans-Bold",
            //    backgroundColor: "#121212",
          }}
        >
          News Reel
        </Text>
        {/* {siteListArray.length > 6 && (
          <TouchableOpacity
            onPress={() => navigation.navigate("SitesList")}
            style={{
              flexDirection: "row",
              marginLeft: "auto",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                color: "#3155a5",
                fontSize: wp(2.8),
                //marginBottom: 8,
                fontFamily: "OpenSans-Bold",
                //    backgroundColor: "#121212",
              }}
            >
              View all
            </Text>
            <Icon
              name="keyboard-arrow-right"
              size={wp(4)}
              type="material"
              color="#3155a5"
            />
          </TouchableOpacity>
        )} */}
      </View>
    </View>
  );
};

export default SitesListHeader;
