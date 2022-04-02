import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calender from "../screens/calender/Calender";
import ReadReports from "../screens/reports/ReadReports";
import ReportsStackNavigation from "./stackNavigation/ReportsStackNavigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeStackNavigation from "../navigation/stackNavigation/HomeStackNavigation";
import { Dimensions, StyleSheet, Platform, Text, View } from "react-native";
import TabRightButton from "../common/component/atom/bottomTabButton/TabRightButton";
import TabLeftButton from "../common/component/atom/bottomTabButton/TabLeftButton";
import TabCenterButton from "../common/component/atom/bottomTabButton/TabCenterButton";
import { useSelector } from "react-redux";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
const Tab = createBottomTabNavigator();
let { width: screenWidth, height: screenHeight } = Dimensions.get("window");
function MyTabs(props) {
  const { type } = useSelector((state) => state.auth);
  console.log("name and email is:!...", type);
  const tabVisible = useSelector((state) => state.tabValue.tabVisible);
  const [tab, setTab] = useState(tabVisible ? tabVisible : undefined);

  useEffect(() => {
    console.log("useEffect inside tab bar called:!...");
    setTab(tabVisible);
  }, [tabVisible]);

  console.log("tab value is:!...", tab);
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Tab.Navigator
            initialRouteName={"Home"}
            tabBarOptions={{
              safeAreaInsets: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              },
              // tabBarVisible:false,
              style: {
                position: "absolute",
                overflow: tab ? "visible" : "hidden",

                backgroundColor: "#3155a5",
                height: Platform.OS === "ios" ? 40 : 40,
                alignItems: "center",
                ...styles.shadow,
              },
            }}
          >
            <Tab.Screen
              name="Reports"
              component={ReportsStackNavigation}
              options={{
                tabBarVisible: !!tab,

                tabBarIcon: ({ focused }) => (
                  <MaterialCommunityIcons
                    name="file-document-edit"
                    color="#fff"
                    size={11}
                  />
                ),

                tabBarButton: (props) => <TabRightButton {...props} />,
              }}
            />

            <Tab.Screen
              name="Home"
              component={HomeStackNavigation}
              options={{
                tabBarVisible: !!tab,
                tabBarButton: (props) => (
                  <TabCenterButton {...props} label={"Home"} />
                ),
              }}
            />
            <Tab.Screen
              name="Calander"
              component={Calender}
              options={{
                tabBarVisible: true,
                tabBarButton: (props) => (
                  <TabLeftButton {...props} label={"Calander"} />
                ),
              }}
            />
          </Tab.Navigator>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7f5d50",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 1,
  },
});
export default MyTabs;
