import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../../screens/authScreen/SignIn';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
const Stack = createStackNavigator();

function SignInStack() {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <Stack.Navigator
          initialRouteName="Login"
          mode="card"
          screenOptions={{
            safeAreaInsets: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
            headerLeft: () => null,
          }}>
          <Stack.Screen name="Login" component={SignIn} />
        </Stack.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default SignInStack;
