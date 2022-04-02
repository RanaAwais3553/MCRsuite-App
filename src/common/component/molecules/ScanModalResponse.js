import React, { useState } from "react";
import { View, Pressable, Modal, Text } from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import { clearSuccessResponse } from "../../../store/action/profileAction";
import { clearAuthStore } from "../../../store/action/authAction";
function ScanModalResponse({ navigation, success }) {
  const [modalVisible, setModalVisible] = useState(true);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              margin: 20,
              backgroundColor: "#f2f2f2",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 10,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Icon
              type="ionicon"
              name="checkmark-circle-sharp"
              size={25}
              color="#d14e52"
            />
            <Text style={{ color: "#121212" }}>{success}</Text>
            {/* {modalButton && ( */}
            <Pressable
              style={{
                borderRadius: 10,
                marginTop: 20,
                paddingHorizontal: 30,
                paddingVertical: 10,
                elevation: 2,
                backgroundColor: "#3155a5",
              }}
              onPress={() => {
                dispatch(clearAuthStore()),
                  dispatch(clearSuccessResponse()),
                  setModalVisible(!modalVisible),
                  navigation.navigate("Home");
                //   modalToggleState();
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Ok
              </Text>
            </Pressable>
            {/* )} */}
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ScanModalResponse;
