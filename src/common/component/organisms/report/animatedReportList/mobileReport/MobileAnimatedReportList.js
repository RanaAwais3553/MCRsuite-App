// import React, { useState, useRef, useEffect } from "react";
// import { ListItem, Avatar, SpeedDial } from "react-native-elements";
// import {
//   Alert,
//   Animated,
//   useWindowDimensions,
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
// } from "react-native";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import { splitCurrentNumericArray } from "../../../../../../../utils/utils";
// let { height: screenHeight, width: screenWidth } = Dimensions.get("window");

// function MobileAnimatedReportList({
//   itemData,
//   navigation,
//   scrollY,
//   onPresses,
// }) {
//   const { width } = useWindowDimensions();

//   const inputRange = [
//     -1,
//     0,
//     (screenHeight * 0.1 + 110) * itemData.index,
//     (screenHeight * 0.1 + 110) * (itemData.index + 5),
//   ];
//   const scale = 1;
//   const opacity = scrollY.interpolate({
//     inputRange,
//     outputRange: [1, 1, 1, 0],
//   });
//   const Offset = scrollY.interpolate({
//     inputRange,
//     outputRange: [0, 0, 0, 500],
//   });
//   const dateAndTime = splitCurrentNumericArray(itemData.item.created_at);

//   return (
//     <View>
//       <ListItem bottomDivider style={{ flex: 1, marginTop: 30 }}>
//         <ListItem.Content style={styless.surface}>
//           <Text
//             numberOfLines={1}
//             ellipsizeMode="tail"
//             style={{ fontFamily: "OpenSans-Bold", fontSize: 16 }}
//           >
//             {itemData.item.site.name}
//           </Text>
//           <ListItem.Title numberOfLines={1} ellipsizeMode="tail">
//             {itemData.item.user.full_name}
//           </ListItem.Title>
//           <ListItem.Title numberOfLines={1} ellipsizeMode="tail">
//             {dateAndTime}
//           </ListItem.Title>
//         </ListItem.Content>
//         <MaterialIcons
//           name="remove-red-eye"
//           onPress={() => {
//             navigation.navigate("MobileReportFormView", {
//               id: itemData.item.id,
//               site_id: itemData.item.site_id,
//               location: itemData.item.location,
//               form_type: itemData.item.form_type,
//               doors_unlocked: itemData.item.doors_unlocked,
//               alarm_disarmed: itemData.item.alarm_disarmed,
//               full_patrol: itemData.item.full_patrol,
//               alarm_set: itemData.item.alarm_set,
//               doors_locked: itemData.item.doors_locked,
//               property_checked: itemData.item.property_checked,
//               alarm_response_reason: itemData.item.alarm_response_reason,
//               details: itemData.item.details,
//               informed_control: itemData.item.informed_control,
//               vehicle_registration: itemData.item.vehicle_registration,
//               owner_present: itemData.item.owner_present,
//               further_issues: itemData.item.further_issues,
//               previous_driver_name: itemData.item.previous_driver_name,
//               damage_description: itemData.item.damage_description,
//               situation: itemData.item.situation,
//               attachment: itemData.item.attachments,
//               comments: itemData.item.comments,
//               further_attention: itemData.item.further_attention,
//               accurate_report: itemData.item.accurate_report,
//               userName: itemData.item.user.full_name,
//               siteName: itemData.item.site.name,
//               created_at: itemData.item.created_at,
//               update: false,
//             });
//           }}
//           color="#3155a5"
//           size={28}
//         />
//         <MaterialIcons
//           name="edit"
//           onPress={() =>
//             navigation.navigate("MobileReportForm", {
//               id: itemData.item.id,
//               site_id: itemData.item.site_id,
//               location: itemData.item.location,
//               form_type: itemData.item.form_type,
//               doors_unlocked: itemData.item.doors_unlocked,
//               alarm_disarmed: itemData.item.alarm_disarmed,
//               full_patrol: itemData.item.full_patrol,
//               alarm_set: itemData.item.alarm_set,
//               doors_locked: itemData.item.doors_locked,
//               property_checked: itemData.item.property_checked,
//               alarm_response_reason: itemData.item.alarm_response_reason,
//               details: itemData.item.details,
//               informed_control: itemData.item.informed_control,
//               vehicle_registration: itemData.item.vehicle_registration,
//               owner_present: itemData.item.owner_present,
//               further_issues: itemData.item.further_issues,
//               previous_driver_name: itemData.item.previous_driver_name,
//               damage_description: itemData.item.damage_description,
//               situation: itemData.item.situation,
//               attachment: itemData.item.attachments,
//               comments: itemData.item.comments,
//               further_attention: itemData.item.further_attention,
//               accurate_report: itemData.item.accurate_report,
//               update: true,
//             })
//           }
//           color="#3155a5"
//           size={28}
//         />
//         <MaterialIcons
//           name="delete"
//           onPress={onPresses}
//           color="#d14e52"
//           size={28}
//         />
//         {/* <ListItem.Chevron /> */}
//       </ListItem>
//     </View>
//   );
// }

