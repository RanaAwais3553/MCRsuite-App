import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Keyboard,
  Alert,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ActivityIndicator,
  Platform,
} from "react-native";
import { Button } from "react-native-elements";
import { hp, wp } from "../../styles/Dimensions";
import InputTexts from "../atom/InputText";
import { Snackbar } from "react-native-paper";
import { login } from "../../../store/action/authAction";
import { useDispatch } from "react-redux";
import PswdInputText from "../atom/PasswordInputText";
import Icon from "react-native-dynamic-vector-icons";
import { loginStyle } from "../../styles/LoginStyle";
import makeObject from "../../../../utils/makeObject";
export default function LoginTextInput({ hide }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = React.useState(error ? true : false);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (error) {
  //     Alert.alert("Auth Error!", error, [{ text: "Okay" }]);
  //   }
  // }, [error]);
  const onDismissSnackBar = () => setError("");
  const checkedState = useCallback(() => {
    if (email != "" && password != "") {
      return true;
    }
    return false;
  }, [password, email]);

  const loginHandler = async () => {
    Keyboard.dismiss();
    let userData = { username: email, password: password };
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(login(userData));
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ marginTop: hide ? hp(2.5) : hp(10) }}>
        {!!error ? (
          <Snackbar
            style={{
              backgroundColor: "#d14e52",
              position: Platform.OS == "ios" ? "absolute" : "relative",
            }}
            visible={!!error}
            onDismiss={onDismissSnackBar}
            action={{
              label: (
                <Icon
                  color={"#3155A5"}
                  name={"cross"}
                  type={"Entypo"}
                  size={hp(3)}
                  // style={{ position: "absolute" }}
                  //           onPress={() => setVisible("")}
                />
              ),

              //  label: "",
              // onPress: () => {
              //   setVisible("");
              // },
            }}
          >
            {error}
          </Snackbar>
        ) : (
          <View></View>
        )}
        <InputTexts
          placeHolders={"User Name"}
          keyboardTypes={"email-address"}
          values={email}
          onChangeTexts={(text) => setEmail(text)}
          secureTextEntries={false}
          editables={true}
          IconName={"md-person-circle-outline"}
          IconType={"Ionicons"}
          size={hp(3.5)}
        />

        <View
          style={{
            marginTop: hp(3),
            // padding: 0,
            // justifyContent: "flex-start",
            // backgroundColor: "#121212",
            // height: hp(7),
          }}
        >
          <PswdInputText
            placeHolders={"Password"}
            keyboardTypes={"numbers-and-punctuation"}
            values={password}
            onChangeTexts={(text) => setPassword(text)}
            secureTextEntries={true}
            editables={true}
            IconName={"lock"}
            IconType={"SimpleLineIcons"}
            eyeicons={"eye-outline"}
            size={hp(3)}
          />
        </View>
        {isLoading ? (
          <ActivityIndicator size={"large"} color="#3155a5" />
        ) : (
          <Text> </Text>
        )}
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            // backgroundColor: "yellow",
          }}
        >
          <Button
            containerStyle={loginStyle.loginButtonContainerStyle}
            disabled={checkedState() ? false : true}
            disabledStyle={{ backgroundColor: "#999999" }}
            disabledTitleStyle={loginStyle.loginButtonDisableTitleStyle}
            buttonStyle={{ backgroundColor: "#3155a5" }}
            title="Start"
            titleStyle={loginStyle.loginButtonTitleStyle}
            onPress={loginHandler}
          />
          {/* </View> */}
          {/* <Buttons
            onPresses={() => loginHandler()}
            bg={email.length > 0 && password.length > 0 ? "#3155a5" : "grey"}
          /> */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
