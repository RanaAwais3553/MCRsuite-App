import AsyncStorage from "@react-native-async-storage/async-storage";
export const FETCH_SITE_LIST_DATA = "FETCH_SITE_LIST_DATA";
export const CLEAR_SITE_LIST_DATA = "CLEAR_SITE_LIST_DATA";

export const clearSiteListData = () => {
  return { type: CLEAR_SITE_LIST_DATA };
};
export const fetchSiteListData = () => {
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userData);
    const { token, type } = transformedData;
    try {
      const response = await fetch(`https://mcrsuite.com/api/api-site`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        console.log("daily report error is:!...", response);
        throw new Error("Something went wrong!");
      }
      const resData = await response.json();
      // console.log("site List Data in Action is:!...", resData);
      dispatch({
        type: FETCH_SITE_LIST_DATA,
        payload: resData.sites,
      });
    } catch (err) {
      throw err;
    }
  };
};
