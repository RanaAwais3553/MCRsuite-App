import React, { useState } from "react";
import { View, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { hp } from "../../styles/Dimensions";
// import { forumStyle } from "../../../Components/formStyle";
import { ReportFormStyle } from "../../styles/ReportFormStyle";
function CheckBox({ texts, onPresses, value, disableBuiltInState, formView }) {
  return (
    <BouncyCheckbox
      size={hp(3)}
      fillColor="#3155a5"
      isChecked={value}
      unfillColor="#FFFFFF"
      text={texts}
      iconStyle={ReportFormStyle.iconStyle}
      textStyle={ReportFormStyle.textStyle}
      style={ReportFormStyle.checkboxStyles}
      // textStyle={{ fontFamily: "JosefinSans-Regular" }}
      textContainerStyle={{ flex: 1 }}
      onPress={formView ? () => console.log("Form View Open") : onPresses}
      disableBuiltInState={disableBuiltInState}
    />
  );
}
export default React.memo(CheckBox);
