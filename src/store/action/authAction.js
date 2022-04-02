import AsyncStorage from '@react-native-async-storage/async-storage';
export const LOGOUT = 'LOGOUT';
export const CLEAR_AUTH_STORE = 'CLEAR_AUTH_STORE';
export const AUTHENTICATE = 'AUTHENTICATE';
export const SET_DID_TRY_AL = 'SET_DID_TRY_AL';
let timer;

export const setDidTryAL = () => {
  return {type: SET_DID_TRY_AL};
};
export const clearAuthStore = () => {
  return {type: CLEAR_AUTH_STORE};
};
export const authenticate = (id, type, token, username, email, photo) => {
  return dispatch => {
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

export const login = userData => {
  console.log('userData is:!...', userData);
  return async dispatch => {
    const response = await fetch(`https://mcrsuite.com/api/authenticateUser`, {
      method: 'POST',
      body: userData,
    });

    if (!response.ok) {
      const errorResData = await response.json();
      const message = errorResData.errors[0];
      throw new Error(message);
    }

    const resData = await response.json();
    dispatch(
      authenticate(
        resData.id,
        resData.role_id,
        resData.token,
        resData.username,
        resData.email,
        resData.photo,
      ),
    );
    saveDataToStorage(
      resData.id,
      resData.role_id,
      resData.token,
      resData.username,
      resData.email,
      resData.photo,
    );
  };
};
export const logOut = () => {
  return async dispatch => {
    const userData = await AsyncStorage.getItem('userData');
    const transformedData = JSON.parse(userData);
    const {token} = transformedData;
    const response = await fetch(`https://mcrsuite.com/api/logout-user`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const errorResData = await response.json();
      const message = errorResData.errors[0];
      throw new Error(message);
    } else {
      AsyncStorage.removeItem('userData');
      dispatch({type: LOGOUT});
    }
  };
};
const saveDataToStorage = (id, type, role_id, username, email, photo) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      id: id,
      type: type,
      token: role_id,
      full_name: username,
      email: email,
      photo: photo,
    }),
  );
};
