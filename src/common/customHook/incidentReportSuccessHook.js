import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { clearState } from "../../store/action/reportAction";
const incidentReportSuccessHook = (success, navigation) => {
  const dispatch = useDispatch();
  console.log("Hook Called!", success);
  useEffect(() => {
    if (success) {
      Alert.alert("Success!", success, [
        {
          text: "Okay",
          onPress: () => {
            dispatch(clearState());
            navigation.navigate("IncedentReportList");
          },
        },
      ]);
    }
  }, [success]);
};
export default incidentReportSuccessHook;
