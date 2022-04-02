import React from "react";
import { View, Image, Text } from "react-native";
import ReportTypeCardFlatlist from "../../common/component/organisms/report/ReportTypeCardFlatlist";
function ReadReports(props) {
  const navigation = props.navigation;
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // marginTop: 70,
        backgroundColor: "#f2f2f2",
      }}
    >
      {/* <View
        style={{
          flex: 1,
          //  marginLeft: 18,
          //   backgroundColor: "#121212",
          justifyContent: 'flex-end',
          alignSelf: 'flex-end',
          alignItems: 'flex-end',
          width: '100%',
        }}> */}
      <ReportTypeCardFlatlist navigation={navigation} />
      {/* </View> */}
    </View>
  );
}

export default ReadReports;
