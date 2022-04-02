import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/home/Home";
import Scan from "../../screens/scanner/Scan";
import { StackActions } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SitesView from "../../screens/sitesView/SitesView";
import UpdatedProfile from "../../screens/profile/UpdatedProfile";
import SitesList from "../../screens/sitesView/SitesList";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
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
                    color="#3155a5"
                    size={22}
                    //      onPress={() => props.navigation.goBack()}
                  />
                  <Text
                    style={{
                      color: "#3155a5",
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
            name="SitesDetail"
            component={SitesView}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              headerLeft: () => null,
            }}
            name="ProfileData"
            component={UpdateProfileStack}
          />
          <Stack.Screen
            options={{
              headerLeft: () => (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    // width: 80,
                    // backgroundColor: "#ffff",
                  }}
                  activeOpacity={0.6}
                  onPress={() => props.navigation.dispatch(popAction)}
                >
                  <MaterialIcons
                    name="chevron-left"
                    color="#3155a5"
                    size={22}
                    //          onPress={() => props.navigation.goBack()}
                  />
                  <Text
                    style={{
                      color: "#3155a5",
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
            name="SitesList"
            component={SitesList}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default HomeStackNavigation;
