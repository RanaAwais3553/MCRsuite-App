import {
  AUTHENTICATE,
  SET_DID_TRY_AL,
  CLEAR_AUTH_STORE,
  LOGOUT,
} from "../action/authAction";

const initialState = {
  id: null,
  token: null,
  type: null,
  full_name: "",
  email: "",
  photo: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        id: action.id,
        type: action.userType,
        token: action.token,
        full_name: action.full_name,
        email: action.email,
        photo: action.photo,
      };
    case SET_DID_TRY_AL:
      return {
        ...state,
        didTryAutoLogin: true,
      };
    case CLEAR_AUTH_STORE:
      return initialState;
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
