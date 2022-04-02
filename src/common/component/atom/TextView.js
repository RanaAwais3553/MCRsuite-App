import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { wp } from "../../styles/Dimensions";

export default function TextView({ text }) {
  return <Text style={{ width: wp(43) }}>{text}</Text>;
}
