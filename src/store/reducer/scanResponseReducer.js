import { SCAN_RESPONSE, CLEAR_SCAN_DATA } from "../action/scanResponseAction";

const initialState = {
  success: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SCAN_RESPONSE:
      return {
        success: action.payload,
      };
    case CLEAR_SCAN_DATA:
      return {
        success: "",
      };
    default:
      return state;
  }
};
