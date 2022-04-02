import React, { useState } from "react";
import { View, Text, LogBox, Dimensions, PixelRatio } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TextHeading from "../../../../atom/TextHeading";
// import TextView from "../../../../atom/TextView";
import ReportViewItem from "../../../../molecules/ReportView";
import { ReportViewStyle } from "../../../../../styles/ReportViewStyle";
import { hp } from "../../../../../styles/Dimensions";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ReportFormStyle } from "../../../../../styles/ReportFormStyle";
import OpenUp from "../../../../molecules/mobileReportsSubItems/OpenUp";
import Close from "../../../../molecules/mobileReportsSubItems/Close";
import MobilePatrol from "../../../../molecules/mobileReportsSubItems/MobilePetrol";
import AlarmResponse from "../../../../molecules/mobileReportsSubItems/AlarmReponse";
import Declamp from "../../../../molecules/mobileReportsSubItems/Declamps";
import VehacleDamage from "../../../../molecules/mobileReportsSubItems/VehicleDamage";
import DownloadFile from "../../../../molecules/DownloadFile";
import DetailTextForm from "../../../../atom/DetailTextForm";
import { splitCurrentNumericArray } from "../../../../../../../utils/utils";
let { height: screenHeight, width: screenWidth } = Dimensions.get("window");
export default function ViewMobileReports({ route }) {
  LogBox.ignoreAllLogs();
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
    userName,
    siteName,
    created_at,
    update,
  } = route.params;
  const dateAndTime = splitCurrentNumericArray(created_at);
  const [selectionForm, setselectionForm] = useState(form_type);

  return (
    <SafeAreaProvider style={{ flex: 1, paddingTop: hp(7) }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ ...ReportViewStyle.container }}>
            <View
              style={{
                ...ReportViewStyle.headerView,
                backgroundColor: "white",
              }}
            >
              <ReportViewItem
                title={"Time"}
                title2={"Created By"}
                title3={"Site Name"}
                firstText={dateAndTime}
                secondText={userName}
                thirdText={siteName}
              />
            </View>
            <View
              style={{
                ...ReportViewStyle.headerView,
                backgroundColor: "white",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <ReportViewItem
                title={"Location"}
                title2={"Situation"}
                title3={""}
                firstText={location}
                secondText={situation}
                thirdText={""}
              />
            </View>

            {selectionForm == "Open Up" ? (
              <View
                style={{ ...ReportViewStyle.checkboxView, paddingTop: hp(2) }}
              >
                <TextHeading title={`${selectionForm}:`} />
                <View style={ReportViewStyle.checkboxText}>
                  <OpenUp
                    checkboxes={() => {}}
                    opendollarboxe={doors_unlocked}
                    openAlarmboxe={alarm_disarmed}
                    patrolboxe={full_patrol}
                    disableBuiltInState={true}
                    editable={false}
                    formView={true}
                    clearCheckBoxes={() => console.log("")}
                  />
                </View>
              </View>
            ) : selectionForm == "Close" ? (
              <View
                style={{ ...ReportViewStyle.checkboxView, paddingTop: hp(2) }}
              >
                <TextHeading title={`${selectionForm}:`} />
                <View style={ReportViewStyle.checkboxText}>
                  <Close
                    closechkbox={() => {}}
                    closeDoorboxe={doors_locked}
                    closeAlarmboxe={alarm_set}
                    patrolboxe={full_patrol}
                    disableBuiltInState={true}
                    editable={false}
                    formView={true}
                    clearCheckBoxes={() => console.log("")}
                  />
                </View>
              </View>
            ) : selectionForm === "Mobile Patrol" ? (
              <View
                style={{ ...ReportViewStyle.checkboxView, paddingTop: hp(2) }}
              >
                <TextHeading title={`${selectionForm}:`} />
                <View style={ReportViewStyle.checkboxText}>
                  <MobilePatrol
                    mobilepatrolbox={() => {}}
                    mobilePropertyboxe={property_checked}
                    patrolboxe={full_patrol}
                    disableBuiltInState={true}
                    editable={false}
                    formView={true}
                    clearCheckBoxes={() => console.log("")}
                  />
                </View>
              </View>
            ) : selectionForm === "Alarm Response" ? (
              <View
                style={{
                  ...ReportViewStyle.checkboxView,
                  paddingTop: hp(2),
                }}
              >
                <TextHeading title={`${selectionForm}:`} />
                <View
                  style={{
                    ...ReportViewStyle.checkboxText,
                  }}
                >
                  <AlarmResponse
                    disableBuiltInState={true}
                    reasonValue={alarm_response_reason}
                    detailValue={details}
                    alarmboxHandler={() => {}}
                    patrolboxe={full_patrol}
                    alarmControlboxe={informed_control}
                    editable={false}
                    formView={true}
                    clearCheckBoxes={() => console.log("")}
                  />
                </View>
              </View>
            ) : selectionForm === "Declamp" ? (
              <View
                style={{ ...ReportViewStyle.checkboxView, paddingTop: hp(2) }}
              >
                <TextHeading title={`${selectionForm}:`} />
                <View style={ReportViewStyle.checkboxText}>
                  <Declamp
                    disableBuiltInState={true}
                    editable={false}
                    registrationValue={vehicle_registration}
                    detailValue={further_issues}
                    Declamp_chkboxHandler={() => {}}
                    declampownerboxe={owner_present}
                    formView={true}
                    clearCheckBoxes={() => console.log("")}
                  />
                </View>
              </View>
            ) : selectionForm === "Vehicle Damage Report" ? (
              <View
                style={{ ...ReportViewStyle.checkboxView, paddingTop: hp(2) }}
              >
                <TextHeading title={`${selectionForm}:`} />
                <View style={ReportViewStyle.checkboxText}>
                  <VehacleDamage
                    // damaged_ownerChecked={true}
                    disableBuiltInState={true}
                    editable={false}
                    strippedHtmlvehicle_registration={vehicle_registration}
                    strippedHtmldamage_description={damage_description}
                    strippedHtml_previous_driver_name={previous_driver_name}
                    damage_chkboxHandler={() => {}}
                    formView={true}
                    clearCheckBoxes={() => console.log("")}
                  />
                </View>
              </View>
            ) : (
              <Text></Text>
            )}
            {/* </View> */}
            <View
              style={[
                ReportViewStyle.detailView,
                ReportViewStyle.detailHeading,
              ]}
            >
              <DetailTextForm text={comments} />
            </View>
            <View
              style={{
                // flex: 1,
                ...ReportViewStyle.detailView,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 5,
                paddingEnd: 10,
                borderRadius: 15,
                backgroundColor: "#fff",
                justifyContent: "center",
                // paddingVertical: hp(2),
              }}
            >
              <DownloadFile attachments={attachment} />
            </View>
            <View
              style={{ ...ReportViewStyle.checkboxView, paddingTop: hp(2) }}
            >
              <View style={ReportViewStyle.checkboxText}>
                <BouncyCheckbox
                  size={hp(3)}
                  fillColor="#3155A5"
                  unfillColor="#FFFFFF"
                  text={"Does this report require further attention ?"}
                  isChecked={further_attention == "Yes" ? true : false}
                  disableBuiltInState={true}
                  textStyle={ReportFormStyle.textStyle}
                />
              </View>
              <View style={ReportViewStyle.checkboxText}>
                <BouncyCheckbox
                  size={hp(3)}
                  fillColor="#3155A5"
                  unfillColor="#FFFFFF"
                  text={"Can you confirm this report is accurate ?"}
                  isChecked={accurate_report == "Yes" ? true : false}
                  disableBuiltInState={true}
                  textStyle={ReportFormStyle.textStyle}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
