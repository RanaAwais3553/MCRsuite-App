import React from 'react';
import {LogBox, View, Image, Tex, Dimensions} from 'react-native';
import Profile from '../../atom/Profile';
let {width: screenWidth, height: screenHeight} = Dimensions.get('window');
function HomeHeader(props) {
  LogBox.ignoreLogs(['EventEmitter.removeListener']);
  const navigation = props.navigation;
  return (
    <View
      style={{
        flex: 0.45,
        justifyContent: 'flex-end',
        alignItems: 'center',
        //  marginTop: 20,
        backgroundColor: '#f2f2f2',
      }}>
      <View
        style={{
          height: screenHeight < 709 ? 70 : 90,
          width: screenHeight < 709 ? 120 : 140,
          alignSelf: 'center',
        }}>
        <Image
          style={{
            height: screenHeight < 709 ? 70 : 90,
            width: screenHeight < 709 ? 120 : 140,
            resizeMode: 'contain',
          }}
          source={require('../../../../../assets/mcr.png')}
        />
      </View>
      <View
        style={{
          flex: 0.7,
          width: '96%',
          // paddingBottom: 7,
          alignSelf: 'flex-end',
          // backgroundColor: '#121212',
          //  alignSelf: 'center',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <Profile navigation={navigation} />
      </View>
    </View>
  );
}

export default HomeHeader;
