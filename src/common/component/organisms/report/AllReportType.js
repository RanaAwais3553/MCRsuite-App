import React from "react";
import { View, LogBox } from "react-native";
import ReportTypeCard from "../../atom/ReportTypeCard";
import { useSelector } from "react-redux";
function AllReportType({ navigation }) {
  const { type } = useSelector((state) => state.auth);
  LogBox.ignoreAllLogs();
  return (
    <>
      {type === "admin" || type === "mobile_officer" ? (
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ReportTypeCard
              title={"Daily Inspection Report"}
              onSelect={() =>
                navigation.navigate("DailyIncpectionReportStack", {
                  reportTitle: "Daily Inspection Report",
                })
              }
            />
            <ReportTypeCard
              title={"Incident Report"}
              onSelect={() =>
                navigation.navigate("IncedentReportStack", {
                  reportTitle: "Incident Report",
                })
              }
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ReportTypeCard
              title={"Mobile Report"}
              onSelect={() =>
                navigation.navigate("MobileReportStack", {
                  reportTitle: "Mobile Report",
                })
              }
            />
            <ReportTypeCard
              title={"Site Visit Report"}
              onSelect={() =>
                navigation.navigate("SiteVisitReportStack", {
                  reportTitle: "Site Visit Report",
                })
              }
            />
          </View>
        </View>
      ) : type == "site_admin" ? (
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ReportTypeCard
              title={"Daily Inspection Report"}
              onSelect={() =>
                navigation.navigate("DailyIncpectionReportStack", {
                  reportTitle: "Daily Inspection Report",
                })
              }
            />
            <ReportTypeCard
              title={"Incident Report"}
              onSelect={() =>
                navigation.navigate("IncedentReportStack", {
                  reportTitle: "Incident Report",
                })
              }
            />
          </View>
          {/* <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <ReportTypeCard
        title={"Mobile Report"}
        onSelect={() =>
          navigation.navigate("MobileReportStack", {
            reportTitle: "Mobile Report",
          })
        }
      />
      <ReportTypeCard
        title={"Site Visit Report"}
        onSelect={() =>
          navigation.navigate("SiteVisitReportStack", {
            reportTitle: "Site Visit Report",
          })
        }
      />
    </View> */}
        </View>
      ) : (
        <View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ReportTypeCard
              title={"Incident Report"}
              onSelect={() =>
                navigation.navigate("IncedentReportStack", {
                  reportTitle: "Incident Report",
                })
              }
            />
          </View>
          {/* <View
  style={{
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  }}
>
  <ReportTypeCard
    title={"Mobile Report"}
    onSelect={() =>
      navigation.navigate("MobileReportStack", {
        reportTitle: "Mobile Report",
      })
    }
  />
  <ReportTypeCard
    title={"Site Visit Report"}
    onSelect={() =>
      navigation.navigate("SiteVisitReportStack", {
        reportTitle: "Site Visit Report",
      })
    }
  />
</View> */}
        </View>
      )}
    </>
  );
}

export default AllReportType;
