import { TouchableOpacity, Text, View } from "react-native";
import React, { useEffect } from "react";
import TextStyle from "../TextStyle";
import { useIsFocused } from "@react-navigation/native";
import styles from "../../../../../styles";
import Octicons from "react-native-vector-icons/Octicons";
// import {useSelector} from 'react-redux'
const TabLeftButton = ({ label, onPress }) => {
  const isFocused = useIsFocused();
  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.8}
      disabled={true}
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
            Calendar{" "}
          </TextStyle>
        ) : (
          <Octicons
            name="calendar"
            color={isFocused ? "#d14e52" : "#a6a2a2"}
            size={isFocused ? 30 : 26}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default TabLeftButton;
