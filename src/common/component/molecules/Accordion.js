import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import { wp } from "../../styles/Dimensions";
import { SiteViewStyle } from "../../styles/SiteViewStyle";
import TextHeading from "../atom/TextHeading";
import TextView from "../atom/TextView";
import Icon from "../atom/Icon";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function Accordion({ sitesTimeSlotsArray }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <ListItem.Accordion
        content={
          <>
            <Icon
              Type={Ionicons}
              names={"time"}
              sizes={22}
              colors={"#3155A5"}
            />
            <ListItem.Content>
              <ListItem.Title>
                <TextHeading title={"Time Slots"} />
              </ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {sitesTimeSlotsArray.map((l, i) => (
            <View key={l.id} style={SiteViewStyle.card}>
              <View style={SiteViewStyle.cardIcon}>
                <Icon
                  Type={Ionicons}
                  names={"today"}
                  sizes={22}
                  colors={"#3155A5"}
                />
                <TextHeading title={l.day} />
              </View>
              <View style={SiteViewStyle.cards}>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRightColor: "#F2F8FD",
                    paddingVertical: 10,
                  }}
                >
                  <TextHeading title={"Start Time"} />
                  <TextView text={l.start_time} />
                </View>
                <View
                  style={{
                    height: "100%",
                    width: "1%",
                    backgroundColor: "#F2F8FD",
                  }}
                ></View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "green",
                  }}
                >
                  <TextHeading title={"End Time"} />
                  <TextView text={l.end_time} />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </ListItem.Accordion>
    </View>
  );
}
