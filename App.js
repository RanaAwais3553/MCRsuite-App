import React, {useEffect} from 'react';
import {
  View,
  StatusBar,
  Animated,
  Platform,
  Alert,
  BackHandler,
  Linking,
} from 'react-native';
import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';
import AppNavigator from './src/navigation/stackNavigation/AppNavigator';
// import { store } from "./src/store/store";
import store from './src/store/saga/configureStore';
import SplashScreen from 'react-native-splash-screen';
import VersionCheck from 'react-native-version-check';
import FlashMessage from 'react-native-flash-message';
enableScreens();

export default function App() {
  useEffect(() => {
    Platform.OS == 'android' && checkUpdateNeeded();
    SplashScreen.hide();
  }, []);
  const checkUpdateNeeded = async () => {
    try {
      let updateNeeded = await VersionCheck.needUpdate();
      console.log('update needed or not', updateNeeded, updateNeeded.isNeeded);
      if (updateNeeded && updateNeeded.isNeeded) {
        Alert.alert(
          'Please Update',
          'You will have to update your app to the latest version to continue using.',
          [
            {
              text: 'Update',
              onPress: () => {
                BackHandler.exitApp();
                Linking.openURL(updateNeeded.storeUrl);
              },
            },
          ],
        );
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <>
      <StatusBar backgroundColor={Platform.OS === 'ios' ? '#fff' : '#121212'} />
      <Provider store={store}>
        <AppNavigator />
        <FlashMessage position="top" />
      </Provider>
    </>
  );
}
