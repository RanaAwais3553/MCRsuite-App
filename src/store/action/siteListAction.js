import apiClient from "../../../config/axios";
import ApiUrls from "../../../config/apiUrls";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const FETCH_SITE_LIST_DATA = "FETCH_SITE_LIST_DATA";
export const CLEAR_SITE_LIST_DATA = "CLEAR_SITE_LIST_DATA";

export const clearSiteListData = () => {
  return { type: CLEAR_SITE_LIST_DATA };
};
export const fetchSiteListData = () => {
  return async (dispatch) => {
    try {
      let response = await apiClient().get(ApiUrls.fetchSites);
      if (!response.status == 200) {
        console.log("daily report error is:!...", response);
        throw new Error(response.status);
      }
      dispatch({
        type: FETCH_SITE_LIST_DATA,
        payload: response.data.sites,
      });
    } catch (err) {
      throw err;
    }
  };
};
