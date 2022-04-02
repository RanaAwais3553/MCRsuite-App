import {
  POST_DAILY_INCEPECTION_REPORT_SUCCESS,
  POST_MOBILE_REPORT_DATA,
  POST_INCIDENT_REPORT_DATA,
  POST_SITE_VISIT_REPORT_DATA,
  POST_DAILY_REPORT_REQUEST,
  POST_DAILY_REPORT_FAILED,
  INITIALIZE_STATE,
} from "../action/postReportAction";
const initialState = {
  isLoading: false,
  error: "",
  success: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_DAILY_REPORT_REQUEST:
      return {
        isLoading: true,
        error: null,
        success: null,
      };
    case POST_DAILY_REPORT_FAILED:
      return {
        error: action.error,
        isLoading: false,
        success: null,
      };
    case POST_DAILY_INCEPECTION_REPORT_SUCCESS:
      return {
        error: null,
        isLoading: false,
        success: action.success,
      };
    case INITIALIZE_STATE:
      return {
        isLoading: false,
        error: "",
        success: "",
      };
    default:
      return state;
  }
};
