import React from "react";
import { View, Text, PixelRatio } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { fontStyle, weight } from "../../pixelPerfectSize/fontSize";
import { ReportViewStyle } from "../../../styles/ReportViewStyle";

import TextHeading from "../../atom/TextHeading";
import TextView from "../../atom/TextView";
import RenderHtml from "react-native-render-html";
import ReportViewItem from "../../molecules/ReportView";

export default function ReportView({ route }) {
  const { time, location, description } = route.params;
  // alert(fontStyle.medium);
  const source = {
    html: `${description}`,
  };
  return (
    <View style={ReportViewStyle.container}>
      <View style={ReportViewStyle.headerView}>
        {/* <View style={ReportViewStyle.headerCard}>
          <Text style={[fontStyle.small, weight.large]}>Time Of Incident:</Text>
          <Text style={[fontStyle.small, weight.small]}>12-12-2018</Text>
        </View> */}
        <ReportViewItem time={time} location={location} />
      </View>
      <View style={ReportViewStyle.checkboxView}>
        <ScrollView>
          {/* <Text
            style={[ReportViewStyle.checkboxText, fontStyle.small, weight.small]}
          >
            CheckBox
          </Text> */}
          <View style={ReportViewStyle.checkboxText}>
            <TextView text={"12-12-2016"} />
          </View>

          <View style={ReportViewStyle.checkboxText}>
            <TextView text={"12-12-2015"} />
          </View>

          <View style={ReportViewStyle.checkboxText}>
            <TextView text={"12-12-2014"} />
          </View>

          <View style={ReportViewStyle.checkboxText}>
            <TextView text={"12-12-2013"} />
          </View>

          <View
            style={{
              marginVertical: 5,
            }}
          >
            <View style={ReportViewStyle.checkboxText}>
              <TextView text={"12-12-2012"} />
            </View>
          </View>
          <Text
            style={[
              ReportViewStyle.checkboxText,
              fontStyle.small,
              weight.small,
            ]}
          >
            CheckBox
          </Text>
        </ScrollView>
      </View>

      <View style={[ReportViewStyle.detailView, ReportViewStyle.detailHeading]}>
        {/* <Text
          style={[
            ReportViewStyle.detailHeading,
            fontStyle.smallx,
            weight.medium,
          ]}
        >
          Additional Information:
        </Text> */}
        <TextHeading title={" Additional Information:"} />

        <ScrollView
          style={[ReportViewStyle.detailText, fontStyle.small, weight.small]}
        >
          <RenderHtml contentWidth={140} source={source} />
        </ScrollView>
      </View>
    </View>
  );
}
