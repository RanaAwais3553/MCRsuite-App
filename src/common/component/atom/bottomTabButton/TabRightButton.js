import { TouchableOpacity, Text, View } from "react-native";
import React, { useEffect } from "react";
import TextStyle from "../TextStyle";
import { useIsFocused } from "@react-navigation/native";
import styles from "../../../../../styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
const TabRightButton = ({ children, onPress }) => {
  const { type } = useSelector((state) => state.auth);
  console.log("name and email is:!...", type);
  const isFocused = useIsFocused();
  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.8}
      disabled={type == "security_officer" ? true : false}
      onPress={onPress}
      style={styles.bottomTabBarButtonLeftTouchAbleStyle}
    >
      <View style={styles.bottomTabBarButtonRightViewStyle}>
        {isFocused ? (
          <TextStyle
            adjustsFontSizeToFit
            style={{
              ...styles.bottomTabBarButtonLeftTextStyle,
              color: isFocused ? "#fff" : "#a6a2a2",
            }}
          >
            {" "}
            Reports{" "}
          </TextStyle>
        ) : (
          <MaterialCommunityIcons
            name="file-document-edit"
            color={isFocused ? "#d14e52" : "#a6a2a2"}
            size={isFocused ? 30 : 26}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default TabRightButton;
