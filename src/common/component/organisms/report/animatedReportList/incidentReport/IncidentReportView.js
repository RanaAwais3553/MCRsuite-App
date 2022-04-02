import React from "react";
import {
  View,
  Text,
  Dimensions,
  LogBox,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TextHeading from "../../../../atom/TextHeading";
import TextView from "../../../../atom/TextView";
import ReportViewItem from "../../../../molecules/ReportView";
import { ReportViewStyle } from "../../../../../styles/ReportViewStyle";
import { hp, wp } from "../../../../../styles/Dimensions";
import RenderHtml from "react-native-render-html";
import DownloadFile from "../../../../molecules/DownloadFile";
let { height: screenHeight, width: screenWidth } = Dimensions.get("window");
export default function ViewIncidentReports({ route }) {
  LogBox.ignoreAllLogs();
  const {
    id,
    site_id,
    time,
    description,
    location_of_incident,
    action,
    result,
    attachments,
    userName,
    siteName,
    created_at,
    update,
  } = route.params;
  const source = {
    html: `${description}`,
  };

  return (
    <SafeAreaProvider style={{ paddingTop: hp(7), flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <View style={{ marginBottom: 20 }} /> */}
        <ScrollView>
          <View style={ReportViewStyle.container}>
            <View style={ReportViewStyle.headerView}>
              <ReportViewItem
                title={"Time"}
                title2={"Created By"}
                title3={"Site Name"}
                firstText={time}
                secondText={userName}
                thirdText={siteName}
              />
            </View>
            <View style={{ marginTop: 11, ...ReportViewStyle.headerView }}>
              <ReportViewItem
                title={"Result"}
                title2={"Action"}
                title3={"Location of Incident"}
                firstText={result}
                secondText={action}
                thirdText={location_of_incident}
              />
            </View>
            {/* <View
              style={{
                marginTop: 10,
                ...ReportViewStyle.headerView,
                paddingHorizontal: 10,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <TextHeading title={"Result:"} />
                <TextView text={result} />
              </View>
              <View
                style={{
                  ...ReportViewStyle.headerCard,
                  paddingBottom: hp(1.2),
                }}
              >
                <TextHeading title={"Action:"} />
                <TextView text={action} />
              </View>
              <View style={{ width: "100%" }}>
                <Text
                  style={{
                    width: "100%",
                    fontFamily: "OpenSans-Bold",
                    color: "#9e9e9e",

                    // backgroundColor: "#121212",
                  }}
                >
                  Location of Incident:{"           "}
                  <Text
                    style={{
                      fontFamily: "OpenSans-Regular",
                      color: Platform.OS == "ios" ? "#121212" : "#636262",
                    }}
                  >
                    {location_of_incident}
                  </Text>
                </Text>
              </View>
            </View> */}

            <View
              style={{
                flexGrow: 0.1,
                //    flex: 0.4,
                justifyContent: "center",
                backgroundColor: "white",
                borderRadius: 20,
                marginVertical: 10,
                paddingHorizontal: 7,
              }}
            >
              <View
                style={{
                  // flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 5,
                  paddingEnd: 10,
                  justifyContent: "center",
                  // paddingVertical: hp(2),
                }}
              >
                <DownloadFile attachments={attachments} />
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#fff",
                borderRadius: 20,
                minHeight: hp(30),
                paddingTop: 10,
                paddingHorizontal: 10,
                marginBottom: 7,
                paddingBottom: 8,
              }}
            >
              <TextHeading title={" Description:"} />

              <ScrollView
                style={[ReportViewStyle.detailText]}
                showsVerticalScrollIndicator={false}
              >
                <RenderHtml contentWidth={screenWidth} source={source} />
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
