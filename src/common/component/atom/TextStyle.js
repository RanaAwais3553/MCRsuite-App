import React from "react";
import { Text, StyleSheet } from "react-native";
function TextStyle(props) {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "OpenSans-Bold",
  },
});

export default TextStyle;
