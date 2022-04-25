import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { SiteViewStyle } from "../../../styles/SiteViewStyle";
import Logo from "../../atom/Logo";
import { ListItem, SpeedDial } from "react-native-elements";
import SiteviewCard from "../../molecules/SiteViewCard";
import Calender from "../../../../screens/calender/Calender";
import { wp } from "../../../styles/Dimensions";
import { useDispatch, useSelector } from "react-redux";
import { fetchSiteEvents } from "../../../../store/action/fetchSiteEvents";
import ActivityIndicatorComponent from "../../atom/ActivityIndicatorComponent";
export default function SitesViewOrgan({
  name,
  email,
  address,
  sitesTimeSlotsArray,
  navigation,
  id,
}) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const siteEvent = async () => {
      setError(null);
      setIsLoading(true);
      try {
        await dispatch(fetchSiteEvents(id));
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    siteEvent();
  }, []);
  const { eventCalendar, siteEventsArray, activeDate } = useSelector(
    (state) => state.siteEvents
  );
  console.log("site events text is :!.........", eventCalendar, activeDate);
  return (
    <View style={{ flexGrow: 1 }}>
      <View style={SiteViewStyle.userDetail}>
        <SiteviewCard
          name={name}
          email={email}
          address={address}
          sitesTimeSlotsArray={sitesTimeSlotsArray}
        />
      </View>
      <View
        style={{
          flexGrow: 6,
          backgroundColor: "#f2f2f2",
          paddingHorizontal: wp(6),
        }}
      >
        {isLoading ? (
          <ActivityIndicatorComponent />
        ) : (
          <Calender
            eventCalendar={eventCalendar}
            activeDate={activeDate}
            siteEventsArray={siteEventsArray}
            navigation={navigation}
          />
        )}
      </View>

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
            width: 40,
            height: 40,
          }}
          icon={{
            name: "add",
            size: 28,
            left: -2,
            top: -2,
            color: "#fff",
          }}
          titleStyle={{
            backgroundColor: "#042C5C",
            color: "#fff",
            fontFamily: "OpenSans-Bold",
          }}
          title="Create Event"
          onPress={() => {
            navigation.navigate("CreateEvent", {
              id: id,
            });
          }}
        />
      </View>
    </View>
  );
}
