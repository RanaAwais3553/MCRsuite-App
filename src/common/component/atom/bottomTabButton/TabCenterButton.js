import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  View,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import TextStyle from "../TextStyle";
import { useIsFocused } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "../../../../../styles";
let { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const TabCenterButton = ({ label, onPress }) => {
  const isFocused = useIsFocused();
  return (
    <TouchableWithoutFeedback
      accessibilityRole="button"
      //  activeOpacity={1}
      onPress={onPress}
      style={styles.bottomTabBarButtonCenterTouchAbleStyle}
    >
      <View
        style={{
          ...styles.bottomTabBarButtonLeftViewStyle,
          backgroundColor: isFocused ? "#d14e52" : "#3155a5",
        }}
      >
        {isFocused ? (
          <TextStyle
            adjustsFontSizeToFit
            style={{
              ...styles.bottomTabBarButtonLeftTextStyle,
              color: isFocused ? "#fff" : "#a6a2a2",
            }}
          >
            {" "}
            Home{" "}
          </TextStyle>
        ) : (
          <MaterialIcons
            name="home"
            color={isFocused ? "#d14e52" : "#a6a2a2"}
            size={isFocused ? 30 : 26}
          />
        )}
        <View
          style={{
            height: 8,
            width: 10,
            //     borderTopRightRadius: 10,
            position: "absolute",
            left: -14,
            bottom: 13,
            backgroundColor: "#f2f2f2",
          }}
        />

        <View
          style={{
            height: screenHeight < 630 ? 11 : 15,
            width: screenHeight < 630 ? 12 : 18,
            borderTopRightRadius: screenHeight < 630 ? 16 : 18,
            position: "absolute",
            left:
              Platform.OS === "ios"
                ? screenHeight < 630
                  ? -11.4
                  : -19.6
                : -19.5,
            bottom:
              Platform.OS == "ios" ? (screenHeight < 630 ? -1.3 : 0.2) : 5,
            backgroundColor: "#3155a5",
          }}
        />
        <View
          style={{
            height: 8,
            width: 10,
            //     borderTopRightRadius: 10,
            position: "absolute",
            right: -14,
            bottom: 13,
            backgroundColor: "#f2f2f2",
          }}
        />

        <View
          style={{
            height: screenHeight < 630 ? 11 : 15,
            width: screenHeight < 630 ? 12 : 18,
            borderTopLeftRadius: screenHeight < 630 ? 16 : 18,
            position: "absolute",
            right:
              Platform.OS === "ios"
                ? screenHeight < 630
                  ? -11.4
                  : -19.6
                : -19.5,
            bottom:
              Platform.OS === "ios" ? (screenHeight < 630 ? -1.3 : 0.2) : 5,
            backgroundColor: "#3155a5",
          }}
        />
      </View>
      {/* #717cbe */}
    </TouchableWithoutFeedback>
  );
};

export default TabCenterButton;
