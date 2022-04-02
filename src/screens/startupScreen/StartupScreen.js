import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { setDidTryAL, authenticate } from "../../store/action/authAction";
import ActivityIndicatorComponent from "../../common/component/atom/ActivityIndicatorComponent";

const StartupScreen = (props) => {
  const dispatch = useDispatch();
  //  const isSplash = useSelector((state) => state.isSplash.isSplashScreen);
  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");
      if (!userData) {
        // props.navigation.navigate('Auth');
        dispatch(setDidTryAL());
        return;
      }
      const transformedData = JSON.parse(userData);
      const { id, token, type, full_name, email, photo } = transformedData;
      // const expirationDate = new Date(expiryDate);

      // if (expirationDate <= new Date() || !token) {
      //   // props.navigation.navigate('Auth');
      //   dispatch(setDidTryAL());
      //   return;
      // }

      // const expirationTime = expirationDate.getTime() - new Date().getTime();

      // props.navigation.navigate('Shop');
      dispatch(authenticate(id, type, token, full_name, email, photo));
    };
    tryLogin();
  }, [dispatch]);
  return (
    <View style={styles.screen}>
      <ActivityIndicatorComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#3f5d83",
  },
});

export default StartupScreen;
