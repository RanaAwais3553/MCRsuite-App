import React, { useEffect, useState } from "react";
import { fetchMobileReportData } from "../../../store/action/reportAction";
import { useDispatch, useSelector } from "react-redux";

const mobileReportHook = () => {
  const mobileReportArray = useSelector(
    (state) => state.reportList.mobileReportArray
  );
  const dispatch = useDispatch();
  const [isLoadings, setIsLoading] = useState(true);
  const [errors, setError] = useState();
  useEffect(() => {
    const reportList = async () => {
      setError(null);
      // setIsLoading(true);
      try {
        await dispatch(fetchMobileReportData());
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    console.log("inside mobile report hook");
    reportList();
  }, [dispatch]);
  return { isLoadings, errors };
};
export default mobileReportHook;
