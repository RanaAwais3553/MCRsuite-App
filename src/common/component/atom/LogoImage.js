import React from 'react';
import {View, Image} from 'react-native';
function LogoImage({logoHeight, logoWidth}) {
  return (
    <View>
      <Image
        style={{height: logoHeight, width: logoWidth, resizeMode: 'contain'}}
        source={require('../../../../assets/mcr.png')}
      />
    </View>
  );
}

export default LogoImage;
