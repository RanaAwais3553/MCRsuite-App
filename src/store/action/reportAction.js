import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { fetchSiteListData } from "./siteListAction";
export const FETCH_DAILY_INCEPECTION_REPORT_DATA =
  "FETCH_DAILY_INCEPECTION_REPORT_DATA";
export const FETCH_MOBILE_REPORT_DATA = "FETCH_MOBILE_REPORT_DATA";
export const FETCH_INCIDENT_REPORT_DATA = "FETCH_INCIDENT_REPORT_DATA";
export const FETCH_SITE_VISIT_REPORT_DATA = "FETCH_SITE_VISIT_REPORT_DATA";

export const POST_DAILY_INCEPECTION_REPORT_SUCCESS =
  "POST_DAILY_INCEPECTION_REPORT_SUCCESS";
export const POST_MOBILE_REPORT_SUCCESS = "POST_MOBILE_REPORT_SUCCESS";
export const POST_INCIDENT_REPORT_SUCCESS = "POST_INCIDENT_REPORT_SUCCESS";
export const POST_SITE_VISST_REPORT_SUCCESS = "POST_SITE_VISST_REPORT_SUCCESS";

export const DELETE_DAILY_REPORT_SUCCESS = "DELETE_DAILY_REPORT_SUCCESS";
export const DELETE_MOBILE_REPORT_DATA = "DELETE_MOBILE_REPORT_DATA";
export const DELETE_INCIDENT_REPORT_DATA = "DELETE_INCIDENT_REPORT_DATA";
export const DELETE_SITE_VISIT_REPORT_DATA = "DELETE_SITE_VISIT_REPORT_DATA";

export const POST_DAILY_REPORT_REQUEST = "POST_DAILY_REPORT_REQUEST";
export const POST_DAILY_REPORT_FAILED = "POST_DAILY_REPORT_FAILED";
export const INITIALIZE_STATE = "INITIALIZE_STATE";
// Fetch Report Data Functions
export const SET_UPDATE_FORM_DATA = "SET_UPDATE_FORM_DATA";
export const CLEAR_UPDATE_FORM_DATA = "CLEAR_UPDATE_FORM_DATA";
export const CLEAR_REPORT_STORE_DATA = "CLEAR_REPORT_STORE_DATA";
axios.defaults.timeout === 5000;
// const httpClient = axios.create();
// httpClient.defaults.timeout = 2000;
export const clearUpdateFormData = () => {
  return { type: CLEAR_UPDATE_FORM_DATA };
};
export const setUpdateFormData = (
  id,
  site_id,
  obstruction_frees,
  fire_extinguishers,
  poster_free,
  report_hazard,
  additional_info,
  update
) => {
  const updateFormObj = {
    id,
    site_id,
    obstruction_frees,
    fire_extinguishers,
    poster_free,
    report_hazard,
    additional_info,
    update,
  };
  return { type: SET_UPDATE_FORM_DATA, payload: updateFormObj };
};

