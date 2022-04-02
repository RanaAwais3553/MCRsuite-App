import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { loginStyle } from "../../styles/LoginStyle";
import { hp, wp } from "../../styles/Dimensions";
import TextHeading from "./TextHeading";
import Icon from "react-native-dynamic-vector-icons";

export default function DateandTime({
  datepickerhandler,
  defaultTime,
  update,
}) {
  function convertFromStringToDate(responseDate) {
    let dateComponents = responseDate.split(" ");

    return dateComponents;
  }

  const dateArray = update
    ? convertFromStringToDate(defaultTime)
    : ["23", "January", "2021"];
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const datess = dateArray[0];
  const months = dateArray[1];
  const years = dateArray[2];
  const times = dateArray[4];
  const updateDateStringToNumber = `${
    monthArray.indexOf(months) + 1
  }/${datess}/${years}`;
  const storeDate = new Date(update ? updateDateStringToNumber : "03/25/2015");
  const day = storeDate.getDate();
  const month = storeDate.getMonth() + 1;
  const year = storeDate.getFullYear();

  const updateDate = `${month}/${day}/${year}`;
  const [hours, minutes] = [storeDate.getHours(), storeDate.getMinutes()];
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [time, setTime] = useState("");
  const [dates, setDates] = useState("");

  const onChange = async (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let hour = tempDate.getMonth();
    let fDate =
      currentDate.getMonth() +
      1 +
      "/" +
      currentDate.getDate() +
      "/" +
      currentDate.getFullYear();
    let fTime =
      tempDate.getHours() +
      ":" +
      tempDate.getMinutes() +
      " " +
      (tempDate.getHours() <= 12 ? "AM" : "PM");

    await setTime(fTime);
    await setDates(fDate);
    await datepickerhandler(fTime, fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  return (
    <View style={{ marginTop: hp(1) }}>
      <TextHeading title={"Dates:"} />

      <TouchableOpacity
        onPress={showDatepicker}
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "row",
          height: hp(7),
          borderRadius: hp(1),
          backgroundColor: "#fff",
          // borderWidth: 0.3,
          // borderColor: "#3155A5",
          paddingHorizontal: wp(2),
          shadowColor: "#000",
          borderRadius: wp(1.5),
          shadowOpacity: 0.5,
          shadowRadius: 3,
          shadowOffset: {
            height: 0,
            width: 0,
          },
          elevation: 2,
        }}
      >
        <Icon
          color={"#3155a5"}
          name={"date"}
          type={"Fontisto"}
          size={hp(2.5)}
          onPress={() => {}}
        />
        {dates ? (
          <Text style={{ paddingLeft: wp(2) }}>{dates}</Text>
        ) : (
          <Text style={{ paddingLeft: wp(2) }}>{updateDate}</Text>
        )}
      </TouchableOpacity>

      <View style={{ marginTop: hp(1) }}>
        <TextHeading title={"Time:"} />

        <TouchableOpacity
          onPress={showTimepicker}
          style={{
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "row",
            height: hp(7),
            borderRadius: hp(1),
            backgroundColor: "#fff",
            // borderWidth: 0.3,
            // borderColor: "#3155A5",
            paddingHorizontal: wp(2),
            shadowColor: "#000",
            borderRadius: wp(1.5),
            shadowOpacity: 0.5,
            shadowRadius: 3,
            shadowOffset: {
              height: 0,
              width: 0,
            },
            elevation: 2,
          }}
        >
          <Icon
            color={"#3155a5"}
            name={"time-outline"}
            type={"Ionicons"}
            size={hp(3)}
            onPress={() => {}}
          />
          {time ? (
            <Text style={{ paddingLeft: wp(2) }}>{time}</Text>
          ) : (
            <Text style={{ paddingLeft: wp(2) }}>
              {times ? times : "12:00 AM"}
            </Text>
          )}
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
      )}
    </View>
  );
}
