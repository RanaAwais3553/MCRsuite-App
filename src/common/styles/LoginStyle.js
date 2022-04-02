import { Dimensions, StyleSheet } from "react-native";
import { hp, wp } from "./Dimensions";
const loginStyle = StyleSheet.create({
  container: {
    // paddingTop: hp(8),
    flex: 1,
    // backgroundColor: "#121212",
    justifyContent: "center",
    // alignItems: "center",
  },
  inputview: {
    flex: 1,
    // backgroundColor: "green",
    justifyContent: "flex-start",
    // alignItems: "center",
  },
  logo: {
    flex: 0.3,
    justifyContent: "flex-end",
    // backgroundColor: "green",
    alignItems: "center",
    // paddingBottom: hp(5),
  },
  input: {
    height: hp(6.5),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
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
  },
  inputIos: {
    height: hp(6),
    // marginHorizontal: wp(7),
    paddingHorizontal: wp(2),
    // paddingVertical: hp(2),
    borderWidth: 1,
    // backgroundColor: "red",
    borderColor: "grey",
    borderRadius: wp(1.5),
  },
  btn: {
    width: wp(25),
    height: hp(7),
    paddingVertical: hp(2),
    // backgroundColor: "#3155a5",
    borderRadius: "50",
    borderRadius: wp(1.5),
  },
  loginButtonContainerStyle: {
    width: wp(30),
    // paddingHorizontal: wp(4),
    borderRadius: hp(1),
    // backgroundColor: "yellow",
    justifyContent: "center",
    marginTop: 10,
  },
  loginButtonDisableTitleStyle: {
    color: "#f2f2f2",
    paddingVertical: hp(0.2),
    fontWeight: "800",
    fontSize: wp(4.5),
  },
  loginButtonTitleStyle: {
    color: "#f2f2f2",
    fontWeight: "800",
    paddingVertical: hp(0.2),
    fontSize: wp(4.5),
  },
});
export { loginStyle };
