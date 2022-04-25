import React, { useState, memo } from "react";
import { View, Text, TouchableOpacity, LogBox } from "react-native";
import { Agenda } from "react-native-calendars";
import { Card, Avatar } from "react-native-paper";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

const Calender = ({
  eventCalendar,
  activeDate,
  siteEventsArray,
  navigation,
}) => {
  LogBox.ignoreLogs(["Failed prop type: Invalid prop"]); // Ignore log notification by message
  console.log(eventCalendar);
  const [items, setItems] = useState(eventCalendar);

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    console.log("items are:!...", item.id);
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("EventDetail", {
            id: item.id,
            siteEventsArray: siteEventsArray,
          });
        }}
        style={{ marginRight: 10, marginTop: 27 }}
      >
        <Card style={{ backgroundColor: item.color }}>
          <Card.Content>
            <View
              style={{
                flex: 1,
                // alignSelf: 'center',
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Text style={{ textAlign: "left", color: "#fff" }}>
                {item.name ? item.name : "Event not exist"}
              </Text>
              {/* <Avatar.Text label="M" /> */}
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignSelf: "stretch",
        backgroundColor: "#f2f2f2",
        marginBottom: 20,
      }}
    >
      <Agenda
        items={items}
        //  loadItemsForMonth={loadItems}
        selected={activeDate ? activeDate : "2022-04-19"}
        minDate={"2021-11-10"}
        maxDate={"2022-12-30"}
        renderItem={renderItem}
        renderEmptyData={() => {
          return null;
        }}
        theme={{
          backgroundColor: "#f2f2f2",

          selectedDayBackgroundColor: "#3155a5",
          dotColor: "#3155a5",
        }}
        // onCalendarToggled={(calendarOpened) => {
        //   callBackScrollEnable();
        //   console.log("calander toggle is:&&&&&&&&&", calendarOpened);
        // }}
        // onDayPress={(day) => {
        //   callBackScrollEnableOnDayPress();
        //   console.log("day pressed");
        // }}
        // onDayChange={(day) => {
        //   callBackScrollEnableOnDayPress();
        //   console.log("day changed");
        // }}
        showOnlySelectedDayItems={true}
        // calendarHeight={120}
      />
    </View>
  );
};

export default memo(Calender);

{
  /* <CalendarList
firstDay={1}
markedDates={selectedDays}
onDayPress={_onDayPress}
pastScrollRange={1}
futureScrollRange={1}
scrollEnabled={true}
showScrollIndicator={false}
theme={{
  backgroundColor: '#FF7066', // Not change nothing
  calendarBackground: 'transparent', // If change it, change all calendar bg
  textSectionTitleColor: '#FFF',
  selectedDayBackgroundColor: 'transparent',
  selectedDayTextColor: '#FFF',
  todayTextColor: '#FFF',
  todayBackgroundColor: '#FF7066',
  dayTextColor: 'gray', //Disabled days
  dotColor: '#FF7066',
  selectedDotColor: '#FFF',
  monthTextColor: '#FFF',
  textDayFontWeight: '300',
  textMonthFontWeight: 'bold',
  textDayHeaderFontWeight: '300',
  'stylesheet.calendar.header': {
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    week: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'rgba(125,125,125,0.25)', //Here I can change only the background week days
    },
  },
  textDayFontSize: 14,
  textMonthFontSize: 16,
  textDayHeaderFontSize: 14,
}}
> */

  {
    /* <Calendar
  theme={{
    stylesheet: {
      calendar: {
        main: {
          paddingLeft: 0,
          paddingRight: 0,
        },
        header: {
          header: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          },
        },
      },
    },
  }}
/>``` */
  }
}
