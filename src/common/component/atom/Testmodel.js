import {
  View,
  Text,
  Image,
  Pressable,
  Modal,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useState } from "react";
// import { hp, wp } from "../../../styles/Dimensions";
import { ProfileStyle } from "../../styles/ProfileStyle";
import { hp, wp } from "../../styles/Dimensions";
export default function Testmodel({ data, callBackModal }) {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={ProfileStyle.centeredViews}>
        <View
          style={{
            ...styles.modalView,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "900" }}>View Reel</Text>
          </View>
          <View
            style={{
              paddingVertical: hp(1),
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Message:</Text>
          </View>
          <View
            style={{
              alignSelf: "flex-start",
              paddingHorizontal: hp(2),
              paddingBottom: hp(2),
              //   backgroundColor: "#fff",
            }}
          >
            <Text style={{ alignSelf: "flex-start", paddingBottom: hp(1) }}>
              {data}
            </Text>
          </View>
          <Pressable
            style={styles.button}
            onPress={() => {
              callBackModal();
              setModalVisible(false);
            }}
          >
            <Text style={{ ...ProfileStyle.textStyle, fontSize: 18 }}>
              Close
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "white",
    justifyContent: "flex-end",
    paddingHorizontal: wp(2),
    backgroundColor: "#dbd9d9",
    borderTopRightRadius: wp(4),
    borderTopLeftRadius: wp(4),
    borderBottomLeftRadius: hp(2),
    borderBottomRightRadius: hp(2),
    marginHorizontal: wp(2),
  },
  button: {
    width: wp(24),
    height: hp(7),
    // padding: hp(2),
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    marginBottom: hp(2),
    backgroundColor: "#3155a5",
    borderRadius: wp(2),
    margin: wp(1),
    alignSelf: "flex-end",
  },
});
