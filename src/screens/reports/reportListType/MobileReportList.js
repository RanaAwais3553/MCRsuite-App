import React, { useState, useEffect } from "react";
import { View, StyleSheet, Animated, Dimensions, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  showBottomTabBarAction,
  hideOrShowBottomTabBarAction,
} from "../../../store/action/hideOrShowBottomTabBarAction";
import MobileAnimatedReportFlatList from "../../../common/component/organisms/report/animatedReportList/mobileReport/MobileAnimatedReportFlatList";
const MobileReportList = ({ route, navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideOrShowBottomTabBarAction());
    return () => {
      dispatch(showBottomTabBarAction());
    };
  }, [dispatch]);

  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <MobileAnimatedReportFlatList navigation={navigation} route={route} />
    </View>
  );
};
export default MobileReportList;
