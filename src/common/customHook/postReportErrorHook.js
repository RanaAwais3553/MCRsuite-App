import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { clearState } from "../../store/action/reportAction";
import { useDispatch } from "react-redux";
const postReportErrorHook = (error) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      Alert.alert("Sorry!", error, [
        {
          text: "Okay",
          onPress: () => {
            dispatch(clearState());
            // navigation.navigate("Home");
          },
        },
      ]);
    }
  }, [error]);
};
export default postReportErrorHook;
