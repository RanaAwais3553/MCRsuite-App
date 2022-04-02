import {
  UPDATE_PASSWORD,
  CLEAR_RESPONSE_SUCCESS_MESSAGE,
  UPDATE_PROFILE,
  LOADER_START,
  ERROR_LOADER,
} from "../action/profileAction";

const initialState = {
  success: null,
  successProfile: null,
  modal: false,
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADER_START:
      return {
        success: null,
        successProfile: null,
        modal: false,
        isLoading: true,
      };
    case ERROR_LOADER:
      return {
        success: null,
        successProfile: null,
        modal: false,
        isLoading: false,
      };
    case UPDATE_PASSWORD:
      return {
        success: action.success,
        modal: true,
      };
    case CLEAR_RESPONSE_SUCCESS_MESSAGE:
      return {
        success: null,
        successProfile: null,
        modal: false,
        isLoading: false,
      };
    case UPDATE_PROFILE:
      return {
        successProfile: action.successProfile,
        modal: true,
        success: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
