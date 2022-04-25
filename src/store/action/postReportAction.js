// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const POST_DAILY_INCEPECTION_REPORT_SUCCESS =
//   "POST_DAILY_INCEPECTION_REPORT_SUCCESS";
// export const POST_MOBILE_REPORT_DATA = "POST_MOBILE_REPORT_DATA";
// export const POST_INCIDENT_REPORT_DATA = "POST_INCIDENT_REPORT_DATA";
// export const POST_SITE_VISIT_REPORT_DATA = "POST_SITE_VISIT_REPORT_DATA";

// // export const PUT_DAILY_INCEPECTION_REPORT_DATA =
// //   "PUT_DAILY_INCEPECTION_REPORT_DATA";
// // export const PUT_MOBILE_REPORT_DATA = "PUT_MOBILE_REPORT_DATA";
// // export const PUT_INCIDENT_REPORT_DATA = "PUT_INCIDENT_REPORT_DATA";
// // export const PUT_SITE_VISIT_REPORT_DATA = "PUT_SITE_VISIT_REPORT_DATA";

// // export const DELETE_DAILY_INCEPECTION_REPORT_DATA =
// //   "DELETE_DAILY_INCEPECTION_REPORT_DATA";
// // export const DELETE_MOBILE_REPORT_DATA = "DELETE_MOBILE_REPORT_DATA";
// // export const DELETE_INCIDENT_REPORT_DATA = "DELETE_INCIDENT_REPORT_DATA";
// // export const DELETE_SITE_VISIT_REPORT_DATA = "DELETE_SITE_VISIT_REPORT_DATA";

// export const POST_DAILY_REPORT_REQUEST = "POST_DAILY_REPORT_REQUEST";
// export const POST_DAILY_REPORT_FAILED = "POST_DAILY_REPORT_FAILED";
// export const INITIALIZE_STATE = "INITIALIZE_STATE";
// // POST Report Data Functions
// export const clearState = () => {
//   return { type: INITIALIZE_STATE };
// };

// export const postDailyInceptionReportData = (formData) => {
//   console.log("daily inspection report form data:!...", formData);
//   return async (dispatch) => {
//     const userData = await AsyncStorage.getItem("userData");
//     const transformedData = JSON.parse(userData);
//     const { token, type } = transformedData;
//     try {
//       dispatch({ type: POST_DAILY_REPORT_REQUEST });
//       const response = await fetch(`https://mcrsuite.tk/api/api-reports`, {
//         method: "POST",
//         body: formData,
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (!response.ok) {
//         console.log("daily report error is:!...", response);
//         throw new Error("Something went wrong!");
//       }
//       const resData = await response.json();
//       const resmessage = resData["success"];
//       console.log("post daily report data success", resmessage[0]);
//       console.log("post daily report data success", resmessage[0]);
//       console.log("post daily report data success", resmessage[0]);
//       dispatch({
//         type: POST_DAILY_INCEPECTION_REPORT_SUCCESS,
//         success: resmessage[0],
//       });
//     } catch (err) {
//       dispatch({
//         type: POST_DAILY_REPORT_FAILED,
//         error: err,
//       });
//       //           throw err;
//     }
//   };
// };

// export const postIncidentReportData = (formData) => {
//   return async (dispatch) => {
//     const userData = await AsyncStorage.getItem("userData");
//     const transformedData = JSON.parse(userData);
//     const { token, type } = transformedData;
//     try {
//       const response = await fetch(`https://mcrsuite.tk/api/Incident-Reports`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });
//       if (!response.ok) {
//         throw new Error("Something went wrong!");
//       }
//       const resData = await response.json();

//       dispatch({
//         type: POST_INCIDENT_REPORT_DATA,
//         reportArray: resData.incidentReports,
//       });
//     } catch (err) {
//       throw err;
//     }
//   };
// };

// export const postMobileReportData = (formData) => {
//   return async (dispatch) => {
//     const userData = await AsyncStorage.getItem("userData");
//     const transformedData = JSON.parse(userData);
//     const { token, type } = transformedData;
//     try {
//       const response = await fetch(
//         `https://mcrsuite.tk/api/Mobile-Patrol-Report`,
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           body: formData,
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Something went wrong!");
//       }
//       const resData = await response.json();

//       dispatch({
//         type: POST_MOBILE_REPORT_DATA,
//         reportArray: resData.mobileReports,
//       });
//     } catch (err) {
//       throw err;
//     }
//   };
// };

// export const postSiteVisitReportData = (formData) => {
//   return async (dispatch) => {
//     const userData = await AsyncStorage.getItem("userData");
//     const transformedData = JSON.parse(userData);
//     const { token, type } = transformedData;
//     try {
//       const response = await fetch(
//         `https://mcrsuite.tk/api/Site-Visit-Reports`,
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           body: formData,
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Something went wrong!");
//       }
//       const resData = await response.json();

//       dispatch({
//         type: POST_SITE_VISIT_REPORT_DATA,
//         reportArray: resData.siteVisitReports,
//       });
//     } catch (err) {
//       throw err;
//     }
//   };
// };
