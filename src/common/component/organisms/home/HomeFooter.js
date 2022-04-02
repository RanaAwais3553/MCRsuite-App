import React from "react";
import { LogBox, View, Image, Tex, Dimensions } from "react-native";
import VisitSitesFlatList from "./VisitSitesFlatList";
import LogoutScanner from "../../molecules/LogoutScanner";
function HomeFooter(props) {
  LogBox.ignoreLogs(["EventEmitter.removeListener"]);
  const navigation = props.navigation;

  return (
    <View
      style={{
        flex: 1,
        //  marginTop: 20,
        backgroundColor: "#f2f2f2",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flex: 0.2,
          width: "96%",
          // paddingBottom: 7,
          alignSelf: "flex-end",
          // backgroundColor: '#121212',
          //  alignSelf: 'center',
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <LogoutScanner navigation={navigation} />
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "#121212",
        }}
      >
        <VisitSitesFlatList navigation={navigation} />
      </View>
    </View>
  );
}

export default HomeFooter;
