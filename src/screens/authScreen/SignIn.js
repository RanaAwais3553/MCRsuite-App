import React, { useState, useEffect } from "react";
import { Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import LoginItem from "../../common/component/organisms/signIn/LoginInItems";
import NfcManager, { NfcTech } from "react-native-nfc-manager";
import { checkNFCSupport } from "../../store/action/nfcAction";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  useEffect(() => {
    Platform.OS == "android" &&
      NfcManager.start()
        .then(() => dispatch(checkNFCSupport()))
        .catch((err) => {
          console.log("NFC Does not support NFC Does not support", err);
        });
  }, []);

  useEffect(() => {
    Platform.OS == "android" &&
      NfcManager.requestTechnology(NfcTech.Ndef).catch(() =>
        console.log("nfc error")
      );
    console.log("first");

    return () => {
      console.log("second");

      Platform.OS == "android" &&
        NfcManager.cancelTechnologyRequest().catch(() =>
          console.log("nfc error")
        );
    };
  }, []);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LoginItem />
    </TouchableWithoutFeedback>
  );
}
