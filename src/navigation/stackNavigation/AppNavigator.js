import React, { useEffect } from "react";
import { LogBox } from "react-native";
import MyStack from "./LoginStackNavigation";
import MyTabs from "../BottomTabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import StartupScreen from "../../screens/startupScreen/StartupScreen";
const AppNavigator = (props) => {
  LogBox.ignoreLogs(["new NativeEventEmitter"]); // Ignore log notification by message
  const isAuth = useSelector((state) => !!state.auth.token);
  const { email, id, type, full_name } = useSelector((state) => state.auth);
  console.log("name and email is:!...", email, type, full_name);
  // console.log("Token in app navigator is:!...", id, isAuth);
  const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin);
  return (
    <NavigationContainer independent={true}>
      {isAuth && <MyTabs />}
      {!isAuth && <MyStack />}
      {!isAuth && !didTryAutoLogin && <StartupScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
