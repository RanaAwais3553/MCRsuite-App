import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  View,
  Text,
  Keyboard,
  LogBox,
  Button,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  Dimensions,
  Alert,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import DropDownItem from "../../../../molecules/DropDownItems";
import CheckBoxItem from "../../../../molecules/CheckBoxItem";
import MultilineText from "../../../../molecules/MultiLineText";
import { ReportFormStyle } from "../../../../../styles/ReportFormStyle";
import { hp, wp } from "../../../../../styles/Dimensions";
import { useSelector, useDispatch } from "react-redux";
import { postDailyInceptionReportData } from "../../../../../../store/action/reportAction";
import ActivityIndicatorComponent from "../../../../atom/ActivityIndicatorComponent";
import Buttons from "../../../../atom/Button";
import SnackMessage from "../../../../atom/SnackMessage";
import getlocationLongHook from "../../../../../customHook/geoLocationAPIHook";
import AndroidOpenSettings from "react-native-android-open-settings";
let { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const DailyInspectionReport = ({ navigation, route }) => {
  let clears;

  const siteListArray = useSelector((state) => state.siteList.siteListArray);
  let updateArray = [];
  const {
    id,
    site_Id,
    obstruction_frees,
    fire_extinguishers,
    poster_free,
    report_hazard,
    additional_info,
    update,
  } = route.params;
  let strippedHtmlInfo = additional_info.replace(/<[^>]+>/g, "");
  siteListArray.map((arr, index) =>
    updateArray.push({
      value: arr.id,
      label: arr.site_code ? arr.site_code + "-" + arr.name : arr.name,
    })
  );
  const [visible, setVisible] = useState("");
  const [dropdown, setDropDown] = useState(site_Id ? site_Id : null);
  const [multiLineText, setMultiLineText] = useState(
    update ? strippedHtmlInfo : ""
  );
  const [firstIsChecked, setFirstIsChecked] = useState(
    obstruction_frees == "Yes" ? true : false
  );
  const [secondIsChecked, setSecondIsChecked] = useState(
    fire_extinguishers == "Yes" ? true : false
  );
  const [thirdIsChecked, setThirdIsChecked] = useState(
    poster_free == "Yes" ? true : false
  );
  const [fourthIsChecked, setFourthIsChecked] = useState(
    report_hazard == "Yes" ? true : false
  );
  const { long, lat } = getlocationLongHook(navigation);
  const [scrollEnabled, setscrollEnabled] = useState();
  const [items, setItems] = useState(updateArray);
  const [firstcheckbox, setFirstcheckbox] = useState(obstruction_frees);
  const [secondcheckbox, setSecondcheckbox] = useState(fire_extinguishers);
  const [thiredcheckbox, setThiredcheckbox] = useState(poster_free);
  const [fourthcheckbox, setFourthcheckbox] = useState(report_hazard);
  const dispatch = useDispatch();
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
        navigation.navigate("DailyIncpectionReportList");
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
  const dropdownhandler = (data, value) => {
    console.log("drop down value is:!...", value, data);
    setDropDown(value);
    setscrollEnabled(data);
  };
  const MultilineTexHandler = (texts) => {
    console.log("multi line text is:!...", texts);
    setMultiLineText(texts);
  };
  const reportHandler = async () => {
    console.log(
      "longitude and latitude is:!.....&&&&&&&&&&&&&&&*********************",
      long,
      lat
    );
    let formData = {
      type: "inspectionReport",
      siteName: dropdown,
      obstructionFree: firstcheckbox,
      fireExtinguishers: secondcheckbox,
      posterFree: thiredcheckbox,
      reportHazard: fourthcheckbox,
      additionalInfo: multiLineText,
      longitude: long,
      latitude: lat,
    };
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
        : await dispatch(postDailyInceptionReportData(formData, update, id));
    }
  };
  if (isLoading) {
    return <ActivityIndicatorComponent />;
  }
  const checkFormFieldsStatus = () => {
    if (!dropdown) {
      setVisible("Site Field is required");
      // setTimeout(() => {
      //   setVisible("");
      // }, 3000);
    } else if (!multiLineText) {
      setVisible("Additional Information is required");
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
      style={{
        flex: 1,
        backgroundColor: "#f2f2f2",
        paddingTop: hp(2),
      }}
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
            horizontal={false}
            scrollEnabled={scrollEnabled}
          >
            <View style={{ flex: 1 }}>
              <View
                style={{
                  // height: hp(45),
                  flexGrow: 1,
                  // backgroundColor: "#121212",
                  marginTop: hp(3),
                }}
              >
                <View>
                  <DropDownItem
                    dropdownhandler={dropdownhandler}
                    item={items}
                    setitem={setItems}
                    update={update}
                    site_Id={site_Id}
                    title={"Select Site:"}
                    siteSearch={true}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <CheckBoxItem
                    texts={
                      "All fire exits and corridors are clear and free of obstructions"
                    }
                    value={firstIsChecked}
                    keys={1}
                    onPresses={() => {
                      setFirstcheckbox(firstcheckbox == "No" ? "Yes" : "No"),
                        setFirstIsChecked(!firstIsChecked);
                    }}
                  />
                  {/* </View> */}
                  {/* <View style={{ height: hp(5) }}> */}
                  <CheckBoxItem
                    texts={"Fire extinguishers are in place and intact"}
                    keys={2}
                    value={secondIsChecked}
                    onPresses={() => {
                      setSecondcheckbox(secondcheckbox == "No" ? "Yes" : "No"),
                        setSecondIsChecked(!secondIsChecked);
                    }}
                  />
                  {/* </View> */}
                  {/* <View style={{ height: hp(5) }}> */}
                  <CheckBoxItem
                    texts={
                      "Windows of exit door and walls are clear of public posters"
                    }
                    value={thirdIsChecked}
                    keys={3}
                    onPresses={() => {
                      setThiredcheckbox(thiredcheckbox == "No" ? "Yes" : "No"),
                        setThirdIsChecked(!thirdIsChecked);
                    }}
                  />
                  {/* </View> */}
                  {/* <View style={{ height: hp(5) }}> */}
                  <CheckBoxItem
                    texts={"Report hazard"}
                    keys={4}
                    // update={update}
                    value={fourthIsChecked}
                    onPresses={() => {
                      setFourthcheckbox(fourthcheckbox == "No" ? "Yes" : "No"),
                        setFourthIsChecked(!fourthIsChecked);
                    }}
                  />
                </View>
              </View>

              <MultilineText
                additional_info={strippedHtmlInfo}
                MultilineTexHandler={MultilineTexHandler}
                heading={""}
                placeholders="Additional Information"
              />
              <View
                style={{
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
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default DailyInspectionReport;
