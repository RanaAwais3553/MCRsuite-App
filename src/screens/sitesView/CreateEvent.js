import React, { useState, useRef, useEffect } from "react";
import { View, ScrollView, Dimensions, Platform } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { hp, wp } from "../../common/styles/Dimensions";
import TextHeading from "../../common/component/atom/TextHeading";
import DateandTime from "../../common/component/atom/DateandTime";
import MultilineText from "../../common/component/molecules/MultiLineText";
import InputTexts from "../../common/component/atom/InputText";
import { ReportFormStyle } from "../../common/styles/ReportFormStyle";
import DropDownItem from "../../common/component/molecules/DropDownItems";
import Buttons from "../../common/component/atom/Button";
import RnIncrementDecrement from "react-native-increment-decrement-button";
import IncrementDecrementView from "react-native-increment-decrement-ui";
import Icon from "react-native-vector-icons/FontAwesome5";
import eventCategoriesListHook from "../../common/customHook/eventCategoriesListHook";
import { ActivityIndicator } from "react-native-paper";
import { showMessage, hideMessage } from "react-native-flash-message";
import { createEventHandlerAction } from "../../store/action/createEventHandlerAction";
import { useSelector, useDispatch } from "react-redux";
import ActivityIndicatorComponent from "../../common/component/atom/ActivityIndicatorComponent";
import SnackMessage from "../../common/component/atom/SnackMessage";
import { clearCreateEventState } from "../../store/action/createEventHandlerAction";
// import RnIncrementDecrementBtn from "react-native-increment-decrement-button";
let { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const CreateEvent = ({ route, navigation }) => {
  const { id } = route.params;
  const dispatch = useDispatch();
  const [times, setTime] = useState("20:00");
  const [date, setDate] = useState("05/12/2021");
  const [scrollEnabled, setscrollEnabled] = useState();
  const [recuringEvents, setRecuringEvents] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [event, setEvent] = useState("");
  const [multiLineText, setMultiLineText] = useState("");
  const [value, setValue] = useState(1);
  const { data, isLoading, error } = eventCategoriesListHook();
  console.log("error and loading value is:!....", error, isLoading, data);
  const { loading, createEventError, success } = useSelector(
    (state) => state.createEvent
  );
  console.log(
    "create event component is:!....",
    loading,
    createEventError,
    success
  );
  let updateArray = [];
  useEffect(() => {
    let clears;
    if (success) {
      showMessage({
        message: success,
        type: "success",
        autoHide: true,
      });
      clears = setTimeout(() => {
        dispatch(clearCreateEventState());
        navigation.goBack();
      }, 2000);
    }
    return () => {
      clearInterval();
      clearTimeout(clears);
    };
  }, [success]);
  data?.map((arr, index) =>
    updateArray.push({
      value: arr.name,
      label: arr.name,
    })
  );

  useEffect(() => {
    seteventCategoryDropDown(updateArray);
  }, [data]);
  useEffect(() => {
    error &&
      showMessage({
        message: error[0],
        type: "danger",
        autoHide: true,
      });
  }, [error]);
  const [recurringEventDropDown, setrecurringEventDropDown] = useState([
    { value: "Days", label: "Days" },
    { value: "Weeks", label: "Weeks" },
    { value: "Months", label: "Months" },
    { value: "Years", label: "Years" },
  ]);
  const [eventCategoryDropDown, seteventCategoryDropDown] =
    useState(updateArray);
  const datepickerhandler = (time, dates) => {
    setDate(dates), setTime(time);
    console.log("date type is", typeof date, typeof dates);
  };
  const MultilineTexHandler = (texts) => {
    setMultiLineText(texts);
  };
  const createEventHandler = async () => {
    const arr = date.split("/");
    let newDate =
      arr[0].length == 1 && arr[1].length == 1
        ? `${arr[2]}-0${arr[0]}-0${arr[1]}`
        : arr[0].length == 1 && arr[1].length == 2
        ? `${arr[2]}-0${arr[0]}-${arr[1]}`
        : arr[0].length == 2 && arr[1].length == 1
        ? `${arr[2]}-${arr[0]}-0${arr[1]}`
        : `${arr[2]}-${arr[0]}-${arr[1]}`;
    console.log("newDate is", newDate);
    let formData = {
      site_id: id,
      title: event,
      time: times,
      date: newDate,
      recurringType: recuringEvents,
      category: eventCategory,
      eventDescription: multiLineText,
      recurringTime: value,
    };
    await dispatch(createEventHandlerAction(formData, id));
  };
  const checkFormFieldsStatus = () => {
    if (!event) {
      showMessage({
        message: "Event Title Field is required",
        type: "danger",
        autoHide: true,
      });
    } else if (!eventCategory) {
      showMessage({
        message: "Event Category field is required",
        type: "danger",
        autoHide: true,
      });
    } else if (!date) {
      showMessage({
        message: "date is required",
        type: "danger",
        autoHide: true,
      });
    } else if (!multiLineText) {
      showMessage({
        message: "Description is required",
        type: "danger",
        autoHide: true,
      });
    } else {
      createEventHandler();
    }
  };
  if (loading) {
    return <ActivityIndicatorComponent />;
  }
  return (
    <SafeAreaProvider
      style={{ flex: 1, backgroundColor: "#f2f2f2", paddingTop: hp(2) }}
    >
      <SafeAreaView style={ReportFormStyle.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          // scrollEnabled={focusPoint.current}
        >
          <View
            style={{
              flex: 4,
              backgroundColor: "#f2f2f2",
            }}
          >
            <TextHeading title={"Event Title:"} />
            <InputTexts
              placeHolders={"Event Title"}
              keyboardTypes={"default"}
              values={event}
              onChangeTexts={(text) => setEvent(text)}
              secureTextEntries={false}
              editables={true}
              //   IconName={"location"}
              //   IconType={"EvilIcons"}
              size={hp(3.5)}
            />
            <View style={{ marginTop: hp(2) }}>
              <TextHeading title={"Event Category:"} />
              {isLoading ? (
                <ActivityIndicator size={22} color={"#3155A5"} />
              ) : (
                <DropDownItem
                  dropdownhandler={(data, value) => {
                    setscrollEnabled(data);
                    setEventCategory(value);
                  }}
                  item={eventCategoryDropDown}
                  setitem={seteventCategoryDropDown}
                  //  site_Id={"abc"}
                  //  update={false}
                  title={"Event Category"}
                  siteSearch={false}
                />
              )}
            </View>
            <View style={{ marginTop: hp(2), backgroundColor: "#f2f2f2" }}>
              <TextHeading title={"Recurring Events Type:"} />
              <DropDownItem
                dropdownhandler={(data, value) => {
                  setscrollEnabled(data);
                  setRecuringEvents(value);
                }}
                item={recurringEventDropDown}
                setitem={setrecurringEventDropDown}
                // site_Id={situation}
                // update={update}
                title={"Recurring Events Type"}
                siteSearch={false}
              />
              <View style={{ backgroundColor: "#f2f2f2" }}>
                <DateandTime
                  datepickerhandler={datepickerhandler}
                  defaultTime={"5 December 2021  20:00"}
                  update={true}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: hp(2),
                backgroundColor: "#f2f2f2",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextHeading title={"Recurring Events"} />
              <IncrementDecrementView
                value={value}
                // incrementDecrementBy={1}

                minValue={-50}
                maxValue={50}
                buttonSize={20}
                incrementTapHandler={() => {
                  setValue(value + 1);
                }}
                decrementTapHandler={() => {
                  setValue(value - 1);
                }}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                incrementStyle={{
                  backgroundColor: "#fff",
                  width: wp(28),
                  height: hp(6.5),
                }}
                decrementStyle={{
                  backgroundColor: "#fff",
                  width: wp(28),
                  height: hp(6.5),
                }}
                valueStyle={{
                  fontSize: 24,
                  width: wp(28),
                  height: hp(6.5),
                  backgroundColor: "#fff",
                  paddingLeft: wp(12),
                  paddingTop: hp(1.4),
                  color: "#3155A5",
                  alignSelf: "center",
                }}
                decrementIcon={<Icon name="minus" size={20} color="#3155A5" />}
                incrementIcon={<Icon name="plus" size={20} color="#3155A5" />}
              />
            </View>
            <View style={{ paddingTop: hp(2) }}>
              <MultilineText
                title={"Submit"}
                //   additional_info={strippedHtmlInfo}
                MultilineTexHandler={MultilineTexHandler}
                heading={"Description"}
                placeholders="Description"
              />
            </View>
            <View
              style={{
                marginBottom: hp(1),
                marginTop:
                  Platform.OS == "ios" ? (screenHeight < 650 ? 39 : 15) : 5,
              }}
            >
              <Buttons
                bg={"#3155A5"}
                heights={hp(6)}
                widths={wp(25)}
                border={wp(1.5)}
                onPresses={() => checkFormFieldsStatus()}
                title={"Submit"}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default CreateEvent;
