import React from 'react';
import {View, Text} from 'react-native';
import {Avatar, Accessory} from 'react-native-elements';

export default function AvatorImg({sources, onPresses, editPress}) {
  return (
    <Avatar
      rounded
      avatarStyle={{alignSelf: 'center'}}
      containerStyle={{flex: 2, marginLeft: 160}}
      iconStyle={{paddingVertical: 30}}
      size="large"
      source={sources}
      onPress={onPresses}>
      <Avatar.Accessory
        size={23}
        style={{backgroundColor: '#3155a5'}}
        onPress={editPress}
      />
    </Avatar>
  );
}
