import React, { useState, useEffect } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Logo from "../../atom/Logo";
import LoginTextInput from "../../molecules/LoginTextInput";

import { loginStyle } from "../../../styles/LoginStyle";
import { hp, wp } from "../../../styles/Dimensions";
let { width: screenWidth, height: screenHeight } = Dimensions.get("window");
export default function LoginItem() {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      // alert("data");
      setHide(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setHide(false);
      // alert("false");
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={require("../../../../../assets/splashf2f2f2.png")}
        resizeMode="cover"
        style={{ height: "100%", width: "100%" }}
      >
        {/* <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        > */}
        <View style={{ ...loginStyle.container, paddingHorizontal: wp(7) }}>
          <View
            style={{
              flex: screenHeight < 650 ? 0.4 : 0.7,
              justifyContent: "flex-end",
            }}
          >
            <Logo
              logoHeight={hide ? hp(1.3) : hp(2)}
              logoWidth={hide ? wp(5) : wp(7)}
            />
          </View>
          <View style={loginStyle.inputview}>
            <LoginTextInput hide={hide} />
            {/* <Buttons /> */}
          </View>
        </View>
        {/* </KeyboardAvoidingView> */}
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
