import React, { useState, useEffect } from "react";
import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  ScrollView,
} from "react-native";
import { ProfileStyle } from "../../../styles/ProfileStyle";
import Buttons from "../../atom/Button";
import ModalItem from "../../molecules/ModalItem";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { hp, wp } from "../../../styles/Dimensions";
import { hideOrShowBottomTabBarAction } from "../../../../store/action/hideOrShowBottomTabBarAction";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  updatePasswordAction,
  clearSuccessResponse,
} from "../../../../store/action/profileAction";
import ActivityIndicatorComponent from "../../atom/ActivityIndicatorComponent";
import handleProfileErrorHook from "../../../customHook/handleProfileErrorHook";
import TextHeading from "../../atom/TextHeading";
import PswdInputText from "../../atom/PasswordInputText";

export default function UpdatePassword({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [editAble, setEditAble] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPasword, setConfirmPassword] = useState("");
  const isFocused = useIsFocused();
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    isFocused && dispatch(hideOrShowBottomTabBarAction());
  }, [dispatch]);
  const success = useSelector((state) => state.pasword.success);

  handleProfileErrorHook(error);
  useEffect(() => {
    if (success) {
      Alert.alert("Success!", success, [
        {
          text: "Okay",
          onPress: () => {
            navigation.navigate("Home"), dispatch(clearSuccessResponse());
          },
        },
      ]);
    }
  }, [success]);

  const formHandler = async () => {
    Keyboard.dismiss();
    let profileData = new URLSearchParams();
    profileData.append("type", "editPassword");
    profileData.append("oldPassword", oldPassword);
    profileData.append("password", password);
    profileData.append("confirmPassword", confirmPasword);

    setError(null);
    setIsLoading(true);
    try {
      await dispatch(updatePasswordAction(profileData));
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };
  const modalHandler = () => {
    setModalVisible(!modalVisible);
  };
  const imageHandler = (img) => {
    setImage(img);
  };
  if (isLoading) {
    return <ActivityIndicatorComponent />;
  }
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={ProfileStyle.container}>
            {modalVisible && (
              <ModalItem
                modalHandler={modalHandler}
                modalVisibles={modalVisible}
                imageHandler={imageHandler}
              />
            )}
            <View
              style={{
                flex: 0.24,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#3155a5",
              }}
            ></View>
            <View style={ProfileStyle.card}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: hp(10) }}>
                  <View style={{ marginTop: 20 }}>
                    <View style={{}}>
                      <TextHeading title={"Old Password"} />
                    </View>
                    <PswdInputText
                      placeHolders={""}
                      keyboardTypes={"numbers-and-punctuation"}
                      values={oldPassword}
                      onChangeTexts={(password) => setOldPassword(password)}
                      secureTextEntries={true}
                      editables={true}
                      //  IconName={"lock"}
                      IconType={"SimpleLineIcons"}
                      eyeicons={"eye-outline"}
                      size={hp(3)}
                    />
                  </View>
                  <View style={{ marginTop: 20 }}>
                    <View style={{}}>
                      <TextHeading title={"New Password"} />
                    </View>
                    <PswdInputText
                      placeHolders={""}
                      keyboardTypes={"numbers-and-punctuation"}
                      values={password}
                      onChangeTexts={(password) => setPassword(password)}
                      secureTextEntries={true}
                      editables={true}
                      //  IconName={"lock"}
                      IconType={"SimpleLineIcons"}
                      eyeicons={"eye-outline"}
                      size={hp(3)}
                    />
                  </View>
                  <View style={{ marginTop: 20, paddingBottom: 20 }}>
                    <View style={{}}>
                      <TextHeading title={"Confirm Password"} />
                    </View>
                    <PswdInputText
                      placeHolders={""}
                      keyboardTypes={"numbers-and-punctuation"}
                      values={confirmPasword}
                      onChangeTexts={(confirmpass) =>
                        setConfirmPassword(confirmpass)
                      }
                      secureTextEntries={true}
                      editables={true}
                      //  IconName={"lock"}
                      IconType={"SimpleLineIcons"}
                      eyeicons={"eye-outline"}
                      size={hp(3)}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.2,
                    alignSelf: "stretch",
                    flexDirection: "row",
                    // backgroundColor: "green",
                    justifyContent: "center",
                  }}
                >
                  <View style={{ marginHorizontal: wp(0.5) }}>
                    <Buttons
                      bg={"#3155a5"}
                      // onPress={() => navigation.navigate("SitesList")}
                      onPresses={formHandler}
                      title={"CONFIRM"}
                      heights={hp(7)}
                      widths={wp(25)}
                      border={wp(2)}
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
