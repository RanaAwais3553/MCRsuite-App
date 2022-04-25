import {
  CREATE_EVENT_FAILED,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  CLEAR_EVENTS,
} from "../action/createEventHandlerAction";
const initialState = {
  loading: false,
  createEventError: null,
  success: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT_REQUEST:
      return {
        loading: true,
        createEventError: null,
        success: null,
      };
    case CREATE_EVENT_SUCCESS:
      return {
        loading: false,
        createEventError: null,
        success: action.payload,
      };
    case CREATE_EVENT_FAILED:
      return {
        loading: false,
        createEventError: action.payload,
        success: null,
      };
    case CLEAR_EVENTS:
      return {
        loading: false,
        createEventError: null,
        success: null,
      };
    default:
      return state;
  }
};
