import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { hp } from "../../../styles/Dimensions";
import CheckBoxItem from "../CheckBoxItem";
let { height: screenHeight, width: screenWidth } = Dimensions.get("window");
export default function OpenUp({
  checkboxes,
  opendollarboxe,
  openAlarmboxe,
  patrolboxe,
  disableBuiltInState,
  formView,
  clearCheckBoxes,
}) {
  const [opendollarbox, setOpendollarbox] = useState(opendollarboxe);
  const [openAlarmbox, setOpenAlarmbox] = useState(openAlarmboxe);
  const [openPetrolbox, setOpenPetrolbox] = useState(patrolboxe);
  const [firstIsChecked, setFirstIsChecked] = useState(
    opendollarboxe == "Yes" ? true : false
  );
  const [secondIsChecked, setSecondIsChecked] = useState(
    openAlarmboxe == "Yes" ? true : false
  );
  const [thirdIsChecked, setThirdIsChecked] = useState(
    patrolboxe == "Yes" ? true : false
  );
  console.log(
    "Open Up Check Box Values is:!.............",
    opendollarbox,
    openAlarmbox,
    openPetrolbox,
    firstIsChecked,
    secondIsChecked,
    thirdIsChecked
  );
  useEffect(() => {
    return () => {
      clearCheckBoxes();
      setOpendollarbox("No");
      setOpenAlarmbox("No");
      setOpenPetrolbox("No");
      setFirstIsChecked(false);
      setSecondIsChecked(false);
      setThirdIsChecked(false);
    };
  }, []);
  useEffect(() => {
    checkboxes(opendollarbox, openAlarmbox, openPetrolbox);
  }, [opendollarbox, openAlarmbox, openPetrolbox]);
  return (
    <View style={formView ? styles.formViewStyle : styles.formUpdateStyle}>
      <CheckBoxItem
        texts={"Doors Unlocked ?"}
        key={1}
        value={firstIsChecked}
        disableBuiltInState={disableBuiltInState}
        onPresses={() => {
          setOpendollarbox(opendollarbox == "No" ? "Yes" : "No"),
            setFirstIsChecked(!firstIsChecked);
        }}
        formView={formView}
      />
      <CheckBoxItem
        texts={"Alarm disarmed ?"}
        key={2}
        value={secondIsChecked}
        disableBuiltInState={disableBuiltInState}
        onPresses={() => {
          setOpenAlarmbox(openAlarmbox == "No" ? "Yes" : "No"),
            setSecondIsChecked(!secondIsChecked);
        }}
        formView={formView}
      />
      <CheckBoxItem
        texts={"Full Patrol ? "}
        key={3}
        value={thirdIsChecked}
        disableBuiltInState={disableBuiltInState}
        onPresses={() => {
          setOpenPetrolbox(openPetrolbox == "No" ? "Yes" : "No"),
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
