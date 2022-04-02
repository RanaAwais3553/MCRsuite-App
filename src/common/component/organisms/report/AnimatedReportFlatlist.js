import React, { useState, useEffect } from "react";
import { ListItem, Avatar, SpeedDial } from "react-native-elements";
import { View, StyleSheet, Text, Animated, Dimensions } from "react-native";
import AnimatedReportList from "./AnimatedReportList";

const AnimatedReportFlatList = ({ navigation, reportList }) => {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <>
      {reportList.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Reports Not Found</Text>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Animated.FlatList
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
            keyExtractor={(item) => item.id}
            data={reportList}
            renderItem={(itemData) => (
              <AnimatedReportList
                navigation={navigation}
                scrollY={scrollY}
                itemData={itemData}
              />
            )}
          />
          <View
            style={{
              flex: 1,
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <SpeedDial.Action
              buttonStyle={{
                backgroundColor: "#d14e52",
                width: 50,
                height: 50,
              }}
              icon={{ name: "add", size: 28, left: -2, top: -2, color: "#fff" }}
              //  title="Add"
              onPress={() => navigation.navigate("ReportForm")}
            />
          </View>
        </View>
      )}
    </>
  );
};
export default AnimatedReportFlatList;
