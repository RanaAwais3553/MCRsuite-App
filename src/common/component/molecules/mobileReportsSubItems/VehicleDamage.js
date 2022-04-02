import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { hp, wp } from "../../../styles/Dimensions";
import InputTexts from "../../atom/InputText";
import TextHeading from "../../atom/TextHeading";
import CheckBoxItem from "../CheckBoxItem";
import MultilineText from "../MultiLineText";
import RenderHtml from "react-native-render-html";

let { height: screenHeight, width: screenWidth } = Dimensions.get("window");
export default function VehacleDamage({
  damage_multilineHandler,
  onChange_Driver_Texts,
  onChange_Registration_Texts,
  editable,
  strippedHtmlvehicle_registration,
  strippedHtmldamage_description,
  strippedHtml_previous_driver_name,
  formView,
  clearCheckBoxes,
}) {
  useEffect(() => {
    return () => {
      clearCheckBoxes();
    };
  }, []);
  const source = {
    html: `${strippedHtmldamage_description}`,
  };
  return (
    <View style={formView ? styles.formViewStyle : styles.formUpdateStyle}>
      <View style={{ paddingVertical: hp(1) }}>
        <TextHeading title={"Previous Driver:"} />
        <InputTexts
          placeHolders={
            strippedHtml_previous_driver_name
              ? strippedHtml_previous_driver_name
              : "Driver.."
          }
          keyboardTypes={"default"}
          values={strippedHtml_previous_driver_name}
          onChangeTexts={onChange_Driver_Texts}
          secureTextEntries={false}
          editables={editable}
          IconName={"user"}
          IconType={"Feather"}
          size={hp(3.5)}
        />
      </View>
      <View style={{ paddingVertical: hp(1) }}>
        <TextHeading title={"Vehicle Registration:"} />
        <InputTexts
          placeHolders={
            strippedHtmlvehicle_registration
              ? strippedHtmlvehicle_registration
              : "Vehicle Registration"
          }
          keyboardTypes={"default"}
          values={strippedHtmlvehicle_registration}
          onChangeTexts={onChange_Registration_Texts}
          secureTextEntries={false}
          editables={editable}
          IconName={"registered"}
          IconType={"FontAwesome"}
          size={hp(3.5)}
        />
      </View>

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
          additional_info={strippedHtmldamage_description}
          title={"Submits"}
          textInputValue={strippedHtmldamage_description}
          editable={editable}
          MultilineTexHandler={damage_multilineHandler}
          heading={"Damage Description:"}
          placeholders={
            strippedHtmldamage_description
              ? strippedHtmldamage_description
              : "Please provide a report of the damaged.."
          }
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  formViewStyle: {
    flexGrow: 1,
    marginBottom: hp(2),
  },
  formUpdateStyle: {
    marginBottom: hp(2),
  },
});
