import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { fetchDailyInceptionReportData } from "../../../store/action/reportAction";
import { useDispatch, useSelector } from "react-redux";
import { scanResponse } from "../../store/action/scanResponseAction";
const scanResponseErrorHook = (error, navigation) => {
  useEffect(() => {
    if (error) {
      Alert.alert("Sorry!", error, [
        {
          text: "Okay",
          onPress: () => {
            navigation.navigate("Home");
          },
        },
      ]);
    }
  }, [error]);
};
export default scanResponseErrorHook;
