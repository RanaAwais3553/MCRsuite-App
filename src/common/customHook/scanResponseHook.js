import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { fetchDailyInceptionReportData } from "../../../store/action/reportAction";
import { useDispatch, useSelector } from "react-redux";
import { scanResponse } from "../../store/action/scanResponseAction";
import getlocationLongHook from "./geoLocationAPIHook";
import { setScanModalState } from "../../store/action/modalAction";
import AndroidOpenSettings from "react-native-android-open-settings";
const scanResponseHook = (
  apiCall,
  scanData,
  description,
  status,
  currentDateTime,
  navigation
) => {
  const { lat, long } = getlocationLongHook(navigation);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const scanHandler = async () => {
      setError(null);
      setIsLoading(true);
      try {
        {
          lat == null || long == null
            ? Alert.alert(
                "Turn on your location",
                "Please Turn on your location to continue...",
                [
                  {
                    text: "Ok",
                    onPress: () => {
                      navigation.goBack();
                      AndroidOpenSettings.locationSourceSettings();
                    },
                  },
                ]
              )
            : await dispatch(
                scanResponse(
                  scanData,
                  description,
                  status,
                  currentDateTime,
                  long,
                  lat
                )
              );
        }
        let value = false;
        dispatch(setScanModalState(value));
      } catch (err) {
        let value = false;
        dispatch(setScanModalState(value));
        setError(err.message);
        setIsLoading(false);
      }
    };
    apiCall && scanHandler();
  }, [apiCall]);
  return { isLoading, error };
};
export default scanResponseHook;
