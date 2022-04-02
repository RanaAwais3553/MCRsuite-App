import React, { useState, useEffect } from "react";
import { View, StyleSheet, Animated, Dimensions, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  showBottomTabBarAction,
  hideOrShowBottomTabBarAction,
} from "../../../store/action/hideOrShowBottomTabBarAction";
import SiteVisitAnimatedReportFlatList from "../../../common/component/organisms/report/animatedReportList/siteVisite/SiteVisitAnimatedReportFlatList";
const SiteVisitReportList = ({ route, navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideOrShowBottomTabBarAction());
    return () => {
      dispatch(showBottomTabBarAction());
    };
  }, [dispatch]);

  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <SiteVisitAnimatedReportFlatList navigation={navigation} route={route} />
    </View>
  );
};
export default SiteVisitReportList;
