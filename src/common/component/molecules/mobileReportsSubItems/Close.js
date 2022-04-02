import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { hp } from "../../../styles/Dimensions";
import CheckBoxItem from "../CheckBoxItem";
let { height: screenHeight, width: screenWidth } = Dimensions.get("window");
export default function Close({
  closechkbox,
  closeAlarmboxe,
  closeDoorboxe,
  patrolboxe,
  disableBuiltInState,
  formView,
  clearCheckBoxes,
}) {
  console.log("close Patrol box component", patrolboxe);
  const [closepatrolbox, setClosepatrolbox] = useState(patrolboxe);
  const [closeAlarmbox, setCloseAlarmbox] = useState(closeAlarmboxe);
  const [closeDoorbox, setCloseDoorbox] = useState(closeDoorboxe);
  const [firstIsChecked, setFirstIsChecked] = useState(
    patrolboxe == "Yes" ? true : false
  );
  const [secondIsChecked, setSecondIsChecked] = useState(
    closeAlarmboxe == "Yes" ? true : false
  );
  const [thirdIsChecked, setThirdIsChecked] = useState(
    closeDoorboxe == "Yes" ? true : false
  );
  useEffect(() => {
    return () => {
      clearCheckBoxes();
      setCloseAlarmbox("No");
      setClosepatrolbox("No");
      setCloseDoorbox("No");
      setFirstIsChecked(false);
      setSecondIsChecked(false);
      setThirdIsChecked(false);
    };
  }, []);
  useEffect(() => {
    closechkbox(closepatrolbox, closeAlarmbox, closeDoorbox);
  }, [closepatrolbox, closeAlarmbox, closeDoorbox]);
  return (
    <View style={formView ? styles.formViewStyle : styles.formUpdateStyle}>
      <CheckBoxItem
        texts={"Full Patrol ?"}
        key={1}
        value={firstIsChecked}
        disableBuiltInState={disableBuiltInState}
        onPresses={() => {
          setClosepatrolbox(closepatrolbox == "No" ? "Yes" : "No"),
            setFirstIsChecked(!firstIsChecked);
        }}
        formView={formView}
      />
      <CheckBoxItem
        texts={"Alarm Set ?"}
        key={2}
        value={secondIsChecked}
        disableBuiltInState={disableBuiltInState}
        onPresses={() => {
          setCloseAlarmbox(closeAlarmbox == "No" ? "Yes" : "No"),
            setSecondIsChecked(!secondIsChecked);
        }}
        formView={formView}
      />
      <CheckBoxItem
        texts={"Door Locked ? "}
        key={3}
        value={thirdIsChecked}
        disableBuiltInState={disableBuiltInState}
        onPresses={() => {
          setCloseDoorbox(closeDoorbox == "No" ? "Yes" : "No"),
            setThirdIsChecked(!thirdIsChecked);
        }}
        formView={formView}
      />
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
