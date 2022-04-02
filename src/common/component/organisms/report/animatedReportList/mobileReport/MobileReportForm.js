import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  LogBox,
  Keyboard,
  Alert,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import DropDownItem from "../../../../molecules/DropDownItems";
import CheckBoxItem from "../../../../molecules/CheckBoxItem";
import MultilineText from "../../../../molecules/MultiLineText";
import { ReportFormStyle } from "../../../../../styles/ReportFormStyle";
import { hp, wp } from "../../../../../styles/Dimensions";
import InputTexts from "../../../../atom/InputText";
import TextHeading from "../../../../atom/TextHeading";
import { ScrollView } from "react-native-gesture-handler";
import FilePicker from "../../../../../../screens/reports/FilePicker";
import Declamp from "../../../../molecules/mobileReportsSubItems/Declamps";
import OpenUp from "../../../../molecules/mobileReportsSubItems/OpenUp";
import MobilePatrol from "../../../../molecules/mobileReportsSubItems/MobilePetrol";
import AlarmResponse from "../../../../molecules/mobileReportsSubItems/AlarmReponse";
import Close from "../../../../molecules/mobileReportsSubItems/Close";
import VehacleDamage from "../../../../molecules/mobileReportsSubItems/VehicleDamage";
import Buttons from "../../../../atom/Button";
import ActivityIndicatorComponent from "../../../../atom/ActivityIndicatorComponent";
import { postMobileReportData } from "../../../../../../store/action/reportAction";
import { useSelector, useDispatch } from "react-redux";
import SnackMessage from "../../../../atom/SnackMessage";
import getlocationLongHook from "../../../../../customHook/geoLocationAPIHook";
import ProgressBarAnimated from "../../../../atom/ProgressBarAnimated";
import AndroidOpenSettings from "react-native-android-open-settings";
const MobileReports = ({ navigation, route }) => {
  let clears;
  const siteListArray = useSelector((state) => state.siteList.siteListArray);
  let updateArray = [];

  siteListArray.map((arr, index) =>
    updateArray.push({
      value: arr.id,
      label: arr.site_code ? arr.site_code + "-" + arr.name : arr.name,
    })
  );
  const {
    id,
    site_id,
    location,
    form_type,
    doors_unlocked,
    alarm_disarmed,
    full_patrol,
    alarm_set,
    doors_locked,
    property_checked,
    alarm_response_reason,
    details,
    informed_control,
    vehicle_registration,
    owner_present,
    further_issues,
    previous_driver_name,
    damage_description,
    situation,
    attachment,
    comments,
    further_attention,
    accurate_report,
    update,
  } = route.params;
  console.log("patrolbox value is:!...", full_patrol, update);
  let strippedHtmlcomments = comments ? comments.replace(/<[^>]+>/g, "") : "";
  let strippedHtml_alarm_reason = alarm_response_reason
    ? alarm_response_reason.replace(/<[^>]+>/g, "")
    : "";
  let strippedHtmlInfo_details = details ? details.replace(/<[^>]+>/g, "") : "";
  let strippedHtmlfurther_issues = further_issues
    ? further_issues.replace(/<[^>]+>/g, "")
    : "";
  let strippedHtmlvehicle_registration = vehicle_registration
    ? vehicle_registration.replace(/<[^>]+>/g, "")
    : "";
  let strippedHtmldamage_description = damage_description
    ? damage_description.replace(/<[^>]+>/g, "")
    : "";
  let strippedHtml_previous_driver_name = previous_driver_name
    ? previous_driver_name.replace(/<[^>]+>/g, "")
    : "";
  const { long, lat } = getlocationLongHook(navigation);
  const [visible, setVisible] = useState("");
  const [scrollEnabled, setscrollEnabled] = useState();
  const [locations, setLocation] = useState(location ? location : "");
  const [attentioncheckbox, setAttentioncheckbox] = useState(further_attention);
  const [accuratecheckbox, setAccuratecheckbox] = useState(accurate_report);
  const [comment, setComments] = useState(update ? strippedHtmlcomments : "");
  // file array
  const [file, setFile] = useState(file ? file : []);
  //drop down 20
  const [itemDropdown, setItemDropdown] = useState("");
  const [situationDropdown, setSituationDropdown] = useState("");
  const [selectionForm, setselectionForm] = useState("");

  const [opendollarbox, setOpendollarbox] = useState(
    update ? doors_unlocked : "No"
  );
  const [openAlarmbox, setOpenAlarmbox] = useState(
    update ? alarm_disarmed : "No"
  );

  const [closeAlarmbox, setCloseAlarmbox] = useState(update ? alarm_set : "No");
  const [closeDoorbox, setCloseDoorbox] = useState(
    update ? doors_locked : "No"
  );

  const [mobilePropertybox, setMobilepropertybox] = useState(
    update ? property_checked : "No"
  );
  const [patrolbox, setPatrolbox] = useState(update ? full_patrol : "No");
  const [alarmControlbox, setAlarmControlbox] = useState(
    update ? informed_control : "No"
  );
  const [reasonTexts, setReasonTexts] = useState(
    strippedHtml_alarm_reason ? strippedHtml_alarm_reason : ""
  );
  const [detailTexts, setDetailTexts] = useState(
    strippedHtmlInfo_details ? strippedHtmlInfo_details : ""
  );

  const [declampownerbox, setDeclampownerbox] = useState(
    update ? owner_present : "No"
  );
  const [vehiclereg, setVehiclereg] = useState(
    strippedHtmlvehicle_registration ? strippedHtmlvehicle_registration : ""
  );
  // const [vehiclereg, setdeclampVehiclereg] = useState(
  //   strippedHtmlvehicle_registration ? strippedHtmlvehicle_registration : ""
  // );
  const [declamp_Multiline, setDeclamp_Multiline] = useState(
    strippedHtmlfurther_issues ? strippedHtmlfurther_issues : ""
  );

  const [damaged_Driver_Texts, setDamage_Driver_Texts] = useState(
    strippedHtml_previous_driver_name ? strippedHtml_previous_driver_name : ""
  );
  const [damaged_Registration_Texts, setDamage_Registration_Texts] = useState(
    strippedHtmlvehicle_registration ? strippedHtmlvehicle_registration : ""
  );
  const [damaged_description, setDamage_description] = useState(
    strippedHtmldamage_description ? strippedHtmldamage_description : ""
  );
  // default check box
  const [firstIsChecked, setFirstIsChecked] = useState(
    further_attention == "Yes" ? true : false
  );
  const [secondIsChecked, setSecondIsChecked] = useState(
    accurate_report == "Yes" ? true : false
  );

  const [items, setItems] = useState(updateArray);
  const [situationItem, setSituationItem] = useState([
    { value: "False Alarm", label: "False Alarm" },
    { value: "Intruder Alarm", label: "Intruder Alarm" },
    { value: "Fire Alarm", label: "Fire Alarm" },
    { value: "Panic Alarm", label: "Panic Alarm" },
    { value: "Water Leakage", label: "Water Leakage" },
    { value: "Weather Alarm", label: "Weather Alarm" },
  ]);
  const [typeItem, setTypeItem] = useState([
    // { value: "Default", label: "Default" },
    { value: "Open Up", label: "Open Up" },
    { value: "Close", label: "Close" },
    { value: "Mobile Patrol", label: "Mobile Patrol" },
    { value: "Alarm Response", label: "Alarm Response" },
    { value: "Declamp", label: "Declamp" },
    { value: "Vehicle Damage Report", label: "Vehicle Damage Report" },
  ]);
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
        navigation.navigate("MobileReportList");
      }, 1000);
    }
    return () => {
      // dispatch(clearState());
      clearInterval();
      clearTimeout(clears);
    };
  }, [success]);
  const dispatch = useDispatch();
  const fileHandler = (fileuri) => {
    setFile(fileuri);
  };
  console.log(
    "submitted Open Up checkBoxes is:!...",
    opendollarbox,
    openAlarmbox,
    patrolbox,
    situationDropdown
  );
  console.log(
    "submitted Close checkBoxes is:!...",
    patrolbox,
    closeAlarmbox,
    closeDoorbox,
    situationDropdown,
    file.length
  );
  const reportHandler = async () => {
    let formData = new FormData();
    update && formData.append("_method", "PUT");
    formData.append("type", "mobileReport");
    formData.append("siteName", itemDropdown);
    formData.append("location", locations);
    formData.append("formType", selectionForm);
    formData.append("situation", situationDropdown);
    file.forEach((file) => {
      formData.append("attachment[]", file);
    });
    formData.append("comment", comment);
    formData.append("furtherAttention", attentioncheckbox);
    formData.append("accurateReport", accuratecheckbox);
    formData.append("doorsUnlocked", opendollarbox);
    formData.append("alarmDisalarmed", openAlarmbox);
    formData.append("fullPatrol", patrolbox);
    formData.append("alarmSet", closeAlarmbox);
    formData.append("doorsLocked", closeDoorbox);
    formData.append("propertyCheck", mobilePropertybox);
    formData.append("alarmResponse", reasonTexts);
    formData.append("details", detailTexts);
    formData.append("informedControl", alarmControlbox);
    formData.append("vehicalRegistration", vehiclereg);
    formData.append("ownerPresent", declampownerbox);
    formData.append("furtherIssues", declamp_Multiline);
    formData.append("previousDriver", damaged_Driver_Texts);
    formData.append("damageDescription", damaged_description);
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
        : await dispatch(postMobileReportData(formData, update, id));
    }
  };
  if (isLoading) {
    return <ProgressBarAnimated />;
  }
  const checkFormFieldsStatus = () => {
    // setVisible(!visible);
    if (!itemDropdown) {
      setVisible("Please Select Site Before Submitting form!");
      // clears = setTimeout(() => {
      //   setVisible("");
      // }, 3000);
    } else if (!locations) {
      setVisible("Please Select Location field Before Submitting form!");
      // clears = setTimeout(() => {
      //   setVisible("");
      // }, 3000);
    } else if ((update ? false : file.length == 0) || file.length >= 9) {
      setVisible("Please Attach File/Photos less than 8");
      // clears = setTimeout(() => {
      //   setVisible("");
      // }, 3000);
    } else if (!selectionForm) {
      setVisible("Please Select Form Type Before Submitting form!");
    } else if (!comment) {
      setVisible("Please Select Comment Field Before Submitting form!");
      // clears = setTimeout(() => {
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
  const clearCheckBoxes = () => {
    setOpendollarbox("No");
    setOpenAlarmbox("No");
    setPatrolbox("No");
    setCloseAlarmbox("No");
    setCloseDoorbox("No");
    setMobilepropertybox("No");
    setAlarmControlbox("No");
    setDeclampownerbox("No");
  };
  // console.log("00000<<<<<<<<<<<<<<<<<<", checkFormFieldsStatus());
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <SafeAreaView style={{ ...ReportFormStyle.container, paddingTop: hp(3) }}>
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
          keyboardVerticalOffset={Platform.OS === "ios" ? 14 : 0}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEnabled={scrollEnabled}
            keyboardShouldPersistTaps="always"
          >
            <TextHeading title={"Select Site:"} />
            <DropDownItem
              dropdownhandler={(data, value) => {
                setItemDropdown(value);
                setscrollEnabled(data);
              }}
              item={items}
              setitem={setItems}
              site_Id={site_id}
              update={update}
              title={"Select Site"}
              siteSearch={true}
            />
            {/* <View style={{ backgroundColor: "#f2f2f2", marginTop: hp(2) }}> */}

            <View style={{ backgroundColor: "#f2f2f2", marginTop: hp(1) }}>
              <TextHeading title={"Form Type:"} />

              <DropDownItem
                dropdownhandler={(data, value) => {
                  setscrollEnabled(data);
                  setselectionForm(value);
                }}
                item={typeItem}
                setitem={setTypeItem}
                site_Id={form_type}
                update={
                  form_type == "null" || form_type == null ? false : update
                }
                title={"Select a Type"}
                siteSearch={false}
              />

              <View style={{ backgroundColor: "#f2f2f2", marginTop: hp(1) }}>
                {selectionForm === "Alarm Response" && (
                  <>
                    <TextHeading title={"Situation"} />

                    <DropDownItem
                      dropdownhandler={(data, value) => {
                        setscrollEnabled(data);
                        setSituationDropdown(value);
                      }}
                      item={situationItem}
                      setitem={setSituationItem}
                      site_Id={situation}
                      update={
                        situation == "null" || situation == null
                          ? false
                          : update
                      }
                      title={"Select a Situation"}
                      siteSearch={false}
                    />
                  </>
                )}
                <View style={{ backgroundColor: "#f2f2f2" }}>
                  <View style={{ marginTop: hp(1) }}>
                    <TextHeading title={"Location:"} />

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
                    {selectionForm === "Open Up" ? (
                      <OpenUp
                        checkboxes={(first, second, third) => {
                          setOpendollarbox(first);
                          setOpenAlarmbox(second);
                          setPatrolbox(third);
                          console.log(
                            opendollarbox,
                            openAlarmbox,
                            patrolbox,
                            // openPetrolbox,
                            "check boexes in up"
                          );
                        }}
                        opendollarboxe={opendollarbox}
                        openAlarmboxe={openAlarmbox}
                        patrolboxe={patrolbox}
                        formView={false}
                        clearCheckBoxes={clearCheckBoxes}
                      />
                    ) : selectionForm === "Close" ? (
                      <Close
                        closechkbox={(first, second, third) => {
                          setPatrolbox(first);
                          setCloseAlarmbox(second);
                          setCloseDoorbox(third);
                          console.log(
                            // closepatrolbox,
                            closeAlarmbox,
                            closeDoorbox,
                            patrolbox,
                            "check boexes in close"
                          );
                        }}
                        closeAlarmboxe={closeAlarmbox}
                        closeDoorboxe={closeDoorbox}
                        patrolboxe={patrolbox}
                        formView={false}
                        clearCheckBoxes={clearCheckBoxes}
                      />
                    ) : selectionForm === "Mobile Patrol" ? (
                      <MobilePatrol
                        mobilepatrolbox={(first, second) => {
                          setMobilepropertybox(first);
                          setPatrolbox(second);
                          console.log(
                            mobilePropertybox,
                            patrolbox,

                            "check boexes in mobile patrol"
                          );
                        }}
                        mobilePropertyboxe={mobilePropertybox}
                        patrolboxe={patrolbox}
                        formView={false}
                        clearCheckBoxes={clearCheckBoxes}
                      />
                    ) : selectionForm === "Alarm Response" ? (
                      <View style={{ marginTop: hp(1) }}>
                        <AlarmResponse
                          strippedHtml_alarm_reason={strippedHtml_alarm_reason}
                          ReasonTexHandler={(texts) => {
                            setReasonTexts(texts);
                            console.log(reasonTexts, "reason text");
                          }}
                          strippedHtmlInfo_details={strippedHtmlInfo_details}
                          DetailTexHandler={(texts) => {
                            setDetailTexts(texts);
                            console.log(detailTexts, "detail text");
                          }}
                          alarmboxHandler={(first, second) => {
                            setPatrolbox(first);
                            setAlarmControlbox(second);
                            console.log(
                              patrolbox,
                              alarmControlbox,

                              "alarm  boexes "
                            );
                          }}
                          patrolboxe={patrolbox}
                          alarmControlboxe={alarmControlbox}
                          // keys={locationitem.value}
                          formView={false}
                          clearCheckBoxes={clearCheckBoxes}
                        />
                      </View>
                    ) : selectionForm === "Declamp" ? (
                      <Declamp
                        strippedHtmlfurther_issues={strippedHtmlfurther_issues}
                        declamp_multilineHandler={(first) => {
                          setDeclamp_Multiline(first);
                          // alert(first);
                          console.log(
                            declamp_Multiline,
                            "declamp multiline|||||||||||||"
                          );
                        }}
                        Declamp_chkboxHandler={(first) => {
                          setDeclampownerbox(first);
                          console.log(
                            declampownerbox,
                            "declamp chkbox|||||||||||||"
                          );
                        }}
                        // onChangeTexts={() => alert("data")}
                        onChangeTexts={(text) => setVehiclereg(text)}
                        declampownerboxe={declampownerbox}
                        formView={false}
                        clearCheckBoxes={clearCheckBoxes}
                      />
                    ) : selectionForm === "Vehicle Damage Report" ? (
                      <VehacleDamage
                        damage_multilineHandler={(texts) => {
                          setDamage_description(texts);
                        }}
                        onChange_Driver_Texts={(text) =>
                          setDamage_Driver_Texts(text)
                        }
                        onChange_Registration_Texts={(text) =>
                          setVehiclereg(text)
                        }
                        strippedHtmlvehicle_registration={vehiclereg}
                        strippedHtmldamage_description={damage_description}
                        strippedHtml_previous_driver_name={damaged_Driver_Texts}
                        formView={false}
                        clearCheckBoxes={clearCheckBoxes}
                      />
                    ) : (
                      <Text></Text>
                    )}
                  </View>
                  <View style={{ marginTop: hp(0) }}>
                    {/* <TextHeading title={""} /> */}

                    <FilePicker
                      fileHandler={fileHandler}
                      attachments={update ? JSON.parse(attachment) : attachment}
                      update={update}
                      id={id}
                      type={"mobileReport"}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={{ marginTop: hp(1), backgroundColor: "#f2f2f2" }}>
              {/* <TextHeading title={"Comments:"} /> */}

              <MultilineText
                additional_info={strippedHtmlcomments}
                MultilineTexHandler={(texts) => {
                  setComments(texts);
                }}
                heading={""}
                placeholders="comments"
              />
            </View>
            <View style={{ marginTop: hp(1) }}>
              <CheckBoxItem
                texts={"Does this report require further attention?"}
                key={10}
                value={firstIsChecked}
                //            disableBuiltInState={disableBuiltInState}
                onPresses={() => {
                  setAttentioncheckbox(
                    attentioncheckbox == "No" ? "Yes" : "No"
                  ),
                    setFirstIsChecked(!firstIsChecked);
                  Keyboard.dismiss();
                }}
              />
              <View style={{ marginTop: hp(2) }}>
                <CheckBoxItem
                  texts={"Can You Confirm this report is accurate?"}
                  key={11}
                  value={secondIsChecked}
                  //          disableBuiltInState={disableBuiltInState}
                  onPresses={() => {
                    setAccuratecheckbox(
                      accuratecheckbox == "No" ? "Yes" : "No"
                    ),
                      setSecondIsChecked(!secondIsChecked);
                    Keyboard.dismiss();
                  }}
                />
              </View>
            </View>
            <View style={{ marginVertical: hp(3) }}>
              <Buttons
                bg={"#3155A5"}
                heights={hp(6)}
                widths={wp(25)}
                border={wp(1.5)}
                onPresses={() => {
                  checkFormFieldsStatus();
                  // ? checkFormFieldsStatus()
                  // : reportHandler();
                }}
                title={update ? "Update" : "Submit"}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default MobileReports;
