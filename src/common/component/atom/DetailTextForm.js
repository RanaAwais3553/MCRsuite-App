import React from "react";
import { View, Dimensions } from "react-native";
import RenderHtml from "react-native-render-html";
import { ReportViewStyle } from "../../styles/ReportViewStyle";
import TextHeading from "./TextHeading";
let { height: screenHeight, width: screenWidth } = Dimensions.get("window");
function DetailTextForm({ text }) {
  const source = {
    html: `${text}`,
  };
  return (
    <View
      style={{
        // flexGrow: 1,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 10,
      }}
    >
      <TextHeading title={"Comments:"} />
      <RenderHtml contentWidth={screenWidth} source={source} />
    </View>
  );
}

export default DetailTextForm;
