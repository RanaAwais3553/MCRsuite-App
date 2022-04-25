import AsyncStorage from "@react-native-async-storage/async-storage";
export const SCAN_RESPONSE = "SCAN_RESPONSE";
export const CLEAR_SCAN_DATA = "CLEAR_SCAN_DATA";

export const clearScanResponseData = () => {
  return { type: CLEAR_SCAN_DATA };
};
export const scanResponse = (
  scanData,
  description,
  status,
  currentDateTime,
  long,
  lat
) => {
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token, type } = transformedData;
    let formData = new FormData();
    formData.append("report", description);
    formData.append("type", "Check In");
    formData.append("attendance_at", currentDateTime);
    formData.append("longitude", long);
    formData.append("latitude", lat);
    formData.append("point_number", scanData);
    console.log(
      "Attandence Scan API Action is:!.....",
      status,
      description,
      currentDateTime,
      long,
      lat,
      scanData
    );
    try {
      const response = await fetch(`https://mcrsuite.com/api/userattendance`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        const errorResData = await response.json();
        const errormessage = errorResData["errors"];
        throw new Error(errormessage[0]);
      }
      const resData = await response.json();
      const successMessage = resData["success"];
      console.log("Success Message is:!...", successMessage[0]);
      dispatch({
        type: SCAN_RESPONSE,
        payload: successMessage[0],
      });
    } catch (err) {
      console.log("error in scan API is:!....", err);
      throw err;
    }
  };
};