export const clearState = () => {
  return { type: INITIALIZE_STATE };
};
export const clearReportsStore = () => {
  return { type: CLEAR_REPORT_STORE_DATA };
};
export const fetchDailyInceptionReportData = () => {
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token, type } = transformedData;
    await dispatch(fetchSiteListData());
    try {
      const response = await fetch(`https://mcrsuite.com/api/api-reports`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        console.log("daily report error is:!...", response);
        throw new Error("Something went wrong!");
      }
      const resData = await response.json();
      // console.log("daily report data", resData);
      dispatch({
        type: FETCH_DAILY_INCEPECTION_REPORT_DATA,
        reportArray: resData.inspectionReports,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const fetchIncidentReportData = () => {
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token, type } = transformedData;
    await dispatch(fetchSiteListData());
    try {
      const response = await fetch(
        `https://mcrsuite.com/api/Incident-Reports`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const resData = await response.json();

      dispatch({
        type: FETCH_INCIDENT_REPORT_DATA,
        reportArray: resData.incidentReports,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const fetchMobileReportData = () => {
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token, type } = transformedData;
    await dispatch(fetchSiteListData());
    try {
      const response = await fetch(
        `https://mcrsuite.com/api/Mobile-Patrol-Report`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const resData = await response.json();

      dispatch({
        type: FETCH_MOBILE_REPORT_DATA,
        reportArray: resData.mobileReports,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const fetchSiteVisitReportData = () => {
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token, type } = transformedData;
    await dispatch(fetchSiteListData());
    try {
      const response = await fetch(
        `https://mcrsuite.com/api/Site-Visit-Reports`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const resData = await response.json();

      dispatch({
        type: FETCH_SITE_VISIT_REPORT_DATA,
        reportArray: resData.siteVisitReports,
      });
    } catch (err) {
      throw err;
    }
  };
};

// post functions start
export const postDailyInceptionReportData = (formData, update, id) => {
  console.log("post daily inspection report data is:!...", formData);
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token, type } = transformedData;

    const url = update
      ? `https://mcrsuite.com/api/api-reports/${id}`
      : `https://mcrsuite.com/api/api-reports`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": update
          ? "application/x-www-form-urlencoded"
          : "form-data",
      },
    };
    console.log("in daily inspectoin report axios");
    dispatch({ type: POST_DAILY_REPORT_REQUEST });
    axios({
      method: update ? "PUT" : "POST",
      url,
      timeout: 5000,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": update
          ? "application/x-www-form-urlencoded"
          : "form-data",
      },
      data: formData, // important
    })
      .then((result) => {
        dispatch(fetchSiteListData());
        dispatch(fetchDailyInceptionReportData());
        dispatch({
          type: POST_DAILY_INCEPECTION_REPORT_SUCCESS,
          success: result.data.success[0],
        });
        console.log("back end response data is:...", result.data.success[0]);
      })
      .catch((err) => {
        dispatch({
          type: POST_DAILY_REPORT_FAILED,
          error: err.response.data.errors[0]
            ? err.response.data.errors[0]
            : "Server not respond",
        });
        console.log("error message is:!...", err);
      });
  };
};

export const postIncidentReportData = (formData, update, id) => {
  console.log("Post Incident Report Data", formData);
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token, type } = transformedData;

    const url = update
      ? `https://mcrsuite.com/api/api-reports/${id}`
      : `https://mcrsuite.com/api/api-reports`;
    dispatch({ type: POST_DAILY_REPORT_REQUEST });
    axios({
      url,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "form-data",
      },
      data: formData, // important
    })
      .then((result) => {
        console.log(
          "Post Incident Report API response",
          result.data.success[0]
        );
        dispatch(fetchSiteListData());
        dispatch(fetchIncidentReportData());
        dispatch({
          type: POST_INCIDENT_REPORT_SUCCESS,
          success: result.data.success[0],
        });
      })
      .catch((err) => {
        console.log("error is:!...", err);
        dispatch({
          type: POST_DAILY_REPORT_FAILED,
          error: "Server not respond",
        });
        console.log("error message is:!...", err);
      });
  };
};
export const postSiteVisitReportData = (formData, update, id) => {
  console.log("site visit report data", formData);
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token, type } = transformedData;

    const url = update
      ? `https://mcrsuite.com/api/api-reports/${id}`
      : `https://mcrsuite.com/api/api-reports`;
    dispatch({ type: POST_DAILY_REPORT_REQUEST });
    axios({
      url,
      method: update ? "PUT" : "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": update
          ? "application/x-www-form-urlencoded"
          : "form-data",
      },
      data: formData, // important
    })
      .then((result) => {
        dispatch(fetchSiteListData());
        dispatch(fetchSiteVisitReportData());
        dispatch({
          type: POST_SITE_VISST_REPORT_SUCCESS,
          success: result.data.success[0],
        });
        console.log("back end response data is:...", result.data.success[0]);
      })
      .catch((err) => {
        dispatch({
          type: POST_DAILY_REPORT_FAILED,
          error: err.response.data.errors[0]
            ? err.response.data.errors[0]
            : "Server not respond",
        });
        console.log("error message is:!...", err);
      });
  };
};
export const postMobileReportData = (formData, update, id) => {
  console.log("post mobile report data is:!...", formData);
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token, type } = transformedData;
    const url = update
      ? `https://mcrsuite.com/api/api-reports/${id}`
      : `https://mcrsuite.com/api/api-reports`;
    dispatch({ type: POST_DAILY_REPORT_REQUEST });
    axios({
      url,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "form-data",
      },
      data: formData, // important
    })
      .then((result) => {
        console.log(
          "result of mobile report post data success is:!.&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",
          result.data.success[0]
        );
        dispatch(fetchSiteListData());
        dispatch(fetchMobileReportData());
        dispatch({
          type: POST_MOBILE_REPORT_SUCCESS,
          success: result.data.success[0],
        });
        console.log(
          "back end response data is:...***************************************************",
          // result.status,
          result.data.success[0]
        );
      })
      .catch((err) => {
        console.log("error message is:!...", err);
        dispatch({
          type: POST_DAILY_REPORT_FAILED,
          error: err.response.data.errors[0]
            ? err.response.data.errors[0]
            : "Server not respond",
        });
      });
  };
};

