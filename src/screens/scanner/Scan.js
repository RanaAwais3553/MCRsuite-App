import React, { useState, useEffect } from "react";
import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MultilineText from "../../common/component/molecules/MultiLineText";
import ModalItem from "../../common/component/molecules/NFCModal";
import Buttons from "../../common/component/atom/Button";
import { hp, wp } from "../../common/styles/Dimensions";
import { useNavigation } from "@react-navigation/native";
import TextView from "../../common/component/atom/TextView";
import { loginStyle } from "../../common/styles/LoginStyle";
import TextHeading from "../../common/component/atom/TextHeading";
import { useIsFocused } from "@react-navigation/native";
import hideShowBottomBarHook from "../../common/customHook/hideShowBottomBarHook";
import { datesTimes } from "../../../utils/utils";
import ActivityIndicatorComponent from "../../common/component/atom/ActivityIndicatorComponent";
import scanResponseHook from "../../common/customHook/scanResponseHook";
import { useSelector, useDispatch } from "react-redux";
import { clearScanResponseData } from "../../store/action/scanResponseAction";

export default function Scan() {
  const [scanData, setScanData] = useState("");
  const [status, setStatus] = useState("Check In");
  const [apiCall, setApiCall] = useState(false);
  const [description, setDescription] = useState(null);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  hideShowBottomBarHook();
  const navigation = useNavigation();
  const currentDateTime = datesTimes();
  const modalVisible = useSelector((state) => state.modl.modal);
  const modalHandler = (Uid) => {
    setScanData(Uid);
  };

  const MultilineTexHandlers = (des) => {
    setDescription(des);
  };
  const { isLoading, error } = scanResponseHook(
    apiCall,
    scanData,
    description,
    status,
    currentDateTime,
    navigation
  );
  const { success } = useSelector((state) => state.scan);
  useEffect(() => {
    if (success || error) {
      Alert.alert("", success ? success : error, [
        {
          text: "Ok",
          onPress: () => {
            dispatch(clearScanResponseData());
            navigation.navigate("Home");
            setScanData(null);
          },
        },
      ]);
    }
  }, [success, error]);
  if (isLoading) {
    return <ActivityIndicatorComponent />;
  }
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: wp(5),
          backgroundColor: scanData ? "#f2f2f2" : "black",
          opacity: scanData ? 1 : 0.35,
        }}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView showsVerticalScrollIndicator={true}>
            <View style={{ flex: 0.8 }}>
              {modalVisible && (
                <ModalItem
                  isFocused={isFocused}
                  modalHandler={modalHandler}
                  modalVisibles={modalVisible}
                  buttonHandler={scanData}
                  navigation={navigation}
                  checkInPressed={() => {
                    alert("checked in");
                  }}
                  checkOutPressed={() => {
                    alert("checked");
                  }}
                />
              )}

              <View style={{ marginTop: 30, flex: 1 }}>
                <View>
                  <TextHeading title="Description:" />
                  <MultilineText
                    Onpressed={() => {
                      Keyboard.dismiss();
                    }}
                    title={"Submit"}
                    heading={"Description"}
                    MultilineTexHandler={MultilineTexHandlers}
                  />
                </View>
              </View>

              <View
                style={{
                  flex: 0.2,
                  alignSelf: "stretch",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginHorizontal: wp(0.5),
                    marginTop: Platform.OS == "ios" ? 20 : 1,
                  }}
                >
                  <Buttons
                    bg={"#3155a5"}
                    onPresses={() => {
                      setApiCall(true);
                    }}
                    title={"SUBMIT"}
                    heights={hp(7)}
                    widths={wp(25)}
                    border={wp(2)}
                  />
                  <Buttons
                    bg={"#3155a5"}
                    onPresses={() => {
                      setApiCall(true);
                    }}
                    title={"No Reports"}
                    heights={hp(7)}
                    widths={wp(25)}
                    border={wp(2)}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
