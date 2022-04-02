import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Modal } from "react-native";
import { ProfileStyle } from "../../styles/ProfileStyle";
import ImagePicker from "react-native-image-crop-picker";
export default function ModalItem({
  modalVisibles,
  modalHandler,
  imageHandler,
}) {
  const [modalVisible, setModalVisible] = useState(modalVisibles);
  const [image, setImage] = useState(null);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      // alert(image);
      setImage(image);
      imageHandler(image);
    });
  };

  const choosePhotoFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setImage(image);
      imageHandler(image);

      console.log(image);
      // alert(image);
    });
  };
  return (
    <View>
      <Modal
        // hardwareAccelerated={true}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
          modalHandler();
        }}
      >
        {/* <Modals> */}
        <View style={ProfileStyle.centeredView}>
          <View style={ProfileStyle.modalView}>
            <Pressable
              style={[ProfileStyle.button, ProfileStyle.buttonClose]}
              onPress={() => {
                takePhotoFromCamera();
              }}
            >
              <Text style={ProfileStyle.textStyle}>Take Photo</Text>
            </Pressable>
            <Pressable
              style={[ProfileStyle.button, ProfileStyle.buttonClose]}
              onPress={() => {
                choosePhotoFromGallery();
              }}
            >
              <Text style={ProfileStyle.textStyle}>
                Choose Photo From Gallery
              </Text>
            </Pressable>
            <Pressable
              style={[ProfileStyle.button, ProfileStyle.buttonClose]}
              onPress={() => {
                // setModalVisible(!modalVisible);
                modalHandler();
              }}
            >
              <Text style={ProfileStyle.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
