import {
  FETCH_SITE_LIST_DATA,
  CLEAR_SITE_LIST_DATA,
} from "../action/siteListAction";
const initialState = {
  siteListArray: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SITE_LIST_DATA:
      return {
        siteListArray: action.payload,
      };
    case CLEAR_SITE_LIST_DATA:
      return {
        siteListArray: [],
      };
    default:
      return state;
  }
};
