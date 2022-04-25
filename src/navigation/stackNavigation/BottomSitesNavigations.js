import { createStackNavigator } from "@react-navigation/stack";
import { StackActions } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SitesView from "../../screens/sitesView/SitesView";
import SitesList from "../../screens/sitesView/SitesList";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CreateEvent from "../../screens/sitesView/CreateEvent";
import EventDetail from "../../screens/sitesView/EventDetail";
const Stack = createStackNavigator();

function BottomSitesNavigation(props) {
  const popAction = StackActions.pop(1);
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator
          initialRouteName="SitesList"
          mode="card"
          screenOptions={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: "",
            headerLeft: () => null,
          }}
        >
          <Stack.Screen
            options={{
              headerLeft: () => null,
            }}
            name="SitesList"
            component={SitesList}
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
                  onPress={() => props.navigation.navigate("SitesList")}
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
              headerLeft: () => (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    // backgroundColor: "#ffff",
                  }}
                  activeOpacity={0.6}
                  onPress={() => props.navigation.navigate("SitesDetail")}
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
            name="CreateEvent"
            component={CreateEvent}
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
                  onPress={() => props.navigation.navigate("SitesDetail")}
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
            name="EventDetail"
            component={EventDetail}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default BottomSitesNavigation;
