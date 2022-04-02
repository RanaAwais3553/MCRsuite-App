import AsyncStorage from "@react-native-async-storage/async-storage";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const LOADER_START = "LOADER_START";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const CLEAR_RESPONSE_SUCCESS_MESSAGE = "CLEAR_RESPONSE_SUCCESS_MESSAGE";
export const ERROR_LOADER = "ERROR_LOADER";
let timer;

export const clearSuccessResponse = () => {
  return { type: CLEAR_RESPONSE_SUCCESS_MESSAGE };
};
export const loader = () => {
  return { type: LOADER_START };
};
export const errorLoader = () => {
  return { type: ERROR_LOADER };
};

export const updateProfileAction = (formData) => {
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token, type, id, name, email, photo } = transformedData;
    const response = await fetch(`https://mcrsuite.com/api/api-profile`, {
      method: "POST",

      body: formData,
      // json: true,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "form-data",
      },
    });

    if (!response.ok) {
      const errorResData = await response.json();
      console.log(
        "error in update profile action is:!...",
        errorResData.error[0]
      );
      const message = errorResData[1];
      console.log(
        "Error Mesage is in profile action:!...",
        message,
        errorResData
      );
      //  let message = "Some thing went wrong!";
      //  if (errorId === "The email address must be a valid email address.") {
      //   message = "Please Check Email and Event Code!";
      //  } else if (errorId === "Event not found") {
      //     message = "This Event Code is not valid";
      //  }
      throw new Error(message);
    }

    const resData = await response.json();
    console.log("resData is in Auth Action Login API is:!...", resData[1]);
    dispatch({
      type: UPDATE_PROFILE,
      successProfile: resData[1],
    });
    console.log(
      "local storage data in updateProfile Action is::!...",
      type,
      token,
      name,
      email
    );
    saveDataToStorage(id, type, token, name, email, photo);
  };
};

export const updatePasswordAction = (profileData) => {
  console.log("userData is:!...", profileData);
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token, type, id, photo } = transformedData;
    const response = await fetch(`https://mcrsuite.com/api/api-profile/${id}`, {
      method: "PUT",

      body: profileData.toString(),
      json: true,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (!response.ok) {
      console.log("APIs raw Response is:!...", response);
      const errorResData = await response.json();
      console.log("APIs Response in json is:!...", errorResData);
      const errormessage = errorResData["errors"];
      console.log("error message is:!...", errormessage[0], errorResData);
      let message = "Incorrect old password";
      if (errormessage[0] === "Incorrect old password") {
        message =
          "Your Old Password is Incorrect, Please Enter Correct Password";
      } else if (
        errormessage[0] === "The confirm password and password must match."
      ) {
        message = "The Password and Confirm Password must be matched";
      }
      throw new Error(message);
    } else {
      const resData = await response.json();
      console.log(
        "resData is in Auth Action Login API is:!...",
        resData["success"]
      );
      let successmsg = resData["success"];
      dispatch({
        type: UPDATE_PASSWORD,
        success: successmsg[0],
      });
    }
  };
};
const saveDataToStorage = (id, type, token, name, userEmail, photo) => {
  console.log("local storage data is:!...", id, type, token, name, userEmail);
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      id: id,
      type: type,
      token: token,
      full_name: name,
      email: userEmail,
      photo: photo,
    })
  );
};
