import React, { useState, useRef, useEffect } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  LogBox,
  KeyboardAvoidingView,
  Text,
  Platform,
  Alert,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import DropDownItem from "../../../../molecules/DropDownItems";
import { ReportFormStyle } from "../../../../../styles/ReportFormStyle";
import { hp, wp } from "../../../../../styles/Dimensions";
import InputTexts from "../../../../atom/InputText";
import TextHeading from "../../../../atom/TextHeading";
import FilePicker from "../../../../../../screens/reports/FilePicker";
import DateandTime from "../../../../atom/DateandTime";
import { useSelector, useDispatch } from "react-redux";
import { postIncidentReportData } from "../../../../../../store/action/reportAction";
import ActivityIndicatorComponent from "../../../../atom/ActivityIndicatorComponent";
import Buttons from "../../../../atom/Button";
import { convertDateStringIntoNumber } from "../../../../../../../utils/utils";
import SnackMessage from "../../../../atom/SnackMessage";
import MultilineText from "../../../../molecules/MultiLineText";
import getlocationLongHook from "../../../../../customHook/geoLocationAPIHook";
import ProgressBarAnimated from "../../../../atom/ProgressBarAnimated";
import AndroidOpenSettings from "react-native-android-open-settings";
let { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const IncidentReports = ({ navigation, route }) => {
  let clears;
  // LogBox.ignoreLogs([
  //   "Can't perform a React state update on an unmounted component.",
  // ]); // Ignore log notification by message
  //  LogBox.ignoreAllLogs();
  const {
    id,
    site_id,
    time,
    description,
    location_of_incident,
    action,
    result,
    attachments,
    update,
  } = route.params;
  const { updateDate, numberTime } = convertDateStringIntoNumber(time, update);
  const siteListArray = useSelector((state) => state.siteList.siteListArray);
  let updateArray = [];

  siteListArray.map((arr, index) =>
    updateArray.push({
      value: arr.id,
      label: arr.site_code ? arr.site_code + "-" + arr.name : arr.name,
    })
  );
  const { long, lat } = getlocationLongHook(navigation);
  console.log("Data and time in params is:!....", time, attachments);
  const storeDate = new Date(time);
  const [month, day, year] = [
    storeDate.getMonth() + 1,
    storeDate.getDate(),
    storeDate.getFullYear(),
  ];
  console.log("Date and time after alternation is:!...", month, day, year);
  const [hours, minutes] = [storeDate.getHours(), storeDate.getMinutes()];
  let strippedHtmlInfo = description.replace(/<[^>]+>/g, "");
  console.log(strippedHtmlInfo, "html format remove");
  const dispatch = useDispatch();
  const [visible, setVisible] = useState("");
  const [items, setItems] = useState(updateArray);
  const [location, setLocation] = useState(update ? location_of_incident : "");
  const [actions, setAction] = useState(update ? action : "");
  const [results, setResult] = useState(update ? result : "");
  const [file, setFile] = useState(file ? file : []);
  const [text, setText] = useState("");
  const [times, setTime] = useState(numberTime ? numberTime : "");
  const [date, setDate] = useState(updateDate ? updateDate : "");
  const [multiLineText, setMultiLineText] = useState(
    strippedHtmlInfo ? strippedHtmlInfo : ""
  );
  const [dropDown, setDropDown] = useState(site_id ? site_id : "");
  const [scrollEnabled, setscrollEnabled] = useState(true);
  const { error, isLoading, success } = useSelector(
    (state) => state.reportList
  );
  useEffect(() => {
    return () => {
      setVisible("");
      clearInterval();
      clearTimeout(clears);
    };
  }, []);
  useEffect(() => {
    if (success) {
      clears = setTimeout(() => {
        navigation.navigate("IncedentReportList");
      }, 1000);
    }
    return () => {
      clearInterval();
      clearTimeout(clears);
    };
  }, [success]);
  console.log(
    "Success message is:!...££££££££££££££££££££££££££££££££££££££££££££",
    success,
    isLoading
  );
  console.log(
    "date and time in incident report form is:!...",
    typeof date,
    typeof times,
    date,
    times
  );
  const datepickerhandler = (time, dates) => {
    setDate(dates), setTime(time);
    console.log("date type is", typeof date, typeof dates);
  };
  const MultilineTexHandler = (texts) => {
    setMultiLineText(texts);
  };
  const dropdownhandler = (data, value) => {
    setDropDown(value);
    setscrollEnabled(data);
  };
  // const focusPoint = useRef(scrollEnabled);
  const fileHandler = (fileuri) => {
    setFile(fileuri);
    console.log("file uri in incident report form is:!... is:!...", fileuri);
  };

  // incidentReportSuccessHook(success, navigation);
  // postReportErrorHook(error);

  const reportHandler = async () => {
    console.log("incident Report Form Handler !....", file);
    let formData = new FormData();
    update && formData.append("_method", "PUT");
    formData.append("type", "incidentReport");
    formData.append("date", date);
    formData.append("time", times);
    formData.append("siteName", dropDown);
    formData.append("description", multiLineText);
    formData.append("location", location);
    formData.append("action", actions);
    formData.append("result", results);
    formData.append("longitude", long);
    formData.append("latitude", lat);
    file.forEach((file) => {
      formData.append("attachment[]", file);
    });
    {
      lat == null || long == null
        ? Alert.alert(
            "Turn on your location",
            "Please Turn on your location to continue...",
            [
              {
                text: "Ok",
                onPress: () => {
                  navigation.goBack();
                  AndroidOpenSettings.locationSourceSettings();
                },
              },
            ]
          )
        : await dispatch(postIncidentReportData(formData, update, id));
    }
    console.log(
      "form data in incident report form component is:!...",
      formData
    );
  };
  if (isLoading) {
    return <ProgressBarAnimated />;
  }
  const checkFormFieldsStatus = () => {
    // setVisible(!visible);
    if (!dropDown) {
      setVisible("Site Field is required");
      // setTimeout(() => {
      //   setVisible("");
      // }, 3000);
    } else if (!location) {
      setVisible("Location Field is required!");
      // setTimeout(() => {
      //   setVisible("");
      // }, 3000);
    } else if (!actions) {
      setVisible("Action Field is required");
      // setTimeout(() => {
      //   setVisible("");
      // }, 3000);
    } else if (!results) {
      setVisible("Result field is required");
      // setTimeout(() => {
      //   setVisible("");
      // }, 3000);
    } else if ((update ? false : file.length == 0) || file.length >= 9) {
      setVisible("Please Attach File/Photos less than 8");
      // setTimeout(() => {
      //   setVisible("");
      // }, 3000);
    } else if (!multiLineText) {
      setVisible("Description Field is required");
      // setTimeout(() => {
      //   setVisible("");
      // }, 3000);
    } else {
      setVisible("");
      reportHandler();
    }
  };
  const setVisibleFunction = () => {
    setVisible("");
  };
  return (
    <SafeAreaProvider
      style={{ flex: 1, backgroundColor: "#f2f2f2", paddingTop: hp(1) }}
    >
      <SafeAreaView style={ReportFormStyle.container}>
        {(!!visible || !!success || !!error) && (
          <View style={{ marginTop: hp(3) }}>
            <SnackMessage
              success={success}
              visible={visible}
              error={error}
              setVisibleFunction={setVisibleFunction}
            />
          </View>
        )}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            // keyboardShouldPersistTaps="always"
            // scrollEnabled={focusPoint.current}
          >
            <View
              style={{
                flex: 4,
                backgroundColor: "#f2f2f2",
              }}
            >
              <TextHeading title={"Select Site:"} />

              <DropDownItem
                dropdownhandler={dropdownhandler}
                item={items}
                setitem={setItems}
                site_Id={site_id}
                update={update}
                title={"Select an Site"}
                siteSearch={true}
              />
              <View style={{ backgroundColor: "#f2f2f2" }}>
                <DateandTime
                  datepickerhandler={datepickerhandler}
                  defaultTime={time}
                  update={update}
                />
                <View style={{ marginTop: hp(1), backgroundColor: "#f2f2f2" }}>
                  <TextHeading title={"Location of Incident:"} />

                  <InputTexts
                    placeHolders={"Location"}
                    keyboardTypes={"default"}
                    values={location}
                    onChangeTexts={(text) => setLocation(text)}
                    secureTextEntries={false}
                    editables={true}
                    IconName={"location"}
                    IconType={"EvilIcons"}
                    size={hp(3.5)}
                  />
                </View>
                <View style={{ marginTop: hp(1) }}>
                  <TextHeading title={"Action:"} />

                  <InputTexts
                    placeHolders={"Action"}
                    keyboardTypes={"default"}
                    values={actions}
                    onChangeTexts={(action) => setAction(action)}
                    secureTextEntries={false}
                    editables={true}
                    IconName={"create-outline"}
                    IconType={"Ionicons"}
                    size={hp(3)}
                  />
                </View>
                <View style={{ marginTop: hp(1) }}>
                  <TextHeading title={"Result:"} />

                  <InputTexts
                    placeHolders={"Result"}
                    keyboardTypes={"default"}
                    values={results}
                    onChangeTexts={(results) => setResult(results)}
                    secureTextEntries={false}
                    editables={true}
                    IconName={"results"}
                    IconType={"Foundation"}
                    size={hp(3)}
                  />
                </View>
                <View style={{ paddingTop: hp(1) }}>
                  <TextHeading title={""} />

                  <FilePicker
                    fileHandler={fileHandler}
                    attachments={update ? JSON.parse(attachments) : attachments}
                    update={update}
                    id={id}
                    type={"incidentReport"}
                  />
                </View>
                <View style={{ paddingTop: hp(1) }}>
                  <TextHeading title={"Description:"} />

                  <MultilineText
                    //     title={"Submit"}
                    additional_info={strippedHtmlInfo}
                    MultilineTexHandler={MultilineTexHandler}
                    heading={""}
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
                    title={update ? "Update" : "Submit"}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default IncidentReports;
