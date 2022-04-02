import React, { useEffect, useState } from "react";
import { fetchSiteVisitReportData } from "../../../store/action/reportAction";
import { useDispatch, useSelector } from "react-redux";

const siteVisitHook = () => {
  const siteVisitReportArray = useSelector(
    (state) => state.reportList.siteVisitReportArray
  );
  const dispatch = useDispatch();
  const [isLoadings, setIsLoading] = useState(true);
  const [errors, setError] = useState();
  useEffect(() => {
    const reportList = async () => {
      setError(null);
      // setIsLoading(true);
      try {
        await dispatch(fetchSiteVisitReportData());
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    console.log("inside site Visit report hook");
    reportList();
  }, [dispatch]);
  return { isLoadings, errors };
};
export default siteVisitHook;
