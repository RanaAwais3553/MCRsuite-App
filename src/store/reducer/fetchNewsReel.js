import {
  FETCH_NEWS_REEL_DATA,
  CLEAR_NEWS_REEL_DATA,
} from "../action/fetchNewsReel";
const initialState = {
  newsReelArray: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REEL_DATA:
      return {
        newsReelArray: action.payload,
      };
    case CLEAR_NEWS_REEL_DATA:
      return {
        newsReelArray: [],
      };
    default:
      return state;
  }
};