// export default MobileAnimatedReportList;
// const styless = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   surface: {
//     height: screenHeight * 0.15,
//     // marginTop: 15,
//     overflow: "hidden",
//     padding: 8,
//     marginHorizontal: 10,
//     borderRadius: 8,
//   },
// });

import React, { useState, useRef, useEffect } from "react";
import {
  Alert,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { splitCurrentNumericArray } from "../../../../../../../utils/utils";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "../../../../../styles/DimensionsTool";
let { height: screenHeight, width: screenWidth } = Dimensions.get("window");
function MobileAnimatedReportList({
  itemData,
  navigation,
  scrollY,
  onPresses,
}) {
  let scaleValue = new Animated.Value(0); // declare an animated value
  let scaleValue1 = new Animated.Value(0); // declare an animated value
  let scaleValue2 = new Animated.Value(0); // declare an animated value
  const dateAndTime = splitCurrentNumericArray(itemData.item.created_at);
  const cardScale = scaleValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.5, 2.0],
  });
  const cardScale1 = scaleValue1.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.5, 2.0],
  });
  const cardScale2 = scaleValue2.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.5, 2.0],
  });
  let transformStyle = { ...styles.cards, transform: [{ scale: cardScale }] };
  let transformStyle1 = { ...styles.cards, transform: [{ scale: cardScale1 }] };
  let transformStyle2 = { ...styles.cards, transform: [{ scale: cardScale2 }] };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "column" }}>
        <View style={{ alignItems: "center" }}>
          <View
            style={styles.card}
            activeOpacity={0.7}
            // onPress={onSelect}
          >
            <View
              style={{
                flexDirection: "column",
                margin: 8,
                padding: 8,
                justifyContent: "space-evenly",
                alignItems: "flex-start",
              }}
            >
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
                {itemData.item.site.name}
              </Text>
              <Text style={styles.code}> {dateAndTime}</Text>
            </View>
            <View style={styles.price}>
              <Animated.View style={transformStyle}>
                <TouchableWithoutFeedback
                  onPressIn={() => {
                    scaleValue.setValue(0);
                    Animated.timing(scaleValue, {
                      toValue: 1,
                      duration: 250,
                      // easing: Easing.linear,
                      useNativeDriver: true,
                    }).start();
                    // cardAction();
                  }}
                  onPressOut={() => {
                    Animated.timing(scaleValue, {
                      toValue: 0,
                      duration: 100,
                      // easing: Easing.linear,
                      useNativeDriver: true,
                    }).start();
                  }}
                >
                  <MaterialIcons
                    style={{ paddingHorizontal: 5 }}
                    name="remove-red-eye"
                    onPress={() => {
                      navigation.navigate("MobileReportFormView", {
                        id: itemData.item.id,
                        site_id: itemData.item.site_id,
                        location: itemData.item.location,
                        form_type: itemData.item.form_type,
                        doors_unlocked: itemData.item.doors_unlocked,
                        alarm_disarmed: itemData.item.alarm_disarmed,
                        full_patrol: itemData.item.full_patrol,
                        alarm_set: itemData.item.alarm_set,
                        doors_locked: itemData.item.doors_locked,
                        property_checked: itemData.item.property_checked,
                        alarm_response_reason:
                          itemData.item.alarm_response_reason,
                        details: itemData.item.details,
                        informed_control: itemData.item.informed_control,
                        vehicle_registration:
                          itemData.item.vehicle_registration,
                        owner_present: itemData.item.owner_present,
                        further_issues: itemData.item.further_issues,
                        previous_driver_name:
                          itemData.item.previous_driver_name,
                        damage_description: itemData.item.damage_description,
                        situation: itemData.item.situation,
                        attachment: itemData.item.attachments,
                        comments: itemData.item.comments,
                        further_attention: itemData.item.further_attention,
                        accurate_report: itemData.item.accurate_report,
                        userName: itemData.item.user.full_name,
                        siteName: itemData.item.site.name,
                        created_at: itemData.item.created_at,
                        update: false,
                      });
                    }}
                    color="#3155A5"
                    size={28}
                  />
                </TouchableWithoutFeedback>
              </Animated.View>
              <Animated.View style={transformStyle1}>
                <TouchableWithoutFeedback
                  onPressIn={() => {
                    scaleValue1.setValue(0);
                    Animated.timing(scaleValue1, {
                      toValue: 1,
                      duration: 250,
                      // easing: Easing.linear,
                      useNativeDriver: true,
                    }).start();
                    // cardAction();
                  }}
                  onPressOut={() => {
                    Animated.timing(scaleValue1, {
                      toValue: 0,
                      duration: 100,
                      // easing: Easing.linear,
                      useNativeDriver: true,
                    }).start();
                  }}
                >
                  <MaterialIcons
                    style={{ paddingHorizontal: 5 }}
                    name="edit"
                    onPress={() =>
                      navigation.navigate("MobileReportForm", {
                        id: itemData.item.id,
                        site_id: itemData.item.site_id,
                        location: itemData.item.location,
                        form_type: itemData.item.form_type,
                        doors_unlocked: itemData.item.doors_unlocked,
                        alarm_disarmed: itemData.item.alarm_disarmed,
                        full_patrol: itemData.item.full_patrol,
                        alarm_set: itemData.item.alarm_set,
                        doors_locked: itemData.item.doors_locked,
                        property_checked: itemData.item.property_checked,
                        alarm_response_reason:
                          itemData.item.alarm_response_reason,
                        details: itemData.item.details,
                        informed_control: itemData.item.informed_control,
                        vehicle_registration:
                          itemData.item.vehicle_registration,
                        owner_present: itemData.item.owner_present,
                        further_issues: itemData.item.further_issues,
                        previous_driver_name:
                          itemData.item.previous_driver_name,
                        damage_description: itemData.item.damage_description,
                        situation: itemData.item.situation,
                        attachment: itemData.item.attachments,
                        comments: itemData.item.comments,
                        further_attention: itemData.item.further_attention,
                        accurate_report: itemData.item.accurate_report,
                        update: true,
                      })
                    }
                    color="#3155A5"
                    size={28}
                  />
                </TouchableWithoutFeedback>
              </Animated.View>
              <Animated.View style={transformStyle2}>
                <TouchableWithoutFeedback
                  onPressIn={() => {
                    scaleValue2.setValue(0);
                    Animated.timing(scaleValue2, {
                      toValue: 1,
                      duration: 100,
                      // easing: Easing.linear,
                      useNativeDriver: true,
                    }).start();
                    // cardAction();
                  }}
                  onPressOut={() => {
                    Animated.timing(scaleValue2, {
                      toValue: 0,
                      duration: 50,
                      // easing: Easing.linear,
                      useNativeDriver: true,
                    }).start();
                  }}
                >
                  <MaterialIcons
                    style={{ paddingHorizontal: 5 }}
                    name="delete"
                    onPress={onPresses}
                    color="#D14E52"
                    size={28}
                  />
                </TouchableWithoutFeedback>
              </Animated.View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  name: {
    fontFamily: "Verdana",
    fontSize: 18,
  },
  card: {
    // opacity: 15%, y-asix: 4, blur: 15
    flexDirection: "row",
    marginBottom: 8,
    padding: 5,
    height: 93,
    width: widthPercentageToDP("100%") * 0.98,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 8,
    shadowColor: "#000",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 4,
    zIndex: 5,
  },
  title: { fontSize: 16, fontFamily: "Avenir-Heavy", color: "#042C5C" },
  code: { fontSize: 13, fontFamily: "Avenir-Heavy", color: "#77869E" },
  price: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    end: 0,
    bottom: 0,
    padding: 10,
    margin: 8,
    // fontSize: 16,
  },
});
export default MobileAnimatedReportList;
