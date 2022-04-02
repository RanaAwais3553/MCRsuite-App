import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { hp, wp } from "../../../styles/Dimensions";
import InputTexts from "../../atom/InputText";
import TextHeading from "../../atom/TextHeading";
import CheckBoxItem from "../CheckBoxItem";
import MultilineText from "../MultiLineText";
import RenderHtml from "react-native-render-html";
let { height: screenHeight, width: screenWidth } = Dimensions.get("window");
export default function Declamp({
  strippedHtmlfurther_issues,
  Declamp_chkboxHandler,
  declamp_multilineHandler,
  onChangeTexts,
  registrationValue,
  disableBuiltInState,
  detailValue,
  declampownerboxe,
  editable,
  formView,
  clearCheckBoxes,
}) {
  console.log("detail value is:!...", detailValue);
  const [declampownerbox, setDeclampownerbox] = useState(declampownerboxe);
  const [firstIsChecked, setFirstIsChecked] = useState(
    declampownerboxe == "Yes" ? true : false
  );
  useEffect(() => {
    return () => {
      clearCheckBoxes();
      setFirstIsChecked(false);
      setDeclampownerbox("No");
    };
  }, []);
  useEffect(() => {
    Declamp_chkboxHandler(declampownerbox);
  }, [declampownerbox]);
  const source = {
    html: `${detailValue}`,
  };
  return (
    <View style={formView ? styles.formViewStyle : styles.formUpdateStyle}>
      <TextHeading title={"Vehicle Registration:"} />

      <InputTexts
        placeHolders={"Vehicle Registration"}
        keyboardTypes={"default"}
        values={registrationValue}
        onChangeTexts={onChangeTexts}
        // onChangeTexts={(text) => setLocation(text)}

        secureTextEntries={false}
        editables={editable}
        IconName={"registered"}
        IconType={"FontAwesome"}
        size={hp(3.5)}
      />

      <CheckBoxItem
        texts={"Owner Present ?"}
        value={firstIsChecked}
        disableBuiltInState={disableBuiltInState}
        key={1}
        onPresses={() => {
          setDeclampownerbox(declampownerbox == "No" ? "Yes" : "No"),
            setFirstIsChecked(!firstIsChecked);
        }}
        formView={formView}
      />
      {formView ? (
        <View style={{ flexGrow: 1, paddingTop: 10 }}>
          <Text
            style={{
              fontFamily: "OpenSans-Bold",
              fontSize: 14,
              color: Platform.OS == "ios" ? "#121212" : "#9e9e9e",
            }}
          >
            Detail:
          </Text>
          <RenderHtml contentWidth={screenWidth} source={source} />
        </View>
      ) : (
        <MultilineText
          additional_info={strippedHtmlfurther_issues}
          Onpressed={() => {
            Keyboard.dismiss();
          }}
          title={"Submits"}
          MultilineTexHandler={declamp_multilineHandler}
          heading={"Furter Issues:"}
          placeholders={detailValue ? detailValue : "Issues"}
          textInputValue={detailValue}
          editable={editable}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  formViewStyle: {
    flexGrow: 1,
    // marginBottom: hp(2),
  },
  formUpdateStyle: {
    marginBottom: hp(2),
  },
});
