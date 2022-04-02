import React from "react";
import { View, Text, LogBox, PixelRatio, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TextHeading from "../../../../atom/TextHeading";
import TextView from "../../../../atom/TextView";
import ReportViewItem from "../../../../molecules/ReportView";
import { ReportViewStyle } from "../../../../../styles/ReportViewStyle";
import { hp } from "../../../../../styles/Dimensions";
import RenderHtml from "react-native-render-html";
import { splitCurrentNumericArray } from "../../../../../../../utils/utils";
let { height: screenHeight, width: screenWidth } = Dimensions.get("window");

export default function ViewSiteVisitReport({ route }) {
  LogBox.ignoreAllLogs();
  const {
    id,
    site_id,
    location,
    comments,
    longitude,
    latitude,
    userName,
    siteName,
    created_at,
    update,
  } = route.params;
  const dateAndTime = splitCurrentNumericArray(created_at);
  const source = {
    html: `${comments}`,
  };
  return (
    <SafeAreaProvider style={{ flex: 1, paddingTop: hp(7) }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={ReportViewStyle.container}>
          <View style={ReportViewStyle.headerView}>
            <ReportViewItem
              title={"Time"}
              title2={"Created By"}
              title3={"Site Name"}
              firstText={dateAndTime}
              secondText={userName}
              thirdText={siteName}
            />
          </View>
          <View style={{ marginTop: 10, ...ReportViewStyle.headerView }}>
            <ReportViewItem
              title={"Location"}
              title2={""}
              title3={""}
              firstText={location}
              secondText={""}
              thirdText={""}
            />
          </View>
          {/* <View
            style={{
              backgroundColor: "white",
              paddingVertical: hp(3),
              borderRadius: 20,
              marginVertical: 10,
              paddingHorizontal: 7,
            }}
          >
            <View style={{ width: "100%" }}>
              <Text
                style={{
                  width: "100%",
                  fontFamily: "OpenSans-Bold",
                  color: "#9E9E9E",
                }}
              >
                Location:{"        "}
                <Text
                  style={{
                    fontFamily: "OpenSans-Regular",
                    color: Platform.OS == "ios" ? "#121212" : "#636262",
                  }}
                >
                  {location}
                </Text>
              </Text>
            </View>
          </View> */}

          <View
            style={[ReportViewStyle.detailView, ReportViewStyle.detailHeading]}
          >
            <TextHeading title={" Comments:"} />

            <ScrollView style={[ReportViewStyle.detailText]}>
              <RenderHtml contentWidth={screenWidth} source={source} />
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
