import React, { useState } from "react";
import { View, Keyboard, TouchableWithoutFeedback } from "react-native";
import { ReportFormStyle } from "../../styles/ReportFormStyle";
import MultilineTextInput from "../atom/MultilineTextInput";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function MultilineText({
  additional_info,
  MultilineTexHandler,
  heading,
  placeholders,
  editable,
  textInputValue,
}) {
  const [textInputValues, setTextInputValue] = useState(additional_info);
  const multiLineHandlerCallBack = (value) => {
    setTextInputValue(value);
    MultilineTexHandler(value);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={ReportFormStyle.inputView}>
        <SafeAreaProvider>
          <View style={{}}>
            <MultilineTextInput
              placeholders={placeholders}
              borderRadius={5}
              numberOfLines={5}
              editable={editable}
              additional_info={additional_info}
              onChangeTexts={multiLineHandlerCallBack}
              values={textInputValues}
              editable={editable}
            ></MultilineTextInput>
          </View>
        </SafeAreaProvider>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
