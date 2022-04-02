import React from "react";
import { View, Text, FlatList } from "react-native";
import ReportTypeCard from "../../atom/ReportTypeCard";
import LogoImage from "../../atom/LogoImage";
import { data } from "../../../../../data/ListData";
import AllReportType from "./AllReportType";

function ReportTypeCardFlatlist({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        // backgroundColor: "#121212",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flex: 0.34,
          // backgroundColor: "#121212",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <LogoImage logoHeight={100} logoWidth={100} />
      </View>
      <View
        style={{
          flex: 0.7,
          // backgroundColor: "#121212",
        }}
      >
        <AllReportType navigation={navigation} />
        {/* <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <View
              style={{
                flex: 1,
                width: "100%",
              }}
            >
              <ReportTypeCard
                title={itemData.item.title}
                onSelect={() =>
                  navigation.navigate("ReportList", {
                    reportTitle: itemData.item.title,
                  })
                }
              />
            </View>
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        /> */}
      </View>
    </View>
  );
}

export default ReportTypeCardFlatlist;
