import React, { useState, useEffect } from "react";
import { View, StyleSheet, Animated, Dimensions, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  showBottomTabBarAction,
  hideOrShowBottomTabBarAction,
} from "../../../store/action/hideOrShowBottomTabBarAction";
import IncidentAnimatedReportFlatList from "../../../common/component/organisms/report/animatedReportList/incidentReport/IncidentAnimatedReportFlatList";
const IncedentReportList = ({ route, navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideOrShowBottomTabBarAction());
    return () => {
      dispatch(showBottomTabBarAction());
    };
  }, [dispatch]);
  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <IncidentAnimatedReportFlatList navigation={navigation} route={route} />
    </View>
  );
};
export default IncedentReportList;
