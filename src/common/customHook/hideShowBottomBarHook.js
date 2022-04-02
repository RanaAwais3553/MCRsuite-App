import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  hideOrShowBottomTabBarAction,
  showBottomTabBarAction,
} from "../../store/action/hideOrShowBottomTabBarAction";
import { scanResponse } from "../../store/action/scanResponseAction";
const hideShowBottomBarHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideOrShowBottomTabBarAction());
    return () => {
      console.log("cleanup function called!...");
      dispatch(showBottomTabBarAction());
    };
  }, [dispatch]);
};
export default hideShowBottomBarHook;
