import React, { useEffect, useState } from "react";
import SitesViewOrgan from "../../common/component/organisms/sitesView/SitesViewOrgan";
import { useDispatch } from "react-redux";
import {
  hideOrShowBottomTabBarAction,
  showBottomTabBarAction,
} from "../../store/action/hideOrShowBottomTabBarAction";
import { Alert } from "react-native";
import ActivityIndicatorComponent from "../../common/component/atom/ActivityIndicatorComponent";
import { fetchSiteListData } from "../../store/action/siteListAction";
import { useSelector } from "react-redux";
import { fetchSiteEvents } from "../../store/action/fetchSiteEvents";

export default function SitesView({ route, navigation }) {
  const { name, email, address, sitesTimeSlotsArray, id } = route.params;
  console.log("id is:!.....", id);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const siteEvent = async () => {
  //     setError(null);
  //     setIsLoading(true);
  //     try {
  //       await dispatch(fetchSiteEvents(id));
  //       setIsLoading(false);
  //     } catch (err) {
  //       setError(err.message);
  //       setIsLoading(false);
  //     }
  //   };
  //   siteEvent();
  // }, []);
  useEffect(() => {
    console.log("hide show bottom tab bar action called &&&&&&&&&&&&&&&&&&&&");
    dispatch(hideOrShowBottomTabBarAction());
    return () => {
      dispatch(showBottomTabBarAction());
    };
  }, [dispatch]);
  return (
    <SitesViewOrgan
      name={name}
      email={email}
      address={address}
      sitesTimeSlotsArray={sitesTimeSlotsArray}
      navigation={navigation}
      id={id}
    />
  );
}
