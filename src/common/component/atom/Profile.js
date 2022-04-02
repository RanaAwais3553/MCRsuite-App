import React from "react";
import { View, Text, TouchableNativeFeedback, Dimensions } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { hp, wp } from "../../styles/Dimensions";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
function Profile({ navigation }) {
  const { email, type, full_name } = useSelector((state) => state.auth);
  console.log(email, type, full_name, "name and email is:!...");
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <Avatar
          rounded
          size={wp(16)}
          source={require("../../../../assets/avatar2.jpg")}
        />
        <View
          style={{
            flex: 1,
            // backgroundColor: "#121212",
            justifyContent: "center",
            alignItems: "flex-start",
            marginLeft: 10,
          }}
        >
          <Text
            numberOfLines={1}
            ellipsizeMode={"tail"}
            style={{
              //  flexBasis: 53,
              fontSize: wp(4),
              color: "#858383",
              fontFamily: "OpenSans-Bold",
            }}
          >
            {full_name}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode={"tail"}
            style={{
              textAlign: "justify",
              fontSize: wp(4),
              color: "#858383",
              fontFamily: "OpenSans-Bold",
            }}
          >
            {email}
          </Text>
        </View>
      </View>

      {/* <TouchableNativeFeedback style={{ flex: 1 }}> */}
      <View
        style={{
          flex: 0.25,
          // backgroundColor: "#121212",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: '#fff',
            alignSelf: "center",
          }}
        >
          <Icon
            name="account-edit"
            onPress={() => navigation.navigate("ProfileData")}
            size={hp(5)}
            type="material-community"
            color="#3155a5"
            style={{
              flex: 1,
              width: "100%",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </View>
      </View>
      {/* </TouchableNativeFeedback> */}
    </View>
  );
}

export default Profile;
