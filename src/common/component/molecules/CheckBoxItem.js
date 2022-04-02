import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { hp, wp } from "../../styles/Dimensions";
import CheckBox from "../atom/CheckBox";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import TextHeading from "../atom/TextHeading";
function CheckBoxItem({
  texts,
  keys,
  value,
  onPresses,
  disableBuiltInState,
  formView,
}) {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: hp(1),
          backgroundColor: "#fff",
          paddingVertical: hp(2),
          width: "100%",
          paddingHorizontal: wp(2),
          shadowColor: "#000",
          borderRadius: wp(1.5),
          shadowOpacity: 0.5,
          shadowRadius: 3,
          shadowOffset: {
            height: 0,
            width: 0,
          },
          elevation: 2,
        }}
      >
        {/* <TextHeading title={""} /> */}
        <CheckBox
          key={keys}
          sizes={25}
          value={value}
          fillColors="#3155a5"
          unfillColors="#FFFFFF"
          texts={texts}
          onPresses={onPresses}
          disableBuiltInState={disableBuiltInState}
          formView={formView}
        />
        {/* </ScrollView> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default React.memo(CheckBoxItem);
