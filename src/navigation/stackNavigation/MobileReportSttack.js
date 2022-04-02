import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MobileReportList from "../../screens/reports/reportListType/MobileReportList";
import MobileReportFormScreen from "../../screens/reports/reportForm/Mobile";
import MobileReportFormView from "../../screens/reports/reportView/MobileFormView";
import { StackActions } from "@react-navigation/native";
const Stack = createStackNavigator();

function MobileReportStack(props) {
  const popAction = StackActions.pop(1);
  // onPress={() => props.navigation.dispatch(popAction)}
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator
          initialRouteName="MobileReportList"
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
              headerLeft: () => (
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{ flexDirection: "row", alignItems: "center" }}
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
            name="MobileReportList"
            component={MobileReportList}
          />
          <Stack.Screen
            options={{
              headerLeft: () => (
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{ flexDirection: "row", alignItems: "center" }}
                  onPress={() => props.navigation.navigate("MobileReportList")}
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
            name="MobileReportForm"
            component={MobileReportFormScreen}
          />
          <Stack.Screen
            options={{
              headerLeft: () => (
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{ flexDirection: "row", alignItems: "center" }}
                  onPress={() => props.navigation.navigate("MobileReportList")}
                >
                  <MaterialIcons
                    name="chevron-left"
                    color="#3155a5"
                    size={22}
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
            name="MobileReportFormView"
            component={MobileReportFormView}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default MobileReportStack;
