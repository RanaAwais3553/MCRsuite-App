import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import UpdatedProfile from "../../screens/profile/UpdatedProfile";
import UpdatedPasswordScreen from "../../screens/profile/UpdatePasswordScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity } from "react-native";
import { StackActions } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { wp } from "../../common/styles/Dimensions";
const Stack = createStackNavigator();

function UpdateProfileStack(props) {
  const popAction = StackActions.pop(1);
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator
          initialRouteName="UpdatedProfile"
          mode="card"
          screenOptions={{
            safeAreaInsets: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
            headerShown: true,
            // header: null,

            headerTransparent: true,
            headerTitle: "",
            headerLeft: () => null,
          }}
        >
          <Stack.Screen
            options={{
              headerLeft: () => (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    // backgroundColor: "#ffff",
                  }}
                  activeOpacity={0.6}
                  onPress={() => props.navigation.dispatch(popAction)}
                >
                  <MaterialIcons
                    name="chevron-left"
                    color="#fff"
                    size={22}
                    //        onPress={() => props.navigation.goBack()}
                  />
                  <Text
                    style={{
                      color: "#fff",
                      fontFamily: "OpenSans-Bold",
                      // marginLeft: 9,
                      // fontSize: hp(1.3),
                    }}
                  >
                    Back
                  </Text>
                </TouchableOpacity>
              ),
            }}
            name="UpdatedProfile"
            component={UpdatedProfile}
          />
          <Stack.Screen
            options={{
              headerLeft: () => (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  activeOpacity={0.6}
                  onPress={() => props.navigation.navigate("UpdatedProfile")}
                >
                  <MaterialIcons name="chevron-left" color="#fff" size={22} />
                  <Text
                    style={{
                      color: "#fff",
                      fontFamily: "OpenSans-Bold",
                      // marginLeft: 9,
                      // fontSize: 16,
                    }}
                  >
                    Back
                  </Text>
                </TouchableOpacity>
              ),
            }}
            name="UpdatedPasswordScreen"
            component={UpdatedPasswordScreen}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default UpdateProfileStack;
