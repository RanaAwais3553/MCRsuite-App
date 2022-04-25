export const CREATE_EVENT_FAILED = "CREATE_EVENT_FAILED";
export const CREATE_EVENT_REQUEST = "CREATE_EVENT_REQUEST";
export const CREATE_EVENT_SUCCESS = "CREATE_EVENT_SUCCESS";
export const CLEAR_EVENTS = "CLEAR_EVENTS";
import { fetchSiteEvents } from "../action/fetchSiteEvents";
import apiClient from "../../../config/axios";
import ApiUrls from "../../../config/apiUrls";
import makeFormData from "../../../utils/makeFormData";
export const clearCreateEventState = () => {
  return { type: CLEAR_EVENTS };
};
export const createEventHandlerAction = (formData, id) => {
  const userObject = makeFormData(formData);
  return async (dispatch) => {
    try {
      dispatch({ type: CREATE_EVENT_REQUEST });
      let response = await apiClient().post(ApiUrls.createEvents, userObject);
      if (!response.status == 200) {
        throw new Error(response.status);
      }
      dispatch(fetchSiteEvents(id));
      dispatch({
        type: CREATE_EVENT_SUCCESS,
        payload: response?.data.success[0],
      });
    } catch (err) {
      dispatch({
        type: CREATE_EVENT_FAILED,
        payload: err.response.data.errors[0]
          ? err.response.data.errors[0]
          : "Server not respond",
      });
      console.log("error message is:!...", err);
    }
  };
};
