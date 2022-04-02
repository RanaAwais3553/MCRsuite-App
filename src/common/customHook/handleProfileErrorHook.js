import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { fetchDailyInceptionReportData } from "../../../store/action/reportAction";
import { useDispatch, useSelector } from "react-redux";
import { clearSuccessResponse } from "../../store/action/profileAction";
import { scanResponse } from "../../store/action/scanResponseAction";
const handleProfileHook = (error) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      Alert.alert("Sorry!", error, [
        {
          text: "Okay",
          onPress: () => {
            dispatch(clearSuccessResponse());
          },
        },
      ]);
    }
  }, [error]);
};
export default handleProfileHook;
