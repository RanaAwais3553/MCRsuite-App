import React, { useEffect, useState } from "react";
import { fetchIncidentReportData } from "../../../store/action/reportAction";
import { useDispatch, useSelector } from "react-redux";

const incidentReportHook = () => {
  const incidentReportArray = useSelector(
    (state) => state.reportList.incidentReportArray
  );
  const dispatch = useDispatch();
  const [isLoadings, setIsLoading] = useState(true);
  const [errors, setError] = useState();
  useEffect(() => {
    const reportList = async () => {
      setError(null);
      // setIsLoading(true);
      try {
        await dispatch(fetchIncidentReportData());
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    console.log("inside incident report hook");
    reportList();
  }, [dispatch]);
  return { isLoadings, errors };
};

export default incidentReportHook;