export const deleteDailyInceptionReport = (id, type) => {
  // console.log("inspectionReport report form data:!...");
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token } = transformedData;
    try {
      dispatch({ type: POST_DAILY_REPORT_REQUEST });
      const response = await fetch(
        `https://mcrsuite.com/api/api-reports/${id}?type=inspectionReport`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        const errorResData = await response.json();
        const errormessage = errorResData["errors"];
        console.log("error message is:!...", errormessage[0]);
        throw new Error(errormessage[0]);
      }
      const resData = await response.json();
      await dispatch(fetchDailyInceptionReportData());
      const resmessage = resData["success"];
      dispatch({
        type: DELETE_DAILY_REPORT_SUCCESS,
        success: resmessage[0],
      });
    } catch (err) {
      dispatch({
        type: POST_DAILY_REPORT_FAILED,
        error: err.message,
      });
      //           throw err;
    }
  };
};

export const deleteIncidentReport = (id) => {
  console.log(
    "incidentReport report form data:!.................................",
    id
  );
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token } = transformedData;
    try {
      dispatch({ type: POST_DAILY_REPORT_REQUEST });
      const response = await fetch(
        `https://mcrsuite.com/api/api-reports/${id}?type=incidentReport`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        const errorResData = await response.json();
        const errormessage = errorResData["errors"];
        console.log("error message is:!...", errormessage[0]);
        throw new Error(errormessage[0]);
      }
      const resData = await response.json();
      console.log("delete incident report error is:", resData);
      await dispatch(fetchIncidentReportData());
      const resmessage = resData["success"];
      dispatch({
        type: DELETE_DAILY_REPORT_SUCCESS,
        success: resmessage[0],
      });
    } catch (err) {
      dispatch({
        type: POST_DAILY_REPORT_FAILED,
        error: err.message,
      });
      console.log("delete incident report error is:", err);
      //           throw err;
    }
  };
};

export const deleteSiteVisitReport = (id) => {
  // console.log("siteVisitReport report form data:!...");
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token } = transformedData;
    try {
      dispatch({ type: POST_DAILY_REPORT_REQUEST });
      const response = await fetch(
        `https://mcrsuite.com/api/api-reports/${id}?type=siteVisitReport`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        const errorResData = await response.json();
        const errormessage = errorResData["errors"];
        throw new Error(errormessage[0]);
      }
      const resData = await response.json();
      await dispatch(fetchSiteVisitReportData());
      const resmessage = resData["success"];
      dispatch({
        type: DELETE_DAILY_REPORT_SUCCESS,
        success: resmessage[0],
      });
    } catch (err) {
      dispatch({
        type: POST_DAILY_REPORT_FAILED,
        error: err.message,
      });
      //           throw err;
    }
  };
};

export const deleteMobileReport = (id) => {
  // console.log("siteVisitReport report form data:!...");
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token } = transformedData;
    try {
      dispatch({ type: POST_DAILY_REPORT_REQUEST });
      const response = await fetch(
        `https://mcrsuite.com/api/api-reports/${id}?type=mobileReports`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        const errorResData = await response.json();
        const errormessage = errorResData["errors"];
        console.log("error message is:!...", errormessage[0]);
        throw new Error(errormessage[0]);
      }
      const resData = await response.json();
      await dispatch(fetchMobileReportData());
      const resmessage = resData["success"];
      dispatch({
        type: DELETE_DAILY_REPORT_SUCCESS,
        success: resmessage[0],
      });
    } catch (err) {
      dispatch({
        type: POST_DAILY_REPORT_FAILED,
        error: err.message,
      });
      //           throw err;
    }
  };
};
