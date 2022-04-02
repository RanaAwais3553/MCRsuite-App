import React, { useState, useEffect } from "react";
import { View, StyleSheet, Animated, Dimensions } from "react-native";
import { useDispatch } from "react-redux";
import AnimatedSitesFlatList from "../../common/component/organisms/sitesView/AnimatedSitesFlatList";
import {
  showBottomTabBarAction,
  hideOrShowBottomTabBarAction,
} from "../../store/action/hideOrShowBottomTabBarAction";

const SitesList = ({ navigation }) => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log("cleanup function called!...");
  //   dispatch(hideOrShowBottomTabBarAction());
  // }, [dispatch]);
  useEffect(() => {
    dispatch(hideOrShowBottomTabBarAction());
    return () => {
      dispatch(showBottomTabBarAction());
    };
  }, [dispatch]);
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <AnimatedSitesFlatList navigation={navigation} />
    </View>
  );
};
export default SitesList;
