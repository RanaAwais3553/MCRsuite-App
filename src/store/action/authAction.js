import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearNewsReelData } from "../action/fetchNewsReel";
export const LOGOUT = "LOGOUT";
export const CLEAR_AUTH_STORE = "CLEAR_AUTH_STORE";
export const AUTHENTICATE = "AUTHENTICATE";
export const SET_DID_TRY_AL = "SET_DID_TRY_AL";
import apiClient from "../../../config/axios";
import ApiUrls from "../../../config/apiUrls";
import AsyncStorageService from "../../../services/storage-service";
import makeFormData from "../../../utils/makeFormData";
let timer;

export const setDidTryAL = () => {
  return { type: SET_DID_TRY_AL };
};
export const clearAuthStore = () => {
  return { type: CLEAR_AUTH_STORE };
};
export const authenticate = (
  id,
  type,
  token,
  username,
  email,
  photo
  // expiry
) => {
  return (dispatch) => {
    dispatch({
      type: AUTHENTICATE,
      id: id,
      userType: type,
      token: token,
      full_name: username,
      email: email,
      photo: photo,
    });
  };
};

export const login = (userData) => {
  console.log("userData is:!...", userData);
  const userObject = makeFormData(userData);
  return async (dispatch) => {
    let response = await apiClient().post(ApiUrls.login, userObject);

    if (!response.status == 200) {
      console.log("Error Mesage is:!...", response.status);
      throw new Error(message);
    }

    console.log("resData is in Auth Action Login API is:!...", response.data);
    AsyncStorageService.storeObject("userData", response?.data);
    AsyncStorageService.storeString("@auth_token", response?.data?.token);

    dispatch(
      authenticate(
        response.data.id,
        response.data.role_id,
        response.data.token,
        response.data.username,
        response.data.email,
        response.data.photo
      )
    );
  };
};
export const logOut = () => {
  return async (dispatch) => {
    let response = await apiClient().post(ApiUrls.logout);
    if (!response.status == 200) {
      console.log("error in logout is:!...", response);
      dispatch(clearNewsReelData());

      throw new Error(response.status);
    } else {
      dispatch(clearNewsReelData());
      await AsyncStorageService.removeString("@auth_token");
      await AsyncStorageService.removeString("userData");
      dispatch({ type: LOGOUT });
    }
  };
};
