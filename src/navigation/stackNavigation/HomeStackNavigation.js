import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/home/Home";
import Scan from "../../screens/scanner/Scan";
import { StackActions } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import UpdateProfileStack from "./UpdateProfileStackNavigation";
const Stack = createStackNavigator();

function HomeStackNavigation(props) {
  const popAction = StackActions.pop(1);
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator
          initialRouteName="Home"
          mode="card"
          screenOptions={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: "",
            headerLeft: () => null,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            options={{ headerLeft: () => null }}
            name="Scan"
            component={Scan}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              headerLeft: () => null,
            }}
            name="ProfileData"
            component={UpdateProfileStack}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default HomeStackNavigation;
