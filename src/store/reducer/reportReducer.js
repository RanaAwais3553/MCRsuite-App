import {
  FETCH_DAILY_INCEPECTION_REPORT_DATA,
  FETCH_MOBILE_REPORT_DATA,
  FETCH_INCIDENT_REPORT_DATA,
  FETCH_SITE_VISIT_REPORT_DATA,
  POST_DAILY_INCEPECTION_REPORT_SUCCESS,
  POST_SITE_VISST_REPORT_SUCCESS,
  POST_INCIDENT_REPORT_SUCCESS,
  POST_MOBILE_REPORT_SUCCESS,
  SET_UPDATE_FORM_DATA,
  CLEAR_UPDATE_FORM_DATA,
  DELETE_DAILY_REPORT_SUCCESS,
  CLEAR_REPORT_STORE_DATA,
  POST_INCIDENT_REPORT_DATA,
  POST_SITE_VISIT_REPORT_DATA,
  POST_DAILY_REPORT_REQUEST,
  POST_DAILY_REPORT_FAILED,
  INITIALIZE_STATE,
} from "../action/reportAction";
const initialState = {
  dailyIncpectionReportArray: [],
  incidentReportArray: [],
  mobileReportArray: [],
  siteVisitReportArray: [],
  updateFormObj: null,
  isLoading: false,
  error: "",
  success: "",
  deletesuccess: "",
  deleteError: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_UPDATE_FORM_DATA: {
      return {
        updateFormObj: null,
        dailyIncpectionReportArray: [...state.dailyIncpectionReportArray],
        incidentReportArray: [...state.incidentReportArray],
        mobileReportArray: [...state.mobileReportArray],
        siteVisitReportArray: [...state.siteVisitReportArray],
        isLoading: false,
        error: "",
        success: "",
        deletesuccess: "",
        deleteError: "",
      };
    }
    case SET_UPDATE_FORM_DATA:
      return {
        updateFormObj: action.payload,
        dailyIncpectionReportArray: [...state.dailyIncpectionReportArray],
        incidentReportArray: [...state.incidentReportArray],
        mobileReportArray: [...state.mobileReportArray],
        siteVisitReportArray: [...state.siteVisitReportArray],
        isLoading: false,
        error: "",
        success: "",
      };
    case FETCH_DAILY_INCEPECTION_REPORT_DATA:
      return {
        dailyIncpectionReportArray: action.reportArray,
        incidentReportArray: [...state.incidentReportArray],
        mobileReportArray: [...state.mobileReportArray],
        siteVisitReportArray: [...state.siteVisitReportArray],
      };
    case FETCH_INCIDENT_REPORT_DATA:
      return {
        incidentReportArray: action.reportArray,
        dailyIncpectionReportArray: [...state.dailyIncpectionReportArray],
        mobileReportArray: [...state.mobileReportArray],
        siteVisitReportArray: [...state.siteVisitReportArray],
      };
    case FETCH_MOBILE_REPORT_DATA:
      return {
        mobileReportArray: action.reportArray,
        dailyIncpectionReportArray: [...state.dailyIncpectionReportArray],
        incidentReportArray: [...state.incidentReportArray],
        siteVisitReportArray: [...state.siteVisitReportArray],
      };
    case FETCH_SITE_VISIT_REPORT_DATA:
      return {
        siteVisitReportArray: action.reportArray,
        dailyIncpectionReportArray: [...state.dailyIncpectionReportArray],
        incidentReportArray: [...state.incidentReportArray],
        mobileReportArray: [...state.mobileReportArray],
      };
    case POST_DAILY_REPORT_REQUEST:
      return {
        isLoading: true,
        deletesuccess: "",
        deleteError: "",
        error: "",
        success: "",
        dailyIncpectionReportArray: [...state.dailyIncpectionReportArray],
        incidentReportArray: [...state.incidentReportArray],
        mobileReportArray: [...state.mobileReportArray],
        siteVisitReportArray: [...state.siteVisitReportArray],
      };
    case POST_DAILY_REPORT_FAILED:
      return {
        error: action.error,
        isLoading: false,
        deletesuccess: "",
        deleteError: "",
        success: "",
        dailyIncpectionReportArray: [...state.dailyIncpectionReportArray],
        incidentReportArray: [...state.incidentReportArray],
        mobileReportArray: [...state.mobileReportArray],
        siteVisitReportArray: [...state.siteVisitReportArray],
      };
    case POST_DAILY_INCEPECTION_REPORT_SUCCESS: {
      // action.reportForm.id =  action.id;
      return {
        success: action.success,
        isLoading: false,
        deletesuccess: "",
        deleteError: "",
        error: "",
        dailyIncpectionReportArray: [
          ...state.dailyIncpectionReportArray,
          // action.reportForm,
        ],
        incidentReportArray: [...state.incidentReportArray],
        mobileReportArray: [...state.mobileReportArray],
        siteVisitReportArray: [...state.siteVisitReportArray],
      };
    }
    case POST_INCIDENT_REPORT_SUCCESS: {
      // action.reportForm.id = action.id;
      return {
        success: action.success,
        isLoading: false,
        deletesuccess: "",
        deleteError: "",
        error: "",
        incidentReportArray: [...state.incidentReportArray], // action.reportForm],
        dailyIncpectionReportArray: [...state.dailyIncpectionReportArray],
        mobileReportArray: [...state.mobileReportArray],
        siteVisitReportArray: [...state.siteVisitReportArray],
      };
    }
    case POST_SITE_VISST_REPORT_SUCCESS: {
      // action.reportForm.id = action.id;
      return {
        success: action.success,
        isLoading: false,
        deletesuccess: "",
        deleteError: "",
        error: "",
        siteVisitReportArray: [
          ...state.siteVisitReportArray,
          //    action.reportForm,
        ],
        incidentReportArray: [...state.incidentReportArray],
        mobileReportArray: [...state.mobileReportArray],
        dailyIncpectionReportArray: [...state.dailyIncpectionReportArray],
      };
    }
    case POST_MOBILE_REPORT_SUCCESS: {
      // action.reportForm.id = action.id;

      return {
        success: action.success,
        deletesuccess: "",
        deleteError: "",
        isLoading: false,
        error: "",
        mobileReportArray: [...state.mobileReportArray], // action.reportForm],
        incidentReportArray: [...state.incidentReportArray],
        siteVisitReportArray: [...state.siteVisitReportArray],
        dailyIncpectionReportArray: [...state.dailyIncpectionReportArray],
      };
    }
    case DELETE_DAILY_REPORT_SUCCESS:
      return {
        deletesuccess: action.success,
        isLoading: false,
        success: "",
        deleteError: "",
        error: "",
        mobileReportArray: [...state.mobileReportArray],
        incidentReportArray: [...state.incidentReportArray],
        siteVisitReportArray: [...state.siteVisitReportArray],
        dailyIncpectionReportArray: [...state.dailyIncpectionReportArray],
      };
    case INITIALIZE_STATE:
      return {
        isLoading: false,
        deleteError: "",
        error: "",
        success: "",
        dailyIncpectionReportArray: [...state.dailyIncpectionReportArray],
        incidentReportArray: [...state.incidentReportArray],
        mobileReportArray: [...state.mobileReportArray],
        siteVisitReportArray: [...state.siteVisitReportArray],
      };
    case CLEAR_REPORT_STORE_DATA:
      return {
        dailyIncpectionReportArray: [],
        incidentReportArray: [],
        mobileReportArray: [],
        siteVisitReportArray: [],
        updateFormObj: null,
        isLoading: false,
        error: "",
        success: "",
        deletesuccess: "",
        deleteError: "",
      };
    default:
      return state;
  }
};
