import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReadReports from "../../screens/reports/ReadReports";
import { TouchableOpacity, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import IncidentReportStack from "./IncidentReportStack";
import DailyInceptionReportStack from "./DailyIncpectionReportStack";
import MobileReportStack from "./MobileReportSttack";
import SiteVisitReportStack from "./SiteVisitReportStack";

const Stack = createStackNavigator();

function ReportsStackNavigation(props) {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator
          initialRouteName="ReadReports"
          mode="card"
          screenOptions={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: "",
            headerLeft: () => null,
          }}
        >
          <Stack.Screen name="ReadReports" component={ReadReports} />
          <Stack.Screen
            options={{
              headerShown: false,
              headerLeft: () => null,
            }}
            // options={{
            //   headerLeft: () => (
            //     <TouchableOpacity
            //       activeOpacity={0.6}
            //       style={{ flexDirection: "row", alignItems: "center" }}
            //       onPress={() => props.navigation.navigate("ReadReports")}
            //     >
            //       <MaterialIcons
            //         name="chevron-left"
            //         color="#3155a5"
            //         size={22}
            //         //          onPress={() => props.navigation.goBack()}
            //       />
            //       <Text
            //         style={{
            //           color: "#3155a5",
            //           fontFamily: "OpenSans-Bold",
            //           // marginLeft: 9,
            //           // fontSize: 16,
            //         }}
            //       >
            //         Back
            //       </Text>
            //     </TouchableOpacity>
            //   ),
            // }}
            name="DailyIncpectionReportStack"
            component={DailyInceptionReportStack}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              headerLeft: () => null,
            }}
            // options={{
            //   headerLeft: () => (
            //     <TouchableOpacity
            //       activeOpacity={0.6}
            //       style={{ flexDirection: "row", alignItems: "center" }}
            //       onPress={() => props.navigation.navigate("ReadReports")}
            //     >
            //       <MaterialIcons
            //         name="chevron-left"
            //         color="#3155a5"
            //         size={22}
            //         //          onPress={() => props.navigation.goBack()}
            //       />
            //       <Text
            //         style={{
            //           color: "#3155a5",
            //           fontFamily: "OpenSans-Bold",
            //           // marginLeft: 9,
            //           // fontSize: 16,
            //         }}
            //       >
            //         Back
            //       </Text>
            //     </TouchableOpacity>
            //   ),
            // }}
            name="IncedentReportStack"
            component={IncidentReportStack}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              headerLeft: () => null,
            }}
            // options={{
            //   headerLeft: () => (
            //     <TouchableOpacity
            //       activeOpacity={0.6}
            //       style={{ flexDirection: "row", alignItems: "center" }}
            //       onPress={() => props.navigation.navigate("ReadReports")}
            //     >
            //       <MaterialIcons
            //         name="chevron-left"
            //         color="#3155a5"
            //         size={22}
            //         //          onPress={() => props.navigation.goBack()}
            //       />
            //       <Text
            //         style={{
            //           color: "#3155a5",
            //           fontFamily: "OpenSans-Bold",
            //           // marginLeft: 9,
            //           // fontSize: 16,
            //         }}
            //       >
            //         Back
            //       </Text>
            //     </TouchableOpacity>
            //   ),
            // }}
            name="MobileReportStack"
            component={MobileReportStack}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              headerLeft: () => null,
            }}
            // options={{
            //   headerLeft: () => (
            //     <TouchableOpacity
            //       activeOpacity={0.6}
            //       style={{ flexDirection: "row", alignItems: "center" }}
            //       onPress={() => props.navigation.navigate("ReadReports")}
            //     >
            //       <MaterialIcons
            //         name="chevron-left"
            //         color="#3155a5"
            //         size={22}
            //         //          onPress={() => props.navigation.goBack()}
            //       />
            //       <Text
            //         style={{
            //           color: "#3155a5",
            //           fontFamily: "OpenSans-Bold",
            //           // marginLeft: 9,
            //           // fontSize: 16,
            //         }}
            //       >
            //         Back
            //       </Text>
            //     </TouchableOpacity>
            //   ),
            // }}
            name="SiteVisitReportStack"
            component={SiteVisitReportStack}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default ReportsStackNavigation;
