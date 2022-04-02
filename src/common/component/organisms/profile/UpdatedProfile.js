import React, { useState, useEffect } from "react";
import {
  View,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  Alert,
  Text,
  Pressable,
} from "react-native";
import { ProfileStyle } from "../../../styles/ProfileStyle";
import { Avatar, Accessory } from "react-native-elements";
import InputTexts from "../../atom/InputText";
import ModalItem from "../../molecules/ModalItem";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { hp, wp } from "../../../styles/Dimensions";

import { useDispatch, useSelector } from "react-redux";
import ActivityIndicatorComponent from "../../atom/ActivityIndicatorComponent";
import hideShowBottomBarHook from "../../../customHook/hideShowBottomBarHook";
import ScanModalResponse from "../../molecules/ScanModalResponse";
import { updateProfileAction } from "../../../../store/action/profileAction";
export default function UpdateProfile({ navigation }) {
  const { email, type, id, full_name } = useSelector((state) => state.auth);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState(full_name);
  const [userEmail, setEmail] = useState(email);
  const [image, setImage] = useState("");
  const [loading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  hideShowBottomBarHook();
  const { successProfile, isLoading, modal } = useSelector(
    (state) => state.pasword
  );
  const modalHandler = () => {
    setModalVisible(!modalVisible);
  };
  const imageHandler = async (img) => {
    let formData = new FormData();
    formData.append("id", id);
    formData.append("fullName", full_name);
    formData.append("email", email);
    formData.append("photo", img);
    setIsLoading(true);
    await dispatch(updateProfileAction(formData));
    setIsLoading(false);
    // .then(() => {
    //   setImage(img.path);
    //   setIsLoading(false);
    // })
    // .catch(() => {
    //   setIsLoading(false);
    //   alert("Image not uploaded");
    // });
  };
  console.log("profile image is", image);
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
            <View
              style={{
                ...ProfileStyle.card,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  // alignSelf: "center",
                  position: "absolute",
                  top: -50,
                  // backgroundColor: "#121212",
                }}
              >
                {loading ? (
                  <ActivityIndicatorComponent />
                ) : (
                  <Avatar
                    rounded
                    avatarStyle={{ alignSelf: "center" }}
                    containerStyle={{ flex: 2 }}
                    iconStyle={{ paddingVertical: 30 }}
                    size="large"
                    source={
                      !image
                        ? require("../../../../../assets/avatar2.jpg")
                        : { uri: image }
                    }
                    //  onPress={() => setModalVisible(true)}
                  >
                    {/* <Avatar.Accessory
                      size={23}
                      style={{ backgroundColor: "#3155a5" }}
                      //  onPress={() => setModalVisible(true)}
                    /> */}
                  </Avatar>
                )}
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: hp(10) }}>
                  <View style={{ marginTop: 20 }}>
                    <InputTexts
                      placeHolders={"Name"}
                      keyboardTypes={"default"}
                      values={name}
                      onChangeTexts={(name) => setName(name)}
                      secureTextEntries={false}
                      editables={false}
                      IconName={"md-person-circle-outline"}
                      IconType={"Ionicons"}
                      size={hp(3.2)}
                    />
                  </View>
                  <View style={{ marginTop: 20 }}>
                    <InputTexts
                      placeHolders={"Email"}
                      keyboardTypes={"email-address"}
                      values={userEmail}
                      onChangeTexts={(email) => setEmail(email)}
                      secureTextEntries={false}
                      editables={false}
                      IconName={"email"}
                      IconType={"Fontisto"}
                      size={hp(2.5)}
                    />
                  </View>
                  <View
                    style={{
                      paddingBottom: 20,
                      marginTop: hp(0.5),
                    }}
                  >
                    <Pressable
                      onPress={() =>
                        navigation.navigate("UpdatedPasswordScreen")
                      }
                    >
                      <Text style={{ color: "#3155a5" }}>Change Password</Text>
                    </Pressable>
                  </View>
                </View>
              </ScrollView>
            </View>
            {modal && (
              <ScanModalResponse
                navigation={navigation}
                success={successProfile}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
