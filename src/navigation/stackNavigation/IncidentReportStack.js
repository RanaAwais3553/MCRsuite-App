import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import IncedentReportList from "../../screens/reports/reportListType/IncedentReportList";
import IncidentReportFormScreen from "../../screens/reports/reportForm/Incident";
import IncidentReportFormView from "../../screens/reports/reportView/IncidentFormView";
import { StackActions } from "@react-navigation/native";
const Stack = createStackNavigator();

function IncidentReportStack(props) {
  const popAction = StackActions.pop(1);
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator
          initialRouteName="IncedentReportList"
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
            name="IncedentReportList"
            component={IncedentReportList}
          />
          <Stack.Screen
            options={{
              headerLeft: () => (
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{ flexDirection: "row", alignItems: "center" }}
                  onPress={() =>
                    props.navigation.navigate("IncedentReportList")
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
            name="IncidentReportForm"
            component={IncidentReportFormScreen}
          />
          <Stack.Screen
            options={{
              headerLeft: () => (
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{ flexDirection: "row", alignItems: "center" }}
                  onPress={() =>
                    props.navigation.navigate("IncedentReportList")
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
            name="IncidentReportFormView"
            component={IncidentReportFormView}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default IncidentReportStack;
