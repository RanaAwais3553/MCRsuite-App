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
import apiClient from "../../../config/axios";
import ApiUrls from "../../../config/apiUrls";
import AsyncStorageService from "../../../services/storage-service";
import makeFormData from "../../../utils/makeFormData";

axios.defaults.timeout === 5000;

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

// **************************************************************   GET Request functions start

export const fetchDailyInceptionReportData = () => {
  return async (dispatch) => {
    await dispatch(fetchSiteListData());
    try {
      let response = await apiClient().get(`${ApiUrls.fetchDailyReports}`);
      if (!response.status == 200) {
        console.log("daily report error is:!...", response);
        throw new Error(response.status);
      }
      dispatch({
        type: FETCH_DAILY_INCEPECTION_REPORT_DATA,
        reportArray: response.data.inspectionReports,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const fetchIncidentReportData = () => {
  return async (dispatch) => {
    await dispatch(fetchSiteListData());
    try {
      let response = await apiClient().get(`${ApiUrls.fetchIncidentReport}`);
      if (!response.status == 200) {
        throw new Error(response.status);
      }
      dispatch({
        type: FETCH_INCIDENT_REPORT_DATA,
        reportArray: response.data.incidentReports,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const fetchMobileReportData = () => {
  return async (dispatch) => {
    await dispatch(fetchSiteListData());
    try {
      let response = await apiClient().get(`${ApiUrls.fetchMobileReports}`);
      if (!response.status == 200) {
        throw new Error(response.status);
      }
      dispatch({
        type: FETCH_MOBILE_REPORT_DATA,
        reportArray: response.data.mobileReports,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const fetchSiteVisitReportData = () => {
  return async (dispatch) => {
    await dispatch(fetchSiteListData());
    try {
      let response = await apiClient().get(`${ApiUrls.fetchSiteVisit}`);
      if (!response.status == 200) {
        throw new Error(response.status);
      }
      dispatch({
        type: FETCH_SITE_VISIT_REPORT_DATA,
        reportArray: response.data.siteVisitReports,
      });
    } catch (err) {
      throw err;
    }
  };
};

// **************************************************************   POST Request functions start

export const postDailyInceptionReportData = (formData, update, id) => {
  console.log("post daily inspection report data is:!...", formData);
  const reportObject = makeFormData(formData, update);
  return async (dispatch) => {
    dispatch({ type: POST_DAILY_REPORT_REQUEST });
    try {
      let response = !!update
        ? await apiClient().put(`${ApiUrls.postReports}/${id}`, reportObject)
        : await apiClient().post(`${ApiUrls.postReports}`, reportObject);
      if (!response.status == 200) {
        throw new Error(response.status);
      }
      dispatch(fetchSiteListData());
      dispatch(fetchDailyInceptionReportData());
      dispatch({
        type: POST_DAILY_INCEPECTION_REPORT_SUCCESS,
        success: response.data.success[0],
      });
    } catch (err) {
      dispatch({
        type: POST_DAILY_REPORT_FAILED,
        error: err.response.data.errors[0]
          ? err.response.data.errors[0]
          : "Server not respond",
      });
    }
  };
};

export const postIncidentReportData = (formData, update, id) => {
  console.log("Post Incident Report Data", formData);
  return async (dispatch) => {
    dispatch({ type: POST_DAILY_REPORT_REQUEST });
    try {
      let response = !!update
        ? await apiClient().put(`${ApiUrls.postReports}/${id}`, formData)
        : await apiClient().post(`${ApiUrls.postReports}`, formData);
      if (!response.status == 200) {
        throw new Error(response.status);
      }
      console.log(
        "response is &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&",
        response.data
      );
      dispatch(fetchSiteListData());
      dispatch(fetchIncidentReportData());
      dispatch({
        type: POST_INCIDENT_REPORT_SUCCESS,
        success: response.data.success[0],
      });
    } catch (err) {
      dispatch({
        type: POST_DAILY_REPORT_FAILED,
        error: "Server not respond",
      });
      console.log("error is", err);
    }
  };
};
export const postSiteVisitReportData = (formData, update, id) => {
  console.log("site visit report data", formData);
  return async (dispatch) => {
    dispatch({ type: POST_DAILY_REPORT_REQUEST });
    try {
      let response = !!update
        ? await apiClient().put(`${ApiUrls.postReports}/${id}`, formData)
        : await apiClient().post(`${ApiUrls.postReports}`, formData);
      if (!response.status == 200) {
        throw new Error(response.status);
      }
      dispatch(fetchSiteListData());
      dispatch(fetchSiteVisitReportData());
      dispatch({
        type: POST_SITE_VISST_REPORT_SUCCESS,
        success: response.data.success[0],
      });
    } catch (err) {
      dispatch({
        type: POST_DAILY_REPORT_FAILED,
        error: err.response.data.errors[0]
          ? err.response.data.errors[0]
          : "Server not respond",
      });
    }
  };
};
export const postMobileReportData = (formData, update, id) => {
  return async (dispatch) => {
    dispatch({ type: POST_DAILY_REPORT_REQUEST });

    try {
      let response = !!update
        ? await apiClient().put(`${ApiUrls.postReports}/${id}`, formData)
        : await apiClient().post(`${ApiUrls.postReports}`, formData);
      if (!response.status == 200) {
        throw new Error(response.status);
      }
      dispatch(fetchSiteListData());
      dispatch(fetchMobileReportData());
      dispatch({
        type: POST_MOBILE_REPORT_SUCCESS,
        success: response.data.success[0],
      });
    } catch (err) {
      dispatch({
        type: POST_DAILY_REPORT_FAILED,
        error: err.response.data.errors[0]
          ? err.response.data.errors[0]
          : "Server not respond",
      });
    }
  };
};

// **************************************************************   DELETE Request functions start

export const deleteDailyInceptionReport = (id, type) => {
  // console.log("inspectionReport report form data:!...");
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token } = transformedData;
    try {
      dispatch({ type: POST_DAILY_REPORT_REQUEST });
      let response = await apiClient().delete(
        `${ApiUrls.deleteReports}/${id}?type=inspectionReport`
      );
      if (!response.status == 200) {
        const errormessage = response.data["errors"];
        console.log("error message is:!...", errormessage[0]);
        throw new Error(errormessage[0]);
      }

      await dispatch(fetchDailyInceptionReportData());
      const resmessage = response.data["success"];
      dispatch({
        type: DELETE_DAILY_REPORT_SUCCESS,
        success: resmessage[0],
      });
    } catch (err) {
      dispatch({
        type: POST_DAILY_REPORT_FAILED,
        error: err.message,
      });
    }
  };
};

export const deleteIncidentReport = (id) => {
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token } = transformedData;
    try {
      dispatch({ type: POST_DAILY_REPORT_REQUEST });

      let response = await apiClient().delete(
        `${ApiUrls.deleteReports}/${id}?type=incidentReport`
      );
      if (!response.status == 200) {
        const errormessage = response.data["errors"];
        console.log("error message is:!...", errormessage[0]);
        throw new Error(errormessage[0]);
      }
      await dispatch(fetchIncidentReportData());
      const resmessage = response.data["success"];
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
    }
  };
};

export const deleteSiteVisitReport = (id) => {
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token } = transformedData;
    try {
      dispatch({ type: POST_DAILY_REPORT_REQUEST });

      let response = await apiClient().delete(
        `${ApiUrls.deleteReports}/${id}?type=siteVisitReport`
      );
      if (!response.status == 200) {
        const errormessage = response.data["errors"];
        throw new Error(errormessage[0]);
      }

      await dispatch(fetchSiteVisitReportData());
      const resmessage = response.data["success"];
      dispatch({
        type: DELETE_DAILY_REPORT_SUCCESS,
        success: resmessage[0],
      });
    } catch (err) {
      dispatch({
        type: POST_DAILY_REPORT_FAILED,
        error: err.message,
      });
    }
  };
};

export const deleteMobileReport = (id) => {
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token } = transformedData;
    try {
      dispatch({ type: POST_DAILY_REPORT_REQUEST });

      let response = await apiClient().delete(
        `${ApiUrls.deleteReports}/${id}?type=mobileReports`
      );
      if (!response.status == 200) {
        const errormessage = response.data["errors"];
        console.log("error message is:!...", errormessage[0]);
        throw new Error(errormessage[0]);
      }

      await dispatch(fetchMobileReportData());
      const resmessage = response.data["success"];
      dispatch({
        type: DELETE_DAILY_REPORT_SUCCESS,
        success: resmessage[0],
      });
    } catch (err) {
      dispatch({
        type: POST_DAILY_REPORT_FAILED,
        error: err.message,
      });
    }
  };
};
