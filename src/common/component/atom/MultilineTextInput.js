import React from "react";
import { View, Text, TextInput, Platform, Keyboard } from "react-native";
import { hp } from "../../styles/Dimensions";
// import { forumStyle } from "../../../Components/formStyle";
import { ReportFormStyle } from "../../styles/ReportFormStyle";

export default function MultilineTextInput({
  placeholders,
  borderRadius,
  numberOfLines,
  editable,
  onChangeTexts,
  values,
}) {
  return (
    <View style={{ height: hp(12) }}>
      <TextInput
        style={ReportFormStyle.inpuTexts}
        placeholder={placeholders}
        placeholderTextColor={"grey"}
        underlineColorAndroid={"transparent"}
        borderRadius={borderRadius}
        returnKeyType="done"
        blurOnSubmit={true}
        multiline={true}
        numberOfLines={Platform.OS === "ios" ? null : numberOfLines}
        minHeight={
          Platform.OS === "ios" && numberOfLines ? 20 * numberOfLines : null
        }
        //   numberOfLines={numberOfLines}
        editable={editable}
        textAlignVertical={"top"}
        disableFullscreenUI={true}
        enablesReturnKeyAutomatically={true}
        onChangeText={onChangeTexts}
        // onSubmitEditing={Keyboard.dismiss}
        value={values}
      ></TextInput>
    </View>
  );
}
