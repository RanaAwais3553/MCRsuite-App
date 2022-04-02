import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, StyleSheet, Platform } from "react-native";
import RenderHTML from "react-native-render-html";
import { hp } from "../../../styles/Dimensions";
import { ReportViewStyle } from "../../../styles/ReportViewStyle";
import TextHeading from "../../atom/TextHeading";
import CheckBoxItem from "../CheckBoxItem";
import MultilineText from "../MultiLineText";
let { height: screenHeight, width: screenWidth } = Dimensions.get("window");
export default function AlarmResponse({
  strippedHtml_alarm_reason,
  DetailTexHandler,
  strippedHtmlInfo_details,
  ReasonTexHandler,
  alarmboxHandler,
  keys,
  reasonValue,
  detailValue,
  editable,
  disableBuiltInState,
  patrolboxe,
  alarmControlboxe,
  formView,
  clearCheckBoxes,
}) {
  const [alarmPatrolbox, setAlarmPatrolbox] = useState(patrolboxe);
  const [alarmControlbox, setAlarmControlbox] = useState(alarmControlboxe);
  const [firstIsChecked, setFirstIsChecked] = useState(
    patrolboxe == "Yes" ? true : false
  );
  const [secondIsChecked, setSecondIsChecked] = useState(
    alarmControlboxe == "Yes" ? true : false
  );
  useEffect(() => {
    return () => clearCheckBoxes();
  }, []);
  useEffect(() => {
    alarmboxHandler(alarmPatrolbox, alarmControlbox);
  }, [alarmPatrolbox, alarmControlbox]);

  return (
    <View style={[formView ? styles.formViewStyle : styles.formUpdateStyle]}>
      {formView ? (
        <View style={{}}>
          <Text
            style={{
              fontFamily: "OpenSans-Bold",
              fontSize: 14,
              color: Platform.OS == "ios" ? "#121212" : "#9e9e9e",
            }}
          >
            Reason for the alarm response:
          </Text>
          <Text>{reasonValue}</Text>
        </View>
      ) : (
        <MultilineText
          additional_info={strippedHtml_alarm_reason}
          title={"Submits"}
          MultilineTexHandler={ReasonTexHandler}
          heading={"Reason for the alarm response:"}
          placeholders={
            reasonValue ? reasonValue : "Reason for the alarm response.."
          }
          textInputValue={reasonValue}
          editable={editable}
        />
      )}
      {formView ? (
        <View style={{ paddingTop: 10 }}>
          <Text
            style={{
              fontFamily: "OpenSans-Bold",
              fontSize: 14,
              color: Platform.OS == "ios" ? "#121212" : "#9e9e9e",
            }}
          >
            Detail:
          </Text>
          <Text>{detailValue}</Text>
        </View>
      ) : (
        <View style={{ marginTop: hp(-1) }}>
          <MultilineText
            additional_info={strippedHtmlInfo_details}
            title={"Submits"}
            MultilineTexHandler={DetailTexHandler}
            heading={"Detail:"}
            placeholders={detailValue ? detailValue : "Details"}
            textInputValue={detailValue}
            editable={editable}
          />
        </View>
      )}
      <CheckBoxItem
        texts={"Full Patrol ?"}
        key={keys}
        value={firstIsChecked}
        disableBuiltInState={disableBuiltInState}
        onPresses={() => {
          setAlarmPatrolbox(alarmPatrolbox == "No" ? "Yes" : "No"),
            setFirstIsChecked(!firstIsChecked);
        }}
        formView={formView}
      />
      <CheckBoxItem
        texts={"Informed Control ?"}
        key={keys}
        value={secondIsChecked}
        disableBuiltInState={disableBuiltInState}
        onPresses={() => {
          setAlarmControlbox(alarmControlbox == "No" ? "Yes" : "No"),
            setSecondIsChecked(!secondIsChecked);
        }}
        formView={formView}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  formViewStyle: {
    flexGrow: 1,
    // height: screenHeight,
    // width: screenWidth / 1.15,
    // marginBottom: hp(2),
  },
  formUpdateStyle: {
    marginBottom: hp(2),
  },
});
