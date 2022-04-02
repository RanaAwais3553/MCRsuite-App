import React, { useEffect, useState } from "react";
import { fetchDailyInceptionReportData } from "../../../store/action/reportAction";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";

const dailyInspectionHook = () => {
  const dailyIncpectionReportArray = useSelector(
    (state) => state.reportList.dailyIncpectionReportArray
  );
  const dispatch = useDispatch();
  const [isLoadings, setIsLoading] = useState(true);
  const [errors, setError] = useState("");
  const isFocused = useIsFocused();
  useEffect(() => {
    const reportList = async () => {
      setError(null);
      // setIsLoading(true);
      try {
        await dispatch(fetchDailyInceptionReportData());
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    console.log("inside Daily inspection report hook");
    reportList();
  }, [dispatch]);
  return { isLoadings, errors };
};
export default dailyInspectionHook;
