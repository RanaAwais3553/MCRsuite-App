import React, { useState, useRef, useEffect } from "react";
import { ListItem, Avatar, SpeedDial } from "react-native-elements";
import { Alert, Animated, StyleSheet, Dimensions } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import RenderHtml from "react-native-render-html";
let { height: screenHeight, width: screenWidth } = Dimensions.get("window");

function AnimatedReportList({ itemData, navigation, scrollY }) {
  //   const scrollY = useRef(new Animated.Value(0)).current;

  const inputRange = [
    -1,
    0,
    (screenHeight * 0.1 + 110) * itemData.index,
    (screenHeight * 0.1 + 110) * (itemData.index + 5),
  ];
  const scale = 1;
  const opacity = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0],
  });
  const Offset = scrollY.interpolate({
    inputRange,
    outputRange: [0, 0, 0, 500],
  });

  const deleteHandler = () => {
    return Alert.alert("Title", "Are you sure you want delete a Report?", [
      { text: "Okay" },
    ]);
  };
  const source = {
    html: `${itemData.item.description}`,
  };
  return (
    <Animated.View
      style={{
        transform: [{ scale: scale }, { translateX: Offset }],
        opacity: opacity,
        marginTop: 10,
      }}
    >
      <ListItem bottomDivider style={{ flex: 1, marginTop: 30 }}>
        {/* <Avatar source={{ uri: itemData.item.avatar_url }} /> */}
        <ListItem.Content style={styless.surface}>
          <ListItem.Title numberOfLines={1} ellipsizeMode="tail">
            {itemData.item.location_of_incident}
          </ListItem.Title>
          <ListItem.Subtitle numberOfLines={4} ellipsizeMode="tail">
            {/* {itemData.item.description} */}
            <RenderHtml contentWidth={140} source={source} />
          </ListItem.Subtitle>
        </ListItem.Content>
        <MaterialIcons
          name="remove-red-eye"
          onPress={() => {
            navigation.navigate("FormView", {
              time: itemData.item.time,
              location: itemData.item.location_of_incident,
              description: itemData.item.description,
            });
          }}
          color="#3155a5"
          size={28}
        />
        <MaterialIcons
          name="edit"
          onPress={() => navigation.navigate("ReportForm")}
          color="#3155a5"
          size={28}
        />
        <MaterialIcons
          name="delete"
          onPress={deleteHandler}
          color="#d14e52"
          size={28}
        />
        {/* <ListItem.Chevron /> */}
      </ListItem>
    </Animated.View>
  );
}

export default AnimatedReportList;
const styless = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  surface: {
    height: screenHeight * 0.15,
    // marginTop: 15,
    padding: 8,
    marginHorizontal: 10,
    borderRadius: 8,
  },
});
