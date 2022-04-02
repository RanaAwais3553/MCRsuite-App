import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
// import  {Logo}  './Components/Logo'
import {container, logoStyle} from './logoStyle';
import {loginAction} from '../../store/action/authAction';
import {useDispatch} from 'react-redux';
let {width: screenWidth, height: screenHeight} = Dimensions.get('window');
export default function Login() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setHide(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setHide(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  const checkedState = useCallback(() => {
    if (email != '' && password != '') {
      return true;
    }
    return false;
  }, [password, email]);

  const loginHandler = async () => {
    // let userData = new FormData();
    let userData = true;
    try {
      await dispatch(loginAction(userData));
    } catch (err) {
      console.log(err, 'LoginHandler error is:!...');
    }

    // if (event) {
    //   userData.append("email_address", email_address);
    //   userData.append("event_code", event_code);
    // } else userData.append("email_address", email_address);
    // setError(null);
    // setIsLoading(true);
    // try {
    //   await dispatch(login(userData));
    // } catch (err) {
    //   setError(err.message);
    //   setIsLoading(false);
    // }
  };

  return (
    <View style={logoStyle.container}>
      <ImageBackground
        source={require('../../../assets/mcrBack.png')}
        resizeMode="stretch"
        style={{height: screenHeight, width: screenWidth}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1, alignSelf: 'stretch'}}>
          <View style={hide ? logoStyle.logoOnType : logoStyle.logo}>
            <Image
              source={require('../../../assets/mcr.png')}
              style={
                hide ? logoStyle.logoImageOnType : logoStyle.logoImage
              }></Image>
          </View>
          <View style={logoStyle.inputview}>
            <View style={{marginBottom: 20}}>
              <TextInput
                style={logoStyle.input}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
                placeholderTextColor="#3155a5"
              />
            </View>
            <View style={{marginBottom: 20}}>
              <TextInput
                style={logoStyle.input}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
                keyboardType="default"
                placeholderTextColor="#3155a5"
              />
            </View>
            <TouchableOpacity
              disabled={checkedState() ? false : true}
              style={{
                ...logoStyle.btn,
                backgroundColor: checkedState() ? '#d14e52' : '#a6a2a2',
              }}
              onPress={() => loginHandler()}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: '700',
                }}>
                SUBMIT
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}
