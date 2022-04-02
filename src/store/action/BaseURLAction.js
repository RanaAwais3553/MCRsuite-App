// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// export const BASE_URL_REQUEST = "BASE_URL_REQUEST";

// export const fetchBaseURL = () => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch(`https://mcrsuite.com/api/base-url`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       if (!response.ok) {
//         console.log("Status Code:!...", response);
//         throw new Error("Network Request Failed!");
//       }
//       const resData = await response.json();
//       console.log("BaseURL is:!...", resData);
//       dispatch({
//         type: BASE_URL_REQUEST,
//         payload: resData.url,
//       });
//       saveDataToStorage(resData.url);
//     } catch (err) {
//       throw err;
//     }
//   };
// };
// const saveDataToStorage = (url) => {
//   AsyncStorage.setItem(
//     "baseURL",
//     JSON.stringify({
//       urls: url,
//     })
//   );
// };
