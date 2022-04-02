import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { hp } from "../../../styles/Dimensions";
import CheckBoxItem from "../CheckBoxItem";
let { height: screenHeight, width: screenWidth } = Dimensions.get("window");
export default function MobilePatrol({
  mobilepatrolbox,
  mobilePropertyboxe,
  patrolboxe,
  disableBuiltInState,
  formView,
  clearCheckBoxes,
}) {
  const [mobilePropertybox, setMobilepropertybox] =
    useState(mobilePropertyboxe);
  const [mobilePatrolbox, setMobilePatrolbox] = useState(patrolboxe);
  const [firstIsChecked, setFirstIsChecked] = useState(
    mobilePropertyboxe == "Yes" ? true : false
  );
  const [secondIsChecked, setSecondIsChecked] = useState(
    patrolboxe == "Yes" ? true : false
  );
  useEffect(() => {
    return () => {
      clearCheckBoxes();
    };
  }, []);
  useEffect(() => {
    mobilepatrolbox(mobilePropertybox, mobilePatrolbox);
  }, [mobilePropertybox, mobilePatrolbox]);

  return (
    <View style={formView ? styles.formViewStyle : styles.formUpdateStyle}>
      <CheckBoxItem
        texts={"Property Checked ?"}
        value={firstIsChecked}
        disableBuiltInState={disableBuiltInState}
        key={1}
        onPresses={() => {
          setMobilepropertybox(mobilePropertybox == "No" ? "Yes" : "No"),
            setFirstIsChecked(!firstIsChecked);
        }}
        formView={formView}
      />
      <CheckBoxItem
        texts={"Full Patrol ?"}
        value={secondIsChecked}
        disableBuiltInState={disableBuiltInState}
        key={2}
        onPresses={() => {
          setMobilePatrolbox(mobilePatrolbox == "No" ? "Yes" : "No"),
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
    marginBottom: hp(2),
  },
  formUpdateStyle: {
    marginBottom: hp(2),
  },
});
