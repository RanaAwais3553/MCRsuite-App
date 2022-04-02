import { Dimensions, StyleSheet } from "react-native";
import { hp, wp } from "./Dimensions";

const ReportFormStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    // marginVertical: hp(7),
    marginTop: hp(6),

    paddingHorizontal: wp(2),
  },
  iconStyle: {
    borderColor: "#3155a5",
  },
  textStyle: {
    textDecorationLine: "none",
  },
  checkboxStyles: {
    // backgroundColor: "#121212",
    // paddingHorizontal: wp(6),
    // paddingVertical: hp(0.5),
  },
  inpuTexts: {
    paddingHorizontal: wp(2),
    backgroundColor: "#fff",
    width: "100%",
    padding: 7,
    shadowColor: "#000",
    borderRadius: wp(1.5),
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
  inputView: {
    flex: 2,

    // backgroundColor: "white",
    // paddingHorizontal: wp(6),
    paddingVertical: hp(1),
  },
});
export { ReportFormStyle };
