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

export default function SitesView({ route }) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("cleanup function called!...");
    dispatch(hideOrShowBottomTabBarAction());
  }, [dispatch]);
  const { name, email, address, sitesTimeSlotsArray } = route.params;
  return (
    <SitesViewOrgan
      name={name}
      email={email}
      address={address}
      sitesTimeSlotsArray={sitesTimeSlotsArray}
    />
  );
}
