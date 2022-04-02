import React, { useState, useEffect } from "react";
import { SpeedDial } from "react-native-elements";
import { View, Alert, Text, LogBox, Animated, Dimensions } from "react-native";
import MobileAnimatedReportList from "./MobileAnimatedReportList";
import mobileReportHook from "../../../../../customHook/fetchReportData/mobileHook";
import ActivityIndicatorComponent from "../../../../atom/ActivityIndicatorComponent";
import { deleteMobileReport } from "../../../../../../store/action/reportAction";
import { useSelector, useDispatch } from "react-redux";
import SnackMessage from "../../../../atom/SnackMessage";
import ModalResponse from "../../../../molecules/ModalResponse";

const MobileAnimatedReportFlatList = ({ navigation }) => {
  const dispatch = useDispatch();
  LogBox.ignoreAllLogs();
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const { deleteError, isLoading, deletesuccess } = useSelector(
    (state) => state.reportList
  );
  const { isLoadings, errors } = mobileReportHook();
  const mobileReportArray = useSelector(
    (state) => state.reportList.mobileReportArray
  );
  const reportDeleteHandler = async (id) => {
    Alert.alert(
      "Are your sure?",
      "Are you sure you want to delete this report?",
      [
        {
          text: "Yes",
          onPress: async () => {
            await dispatch(deleteMobileReport(id));
          },
        },
        {
          text: "No",
        },
      ]
    );
  };

  const modalToggleState = () => {
    navigation.goBack();
  };
  if (errors) {
    return (
      <ModalResponse message={errors} modalToggleState={modalToggleState} />
    );
  } else {
    return (
      <>
        {isLoading || isLoadings ? (
          <ActivityIndicatorComponent />
        ) : (
          <>
            {mobileReportArray.length === 0 ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-end",
                  }}
                >
                  <Text>There is no Report to Display</Text>
                </View>
                <View
                  style={{
                    flex: 0.5,
                    // position: "absolute",
                    justifyContent: "flex-end",
                    // backgroundColor: "#121212",
                    alignItems: "flex-end",
                    alignSelf: "stretch",
                  }}
                >
                  <View
                    style={{
                      flex: 0.5,
                      alignSelf: "stretch",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      // position: "absolute",
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
                      icon={{
                        name: "add",
                        size: 28,
                        left: -2,
                        top: -2,
                        color: "#fff",
                      }}
                      //  title="Add"
                      onPress={() =>
                        navigation.navigate("MobileReportForm", {
                          id: null,
                          site_id: null,
                          location: "",
                          form_type: "",
                          doors_unlocked: "No",
                          alarm_disarmed: "No",
                          full_patrol: "No",
                          alarm_set: "No",
                          doors_locked: "No",
                          property_checked: "No",
                          alarm_response_reason: "",
                          details: "",
                          informed_control: "No",
                          vehicle_registration: "",
                          owner_present: "No",
                          further_issues: "",
                          previous_driver_name: "",
                          damage_description: "",
                          situation: "",
                          attachment: "",
                          comments: "",
                          further_attention: "No",
                          accurate_report: "No",
                          update: false,
                        })
                      }
                    />
                  </View>
                </View>
              </View>
            ) : (
              <View style={{ flex: 1, marginTop: 20 }}>
                {(!!deleteError || !!deletesuccess) && (
                  <View
                    style={{
                      marginTop: 12,
                      // backgroundColor: "#121212",
                    }}
                  >
                    <SnackMessage
                      success={deletesuccess}
                      visible={""}
                      error={deleteError}
                      setVisibleFunction={() => console.log("snack call")}
                    />
                  </View>
                )}
                <View
                  style={{
                    flexDirection: "column",
                    margin: 6,
                    padding: 6,
                    justifyContent: "space-evenly",
                    alignItems: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: "Avenir-Heavy",
                      fontWeight: "bold",
                      color: "#042C5C",
                    }}
                  >
                    Mobile Reports:
                  </Text>
                </View>
                <Animated.FlatList
                  showsVerticalScrollIndicator={false}
                  onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                  )}
                  keyExtractor={(item) => item.id}
                  data={mobileReportArray}
                  renderItem={(itemData) => (
                    <MobileAnimatedReportList
                      navigation={navigation}
                      scrollY={scrollY}
                      itemData={itemData}
                      onPresses={() => reportDeleteHandler(itemData.item.id)}
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
                    icon={{
                      name: "add",
                      size: 28,
                      left: -2,
                      top: -2,
                      color: "#fff",
                    }}
                    //  title="Add"
                    onPress={() =>
                      navigation.navigate("MobileReportForm", {
                        id: null,
                        site_id: null,
                        location: "",
                        form_type: "",
                        doors_unlocked: "No",
                        alarm_disarmed: "No",
                        full_patrol: "No",
                        alarm_set: "No",
                        doors_locked: "No",
                        property_checked: "No",
                        alarm_response_reason: "",
                        details: "",
                        informed_control: "No",
                        vehicle_registration: "",
                        owner_present: "No",
                        further_issues: "",
                        previous_driver_name: "",
                        damage_description: "",
                        situation: "",
                        attachment: "",
                        comments: "",
                        further_attention: "No",
                        accurate_report: "No",
                        update: false,
                      })
                    }
                  />
                </View>
              </View>
            )}
          </>
        )}
      </>
    );
  }
};
export default MobileAnimatedReportFlatList;
