import React, { useEffect, useState } from "react";
import { LogBox, View, Image, Platform, Tex, Dimensions } from "react-native";
import HomeOrgan from "../../common/component/organisms/home/Home";
let { width: screenWidth, height: screenHeight } = Dimensions.get("window");
import { useDispatch, useSelector } from "react-redux";
import {
  showBottomTabBarAction,
  hideOrShowBottomTabBarAction,
} from "../../store/action/hideOrShowBottomTabBarAction";
import NfcManager, { NfcTech } from "react-native-nfc-manager";
function Home(props) {
  LogBox.ignoreLogs(["EventEmitter.removeListener"]);
  const navigation = props.navigation;
  const dispatch = useDispatch();
  const [support, setSatus] = useState(false);
  const nfcStatus = useSelector((state) => state.nfc.nfcStatus);
  console.log("nfcStatus in Home screen is:!...", nfcStatus, support);
  Platform.OS == "android" &&
    NfcManager.start()
      .then(() => setSatus(true))
      .catch(() => {
        setSatus(false);
      });

  useEffect(() => {
    console.log("cleanup function called!...", support);
    dispatch(showBottomTabBarAction());
  }, [dispatch]);
  useEffect(() => {
    const nfcReq = async () => {
      //  await NfcManager.isSupported((support)=> setSatus(support));
      console.log("Home Screen useEffect Called!......");
      await NfcManager.requestTechnology(NfcTech.Ndef);
      console.log("Home Screen useEffect Called!......");
    };
    support && Platform.OS == "android" && nfcReq();
    return () => {
      console.log("second");

      support &&
        Platform.OS == "android" &&
        NfcManager.cancelTechnologyRequest();
    };
  }, []);
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: "#f2f2f2",
      }}
    >
      <HomeOrgan navigation={navigation} />
    </View>
  );
}

export default Home;
