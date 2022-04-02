import { StyleSheet } from "react-native";
import { hp, wp } from "./Dimensions";

const logOutStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  changeUserButtonStyle: {
    height: hp(5),
    width: hp(16),
    backgroundColor: "#d14e52",
    borderRadius: hp(4),
    justifyContent: "center",
  },
  changeUserTouchableStyle: {
    height: hp(5),
    borderRadius: hp(4),
    width: hp(16),
  },
  changeUserTextStyle: {
    textAlign: "center",
    fontSize: hp(1.7),
    color: "#fff",
    fontFamily: "OpenSans-Bold",
  },
  scannerViewStyle: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
export { logOutStyle };
