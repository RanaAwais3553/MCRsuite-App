import React from 'react';
import {View, Text} from 'react-native';

export default function Icon({Type, names, sizes, colors}) {
  return (
    <View>
      <Type
        name={names}
        size={sizes}
        color={colors}
        style={{paddingRight: 20}}
      />
    </View>
  );
}
