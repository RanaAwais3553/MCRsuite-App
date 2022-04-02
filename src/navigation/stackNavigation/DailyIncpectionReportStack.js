import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import DailyIncpectionReportList from "../../screens/reports/reportListType/DailyIncpectionReportList";
import DailyIncpectionReportForm from "../../screens/reports/reportForm/DailyIncpection";
import DailyIncpectionReportView from "../../screens/reports/reportView/DailyInceptionFormView";
import { StackActions } from "@react-navigation/native";
const Stack = createStackNavigator();

function DailyInceptionReportStack(props) {
  const popAction = StackActions.pop(1);
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator
          initialRouteName="DailyIncpectionReportList"
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
            name="DailyIncpectionReportList"
            component={DailyIncpectionReportList}
          />
          <Stack.Screen
            options={{
              headerLeft: () => (
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{ flexDirection: "row", alignItems: "center" }}
                  onPress={() =>
                    props.navigation.navigate("DailyIncpectionReportList")
                  }
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
            name="DailyIncpectionReportForm"
            component={DailyIncpectionReportForm}
          />
          <Stack.Screen
            options={{
              headerLeft: () => (
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{ flexDirection: "row", alignItems: "center" }}
                  onPress={() =>
                    props.navigation.navigate("DailyIncpectionReportList")
                  }
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
            name="DailyIncpectionReportView"
            component={DailyIncpectionReportView}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default DailyInceptionReportStack;
