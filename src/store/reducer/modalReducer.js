import { SET_SCAN_MODAL_STATE } from "../action/modalAction";
const initialState = {
  modal: true,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SCAN_MODAL_STATE:
      return {
        modal: action.payload,
      };
  }
  return state;
};
