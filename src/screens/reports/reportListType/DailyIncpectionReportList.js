import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  showBottomTabBarAction,
  hideOrShowBottomTabBarAction,
} from "../../../store/action/hideOrShowBottomTabBarAction";
import DailyIncpectionAnimatedReportFlatList from "../../../common/component/organisms/report/animatedReportList/dailyIncpection/DailyIncpectionAnimatedReportFlatList";
const DailyIncpectionReportList = ({ route, navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideOrShowBottomTabBarAction());
    console.log("Daily inspection report parent component mounted");
    return () => {
      dispatch(showBottomTabBarAction());
      console.log("Daily inspection report parent component Unmounted");
    };
  }, [dispatch]);
  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <DailyIncpectionAnimatedReportFlatList
        navigation={navigation}
        route={route}
      />
    </View>
  );
};
export default DailyIncpectionReportList;
