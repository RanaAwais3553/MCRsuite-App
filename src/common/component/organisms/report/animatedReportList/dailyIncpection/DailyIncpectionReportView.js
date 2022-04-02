import React from "react";
import { View, Text, ScrollView, Dimensions, PixelRatio } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TextHeading from "../../../../atom/TextHeading";
import { splitCurrentNumericArray } from "../../../../../../../utils/utils";
import ReportViewItem from "../../../../molecules/ReportView";
import { ReportViewStyle } from "../../../../../styles/ReportViewStyle";
import { hp } from "../../../../../styles/Dimensions";
import { ReportFormStyle } from "../../../../../styles/ReportFormStyle";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import RenderHtml from "react-native-render-html";
let { height: screenHeight, width: screenWidth } = Dimensions.get("window");

export default function ViewDailyInspectionReport({ route }) {
  const {
    id,
    site_Id,
    obstruction_frees,
    fire_extinguishers,
    poster_free,
    report_hazard,
    additional_info,
    userName,
    siteName,
    created_at,
    update,
  } = route.params;
  const dateAndTime = splitCurrentNumericArray(created_at);
  const source = {
    html: `${additional_info}`,
  };
  return (
    <SafeAreaProvider style={{ flex: 1, paddingTop: hp(7) }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={ReportViewStyle.container}>
          <View
            style={{
              marginBottom: 8,
              ...ReportViewStyle.headerView,
            }}
          >
            <ReportViewItem
              title={"Time of Incident"}
              title2={"Created By"}
              title3={"Site Name"}
              firstText={dateAndTime}
              secondText={userName}
              thirdText={siteName}
            />
          </View>
          <View
            style={{
              ...ReportViewStyle.checkboxView,
              flex: screenHeight < 650 ? 0.5 : 1,
            }}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ paddingBottom: hp(2) }}
            >
              <View
                style={{
                  ...ReportViewStyle.checkboxText,
                }}
              >
                <BouncyCheckbox
                  size={hp(3)}
                  fillColor="#3155a5"
                  isChecked={obstruction_frees == "Yes" ? true : false}
                  disableBuiltInState={true}
                  unfillColor="#FFFFFF"
                  text={
                    "All fire exits and corridors are clear and free of obstructions"
                  }
                  textStyle={ReportFormStyle.textStyle}
                />
              </View>

              <View style={ReportViewStyle.checkboxText}>
                <BouncyCheckbox
                  size={hp(3)}
                  fillColor="#3155a5"
                  isChecked={fire_extinguishers == "Yes" ? true : false}
                  disableBuiltInState={true}
                  unfillColor="#FFFFFF"
                  text={"Fire extinguishers are in place and intact"}
                  textStyle={ReportFormStyle.textStyle}
                />
              </View>

              <View style={ReportViewStyle.checkboxText}>
                <BouncyCheckbox
                  size={hp(3)}
                  fillColor="#3155a5"
                  isChecked={poster_free == "Yes" ? true : false}
                  disableBuiltInState={true}
                  unfillColor="#FFFFFF"
                  text={
                    "Windows of exit door and walls are clear of public posters"
                  }
                  textStyle={ReportFormStyle.textStyle}
                />
              </View>

              <View style={ReportViewStyle.checkboxText}>
                <BouncyCheckbox
                  size={hp(3)}
                  fillColor="#3155a5"
                  isChecked={report_hazard == "Yes" ? true : false}
                  disableBuiltInState={true}
                  unfillColor="#FFFFFF"
                  text={"Report hazard"}
                  textStyle={ReportFormStyle.textStyle}
                />
              </View>

              <View
                style={{
                  marginVertical: 5,
                }}
              >
                <View style={ReportViewStyle.checkboxText}></View>
              </View>
            </ScrollView>
          </View>

          <View
            style={[ReportViewStyle.detailView, ReportViewStyle.detailHeading]}
          >
            <TextHeading title={" Additional Information:"} />

            <ScrollView style={[ReportViewStyle.detailText]}>
              <RenderHtml contentWidth={screenWidth} source={source} />
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
