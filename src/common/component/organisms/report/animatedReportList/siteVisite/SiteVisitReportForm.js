import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  LogBox,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Alert,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import DropDownItem from "../../../../molecules/DropDownItems";
import MultilineText from "../../../../molecules/MultiLineText";
import { ReportFormStyle } from "../../../../../styles/ReportFormStyle";
import { hp, wp } from "../../../../../styles/Dimensions";
import TextHeading from "../../../../atom/TextHeading";
import InputTexts from "../../../../atom/InputText";
import { useSelector, useDispatch } from "react-redux";
import ActivityIndicatorComponent from "../../../../atom/ActivityIndicatorComponent";
import { postSiteVisitReportData } from "../../../../../../store/action/reportAction";
import getlocationLongHook from "../../../../../customHook/geoLocationAPIHook";
import Buttons from "../../../../atom/Button";
import SnackMessage from "../../../../atom/SnackMessage";
import AndroidOpenSettings from "react-native-android-open-settings";
let { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const SiteVisitReport = ({ navigation, route }) => {
  let clears;
  // LogBox.ignoreLogs([
  //   "Can't perform a React state update on an unmounted component.",
  // ]); // Ignore log notification by message
  // LogBox.ignoreAllLogs();
  const siteListArray = useSelector((state) => state.siteList.siteListArray);

  const { id, site_id, location, comments, longitude, latitude, update } =
    route.params;

  let strippedHtmlInfo = comments.replace(/<[^>]+>/g, "");
  console.log(strippedHtmlInfo, "html format remove");
  let updateArray = [];
  const dispatch = useDispatch();
  const { long, lat } = getlocationLongHook(navigation);
  console.log("long and lat is:!...", long, lat);
  let value;
  siteListArray.map(
    (arr, index) => (
      (value = arr.site_code ? arr.site_code + "-" + arr.name : arr.name),
      updateArray.push({ value: arr.id, label: value })
    )
  );
  const { error, isLoading, success } = useSelector(
    (state) => state.reportList
  );
  const [visible, setVisible] = useState("");
  const [scrollEnabled, setscrollEnabled] = useState();
  const [locations, setLocation] = useState(location);
  const [items, setItems] = useState(updateArray);
  const [dropDown, setDropDown] = useState(site_id ? site_id : null);
  const [multiText, setMultiText] = useState(update ? strippedHtmlInfo : "");
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
        navigation.navigate("SiteVisitReportList");
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
    setscrollEnabled(data);
    setDropDown(value);
  };

  const MultilineTexHandler = (texts) => {
    setMultiText(texts);
  };
  // const onDismissSnackBar = () => setVisible("");
  // siteVisitReportSuccessHook(success, navigation);
  // postReportErrorHook(error);
  const reportHandler = async () => {
    let formData = update ? new URLSearchParams() : new FormData();
    formData.append("type", "siteVisitReport");
    formData.append("siteName", dropDown);
    formData.append("location", locations);
    formData.append("comment", multiText);
    formData.append("longitude", long);
    formData.append("latitude", lat);
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
        : await dispatch(postSiteVisitReportData(formData, update, id));
    }
  };
  if (isLoading) {
    return <ActivityIndicatorComponent />;
  }

  const checkFormFieldsStatus = () => {
    // setVisible(!visible);
    if (!dropDown) {
      setVisible("Site Field is required");
      // setTimeout(() => {
      //   setVisible("");
      // }, 3000);
    } else if (!locations) {
      setVisible("Location Field is required");
      // setTimeout(() => {
      //   setVisible("");
      // }, 3000);
    } else if (!multiText) {
      setVisible("Comments Field is required");
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
      style={{ flex: 1, backgroundColor: "#f2f2f2", paddingTop: hp(3) }}
    >
      <SafeAreaView style={{ ...ReportFormStyle.container }}>
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
            scrollEnabled={scrollEnabled}
          >
            <ScrollView
              style={{
                // height: hp(93),
                flexGrow: 1,
                backgroundColor: "#f2f2f2",
                // marginTop: hp(3),
              }}
            >
              <TextHeading title={"Select Site:"} />

              <DropDownItem
                dropdownhandler={dropdownhandler}
                item={items}
                setitem={setItems}
                site_Id={site_id}
                update={update}
                title={"Select Site:"}
                siteSearch={true}
              />
              <View style={{ backgroundColor: "#f2f2f2" }}>
                <View style={{ marginVertical: hp(2) }}>
                  <TextHeading title={"Enter Location:"} />
                  <InputTexts
                    placeHolders={"Location"}
                    keyboardTypes={"default"}
                    values={locations}
                    onChangeTexts={(text) => setLocation(text)}
                    secureTextEntries={false}
                    editables={true}
                    IconName={"location"}
                    IconType={"EvilIcons"}
                    size={hp(3.5)}
                  />
                </View>
                <View style={{ flex: 0.3 }}>
                  <TextHeading title={"Comments:"} />

                  <MultilineText
                    additional_info={strippedHtmlInfo}
                    MultilineTexHandler={MultilineTexHandler}
                    heading={"Comments"}
                    placeholders="Comments"
                  />
                  <View
                    style={{
                      marginTop:
                        Platform.OS == "ios"
                          ? screenHeight < 650
                            ? 39
                            : 15
                          : 5,
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
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SiteVisitReport;
