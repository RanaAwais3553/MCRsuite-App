import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
  Alert,
  LogBox,
  Platform,
} from "react-native";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import ModalResponse from "./ModalResponse";
import { useDispatch } from "react-redux";
import { logOutStyle } from "../../styles/LogoutButtonScanner";
import { logOut } from "../../../store/action/authAction";
import { clearReportsStore } from "../../../store/action/reportAction";
import { useSelector } from "react-redux";
import NfcManager, { NfcTech } from "react-native-nfc-manager";
import { setScanModalState } from "../../../store/action/modalAction";
import { clearSiteListData } from "../../../store/action/siteListAction";
import { wp } from "../../styles/Dimensions";
// NfcManager.start();
function LogoutScanner({ navigation, onPressLogOut }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [enabled, setEnable] = useState(false);
  const [status, setSatus] = useState(false);
  const [message, setMessage] = useState("");
  NfcManager.start()
    .then(() => setSatus(true))
    .catch(() => {
      setSatus(false);
    });
  LogBox.ignoreLogs(["EventEmitter.removeListener"]);
  const nfcStatus = useSelector((state) => state.nfc.nfcStatus);
  useEffect(() => {
    const nfcEnabledFunction = async () => {
      try {
        await NfcManager.isEnabled()
          .then((enabled) => {
            setEnable(enabled), console.log("NFC Enabled", enabled, status);
          })
          .catch((err) => console.log("NFC not Enabled", err));
      } catch (error) {
        console.log("NFC Not Found", error);
      }
    };
    nfcEnabledFunction();
  }, []);
  // useEffect(() => {
  //   if (error) {
  //     Alert.alert("Connection Error!", error, [{ text: "Okay" }]);
  //   }
  // }, [error]);
  const logoutHandler = async () => {
    setError(null);
    setIsLoading(true);
    try {
      dispatch(clearReportsStore());
      await dispatch(logOut());
      dispatch(clearSiteListData());
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };
  const scanComponentCalled = () => {
    console.log("NFC Scan Value in Scan Modal Function:!...");
    let value = true;
    dispatch(setScanModalState(value));
    navigation.navigate("Scan");
  };
  const modalToggleState = () => {
    setError("");
    setMessage("");
  };
  return (
    <View style={logOutStyle.container}>
      {isLoading ? (
        <View
          style={{
            height: 40,
            width: 140,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size={"small"} color="#3155a5" />
        </View>
      ) : (
        <TouchableOpacity
          activeOpacity={0.6}
          style={logOutStyle.changeUserTouchableStyle}
          onPress={logoutHandler}
        >
          <View style={logOutStyle.changeUserButtonStyle}>
            <Text style={logOutStyle.changeUserTextStyle}>Change User</Text>
          </View>
        </TouchableOpacity>
      )}

      <View
        style={{
          flex: 0.3,
          // backgroundColor: "#121212",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: '#fff',
            alignSelf: "center",
          }}
        >
          <Pressable
            onPress={() => {
              status
                ? enabled
                  ? scanComponentCalled()
                  : setMessage("Please Enabled NFC From your phone setting")
                : setMessage("This Phone is not support NFC");
            }}
          >
            <Icons name="nfc-search-variant" size={wp(10)} color="#3155A5" />
          </Pressable>
          {(!!message || !!error) && (
            <ModalResponse
              message={message ? message : error}
              modalToggleState={modalToggleState}
            />
          )}
        </View>
      </View>
    </View>
  );
}
export default LogoutScanner;
