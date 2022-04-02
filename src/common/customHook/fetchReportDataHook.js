// import React, { useEffect, useState } from "react";
// import {
//   fetchDailyInceptionReportData,
//   fetchIncidentReportData,
//   fetchMobileReportData,
//   fetchSiteVisitReportData,
// } from "../../store/action/reportAction";
// import { useDispatch, useSelector } from "react-redux";
// export const dailyInspectionHook = () => {
//   const dispatch = useDispatch();
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState();
//   useEffect(() => {
//     const reportList = async () => {
//       setError(null);
//       setIsLoading(true);
//       try {
//         await dispatch(fetchDailyInceptionReportData());
//         setIsLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setIsLoading(false);
//       }
//     };
//     reportList();
//   }, []);
//   return { isLoading, error };
// };

// export const incidentReportHook = () => {
//   const dispatch = useDispatch();
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState();
//   useEffect(() => {
//     const reportList = async () => {
//       setError(null);
//       setIsLoading(true);
//       try {
//         await dispatch(fetchIncidentReportData());
//         setIsLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setIsLoading(false);
//       }
//     };
//     reportList();
//   }, []);
//   return { isLoading, error };
// };

// export const mobileReportHook = () => {
//   const dispatch = useDispatch();
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState();
//   useEffect(() => {
//     const reportList = async () => {
//       setError(null);
//       setIsLoading(true);
//       try {
//         await dispatch(fetchMobileReportData());
//         setIsLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setIsLoading(false);
//       }
//     };
//     reportList();
//   }, []);
//   return { isLoading, error };
// };

// export const siteVisitHook = () => {
//   const dispatch = useDispatch();
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState();
//   useEffect(() => {
//     const reportList = async () => {
//       setError(null);
//       setIsLoading(true);
//       try {
//         await dispatch(fetchSiteVisitReportData());
//         setIsLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setIsLoading(false);
//       }
//     };
//     reportList();
//   }, []);
//   return { isLoading, error };
// };
