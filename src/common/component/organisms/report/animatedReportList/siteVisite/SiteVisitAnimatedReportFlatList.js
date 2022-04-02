import React, { useState, useEffect } from "react";
import { SpeedDial } from "react-native-elements";
import { View, Text, Alert, LogBox, Animated, Dimensions } from "react-native";
import SiteVisitAnimatedReportList from "./SiteVisiteAnimatedReportList";
import siteVisitHook from "../../../../../customHook/fetchReportData/siteVisitHook";
import ActivityIndicatorComponent from "../../../../atom/ActivityIndicatorComponent";
import { useSelector, useDispatch } from "react-redux";
import { deleteSiteVisitReport } from "../../../../../../store/action/reportAction";
import SnackMessage from "../../../../atom/SnackMessage";
import ModalResponse from "../../../../molecules/ModalResponse";

const SiteVisitAnimatedReportFlatList = ({ navigation, reportList }) => {
  LogBox.ignoreAllLogs();
  const dispatch = useDispatch();
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const { deleteError, isLoading, deletesuccess } = useSelector(
    (state) => state.reportList
  );
  const { isLoadings, errors } = siteVisitHook();
  const siteVisitReportArray = useSelector(
    (state) => state.reportList.siteVisitReportArray
  );

  const reportDeleteHandler = async (id) => {
    Alert.alert(
      "Are your sure?",
      "Are you sure you want to delete this report?",
      [
        {
          text: "Yes",
          onPress: async () => {
            await dispatch(deleteSiteVisitReport(id));
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
        {isLoadings || isLoading ? (
          <ActivityIndicatorComponent />
        ) : (
          <>
            {siteVisitReportArray.length === 0 ? (
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
                        navigation.navigate("SiteVisitReportForm", {
                          id: null,
                          site_Id: null,
                          location: "",
                          comments: "",
                          longitude: "",
                          latitude: "",
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
                  <View style={{ marginTop: 12 }}>
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
                    Site Visit Reports:
                  </Text>
                </View>
                <Animated.FlatList
                  showsVerticalScrollIndicator={false}
                  onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                  )}
                  keyExtractor={(item) => item.id}
                  data={siteVisitReportArray}
                  renderItem={(itemData) => (
                    <SiteVisitAnimatedReportList
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
                      navigation.navigate("SiteVisitReportForm", {
                        id: null,
                        site_Id: null,
                        location: "",
                        comments: "",
                        longitude: "",
                        latitude: "",
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
export default SiteVisitAnimatedReportFlatList;
