import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Pressable,
} from 'react-native';
import {Avatar, Accessory} from 'react-native-elements';
import {ProfileStyle} from './ProfileStyle';
import {useDispatch} from 'react-redux';
import {
  hideOrShowBottomTabBarAction,
  showBottomTabBarAction,
} from './../../store/action/hideOrShowBottomTabBarAction';

export default function UpdateProfile() {
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideOrShowBottomTabBarAction());
    return () => {
      console.log('cleanup function called!...');
      dispatch(showBottomTabBarAction());
    };
  }, [dispatch]);
  const takePhotoFromCamera = () => {};
  const takePhotoFromGallery = () => {};
  return (
    <View style={ProfileStyle.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={ProfileStyle.centeredView}>
          <View style={ProfileStyle.modalView}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={[ProfileStyle.button, ProfileStyle.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={ProfileStyle.textStyle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              style={[ProfileStyle.button, ProfileStyle.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={ProfileStyle.textStyle}>
                Choose Photo From Gallery
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              style={[ProfileStyle.button, ProfileStyle.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={ProfileStyle.textStyle}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View
        style={{
          flex: 0.2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#3155a5',
        }}></View>

      <View style={ProfileStyle.card}>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            top: -50,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Avatar
            rounded
            avatarStyle={{alignSelf: 'center'}}
            containerStyle={{flex: 2}}
            iconStyle={{paddingVertical: 30}}
            size="large"
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
            onPress={() => setModalVisible(true)}>
            <Avatar.Accessory size={23} style={{backgroundColor: '#3155a5'}} />
          </Avatar>
        </View>

        <Text style={[ProfileStyle.inpuStyle, ProfileStyle.avator]}>
          John Elsy
        </Text>
        <Text style={ProfileStyle.inpuStyle}>elsy@yahoo.com</Text>
        <Text style={ProfileStyle.inpuStyle}>+104 92890987</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          //  onPress={() => setModalVisible(true)}
          style={ProfileStyle.btn}>
          <Text style={{fontWeight: '900', color: 'white'}}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
