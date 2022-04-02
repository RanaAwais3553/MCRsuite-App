import React, { useEffect } from "react";
import { LogBox, View, Image, Tex, Dimensions } from "react-native";
import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHeader";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import {
  showBottomTabBarAction,
  hideOrShowBottomTabBarAction,
} from "../../../../store/action/hideOrShowBottomTabBarAction";
function HomeOrgan(props) {
  LogBox.ignoreLogs(["EventEmitter.removeListener"]);
  LogBox.ignoreAllLogs();
  const navigation = props.navigation;
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused && dispatch(showBottomTabBarAction());
  }, [isFocused]);
  return (
    <View
      style={{
        flex: 0.85,
      }}
    >
      <HomeHeader navigation={navigation} />
      <HomeFooter navigation={navigation} />
    </View>
  );
}

export default HomeOrgan;
