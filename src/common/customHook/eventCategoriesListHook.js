import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const eventCategoriesListHook = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState();
  useEffect(() => {
    const categoriesList = async () => {
      setError(null);
      setIsLoading(true);
      const userData = await AsyncStorage.getItem("userData");
      const transformedData = JSON.parse(userData);
      const { token, type } = transformedData;
      let url = "https://mcrsuite.tk/api/api-events/create";
      axios({
        method: "GET",
        url,
        timeout: 5000,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((result) => {
          setData(result.data.categories);
          setIsLoading(false);
          console.log("back end response data is:...", result.data.categories);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
          console.log("error message is:!...", err);
        });
    };
    categoriesList();
  }, []);
  return { isLoading, error, data };
};
export default eventCategoriesListHook;
