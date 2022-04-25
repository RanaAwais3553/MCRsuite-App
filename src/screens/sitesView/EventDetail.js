import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { hp, wp } from "../../common/styles/Dimensions";
import TextHeading from "../../common/component/atom/TextHeading";
import { ScrollView } from "react-native-gesture-handler";
export default function EventDetail({ route, navigation }) {
  const { id, siteEventsArray } = route.params;
  const selectedEvent = siteEventsArray.find((event) => event.id == id);
  console.log("selected event is:!...", selectedEvent);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 2,
          }}
        >
          <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
            Event Info
          </Text>
        </View>
        <TextHeading title={"Event Name"} />
        <View style={styles.card}>
          <Text style={{ color: "black" }}>{selectedEvent.title}</Text>
        </View>
        <TextHeading title={"Event Category"} />
        <View style={styles.card}>
          <Text style={{ color: "black" }}>{selectedEvent.event_category}</Text>
        </View>
        <TextHeading title={"Date/Time"} />
        <View style={styles.card}>
          <Text style={{ color: "black" }}>
            {selectedEvent.date}
            {" / "}
            {selectedEvent.time ? selectedEvent.time : ""}
          </Text>
        </View>
        <TextHeading title={"Recurring Events"} />
        <View style={styles.card}>
          <Text style={{ color: "black" }}>
            {selectedEvent.recurring_time_period
              ? selectedEvent.recurring_time_period
              : ""}
          </Text>
        </View>
        <TextHeading title={"Recurring Events Type"} />
        <View style={styles.card}>
          <Text style={{ color: "black" }}>
            {selectedEvent.recurring_type ? selectedEvent.recurring_type : ""}
          </Text>
        </View>
        <TextHeading title={"Event Description"} />
        <View style={styles.cards}>
          <Text style={{ color: "black", paddingVertical: 20 }}>
            {selectedEvent.description ? selectedEvent.description : ""}
          </Text>
        </View>
        <Button
          containerStyle={{ ...styles.loginButtonContainerStyle, width: wp(2) }}
          buttonStyle={{ width: wp(2) }}
          title="Close"
          color="#3155a5"
          onPress={() => navigation.goBack()}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(6),
    backgroundColor: "#f2f2f2",
    paddingVertical: hp(2),
  },
  card: {
    height: hp(8),
    justifyContent: "center",
    paddingLeft: wp(3),
    marginVertical: hp(1),
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    borderRadius: wp(2),
    elevation: 7,
  },
  cards: {
    flexGrow: 1,
    paddingLeft: wp(3),
    marginVertical: hp(1),
    padding: wp(0.5),
    backgroundColor: "#ffffff",
    borderRadius: wp(2),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  loginButtonContainerStyle: {
    width: wp(2),
    borderRadius: hp(1),
    justifyContent: "center",
    marginTop: 10,
    borderRadius: wp(2),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
