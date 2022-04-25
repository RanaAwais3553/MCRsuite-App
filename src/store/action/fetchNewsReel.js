export const FETCH_NEWS_REEL_DATA = "FETCH_NEWS_REEL_DATA";
export const CLEAR_NEWS_REEL_DATA = "CLEAR_NEWS_REEL_DATA";
import apiClient from "../../../config/axios";
import ApiUrls from "../../../config/apiUrls";

export const clearNewsReelData = () => {
  return { type: CLEAR_NEWS_REEL_DATA };
};
export const fetchNewsReelData = () => {
  return async (dispatch) => {
    try {
      let response = await apiClient().get(ApiUrls.newsReels);
      if (!response.status == 200) {
        console.log("daily report error is:!...", response);
        throw new Error("Something went wrong!");
      }

      dispatch({
        type: FETCH_NEWS_REEL_DATA,
        payload: response?.data?.reels,
      });
    } catch (err) {
      throw err;
    }
  };
};
