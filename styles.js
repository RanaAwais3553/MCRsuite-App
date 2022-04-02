import { StyleSheet, Dimensions, Platform } from "react-native";
let { width: screenWidth, height: screenHeight } = Dimensions.get("window");
export default styles = StyleSheet.create({
  // **************  BarCode Scanner Styling Start (common/component/organisms/BarCodeScanner) ***********

  barCodeScannerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  barCodeMaintext: {
    fontSize: 16,
    margin: 0,
  },
  barCodeScannerbox: {
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    width: 250,
    overflow: "hidden",
  },
  flexCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  x_axis_flexStart: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  x_axis_flexEnd: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  y_axis_flexStart: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  y_axis_flexEnd: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  x_axis_y_axis_Start: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  //******************  Circle Stats Styling Start (common/component/atom/circleState) *****************

  circleComponentContainer: {
    flex: 1,
  },
  circleStringTextContainer: {
    flex: screenHeight < 600 ? 0.5 : 1,
    //   backgroundColor: "#121212",
    width: "90%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
  },
  circleStringText1: {
    fontSize: screenHeight < 600 ? 14 : 16,
    color: "#468097",
    marginVertical: screenHeight < 600 ? 5 : 10,
  },
  circleStringText2: {
    fontSize: screenHeight < 600 ? 14 : 16,
    color: "#8c677d",
    marginVertical: screenHeight < 600 ? 5 : 10,
  },
  circleContainer: {
    flex: screenHeight < 600 ? 1 : 2,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  circle: {
    height: screenHeight < 600 ? 60 : 80,
    width: screenHeight < 600 ? 60 : 80,
    borderWidth: screenHeight < 600 ? 7 : 10,
    borderRadius: screenHeight < 600 ? 30 : 40,
    justifyContent: "center",
    alignItems: "center",
  },
  firstCircleText: {
    fontSize: screenHeight < 600 ? 18 : 18,
    color: "#468097",
    marginVertical: screenHeight < 600 ? 12 : 15,
  },
  secondCircleText: {
    fontSize: screenHeight < 600 ? 18 : 18,
    color: "#8c677d",
    marginVertical: screenHeight < 600 ? 12 : 15,
  },

  firstCircleLeads: {
    fontSize: screenHeight < 600 ? 18 : 22,
    color: "#468097",
    marginVertical: screenHeight < 600 ? 12 : 15,
  },
  secondCircleLeads: {
    fontSize: screenHeight < 600 ? 18 : 22,
    color: "#8c677d",
    marginVertical: screenHeight < 600 ? 12 : 15,
  },

  //**************************  Div Block Styling Start (common/component/atom/Div Block)**************

  divBlockContainer: {
    // height: screenHeight < 600 ? screenHeight / 9 : screenHeight / 42,
    // width: screenWidth / 1.25,
    // flexDirection: "row",
    flex: 1,
    // backgroundColor: "#121212",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  divBlockTextContainerStyle: {
    height: screenHeight < 600 ? 65 : 70,
    paddingHorizontal: 10,
    backgroundColor: "#468097",
    borderRadius: screenHeight < 600 ? 10 : 15,
    justifyContent: "center",
    alignItems: "center",
  },
  divBlockText: {
    fontSize: screenHeight < 600 ? 16 : 18,
    fontWeight: "bold",
    paddingVertical: 10,
    color: "#f2f2f2",
    textAlign: "center",
  },

  //****************************  Header Styling Start (common/component/organisms/Header)  *************

  headerContainer: {
    flex: 0.4,
    justifyContent: "flex-start",
    marginTop: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: screenHeight < 600 ? 18 : 22,
    color: "#6cc0ba",
    marginVertical: screenHeight < 600 ? 12 : 15,
  },

  //**********************  ProgressBar Styling Start (common/component/atom/ProgressStatBar)  *************

  progressBarContainerStyle: {
    flex: screenHeight < 600 ? 0.5 : 0.8,
  },
  progressBarTextContainerStyle: {
    flex: screenHeight < 600 ? 0.7 : 0.8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressBarText: {
    fontSize: screenHeight < 600 ? 13 : 15,
    color: "#bac7d2",
  },

  //**************************  Rating Styling Start (common/component/atom/Rating)  *************

  ratingComponentStyle: {
    flex: 0.5,
  },
  ratingTextStyle: {
    fontWeight: "bold",
    fontSize: screenHeight < 600 ? 16 : 18,
    color: "#6cc0ba",
    textAlign: "center",
  },
  ratingAPIStyle: {
    paddingVertical: screenHeight < 600 ? 5 : 10,
  },

  //***********  Stat Component Styling Start (common/component/organisms/StatComponent)  *************

  statContainer: {
    flex: 0.95,
    justifyContent: "flex-start",
    marginTop: 40,
    alignItems: "center",
    alignSelf: "stretch",
    // backgroundColor: "#121212",
  },
  statCircleDiv: {
    height: 20,
    width: "70%",
    justifyContent: "center",
  },
  statProgressBarDiv: {
    height: 10,
    width: "94%",
  },

  //**************************  Login Form Styling Start (screens/authScreen/Login)  *************

  inputFieldContainer: {
    flex: 1,
    backgroundColor: "#4b4b49",
    justifyContent: "center",
    alignItems: "center",
  },
  inputFieldStyle: {
    height: 50,
    width: screenWidth / 1.2,
    borderRadius: 10,
    margin: 12,
    borderWidth: 0,
    backgroundColor: "#f1efed",
    color: "#666666",
    padding: 10,
  },
  loginButtonContainerStyle: {
    width: screenWidth / 2.8,
    borderRadius: 10,
    marginTop: 10,
  },
  loginButtonDisableTitleStyle: {
    color: "#f2f2f2",
    fontWeight: Platform.OS === "ios" ? "800" : "bold",
  },
  loginButtonTitleStyle: {
    color: "#f2f2f2",
    fontWeight: Platform.OS === "ios" ? "800" : "bold",
    fontSize: 22,
  },

  //************************  DateText  Styling Start (component/molecules/DateText)  *************

  dateTextContainerStyle: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  dateTextStyle: {
    fontSize: Dimensions.get("window").height < 600 ? 18 : 22,
    color: "#3f5c83",
    marginVertical: Dimensions.get("window").height < 600 ? 12 : 15,
  },

  // ************************ Bottom Navigation Styles (navigation/BottomNavigation) **********

  bottomNavigationShadow: {
    shadowColor: "#7f5d50",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  bottomTabBarButtonLeftTouchAbleStyle: {
    flex: 1,
    height: 60,
    alignSelf: "center",
  },
  bottomTabBarButtonCenterTouchAbleStyle: {
    //  backgroundColor: "#121212",

    height: 70,
    width: 70,
    // paddingHorizontal: 5,
    // height: 80,
    //   position: "absolute",
    //  marginLeft:140,
    //   top: -43,
    alignSelf: "center",
  },
  bottomTabBarButtonRightTouchAbleStyle: {
    flex: 1,
    height: 20,
    alignSelf: "center",
  },

  bottomTabBarButtonLeftViewStyle: {
    //  backgroundColor: "#d14e52",
    height: screenHeight < 630 ? 55 : 70,
    width: screenHeight < 630 ? 55 : 70,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    //  borderTopWidth: 19,
    //  position:'absolute',
    borderRadius: screenHeight < 630 ? 27.5 : 35,
    borderWidth: screenHeight < 630 ? 5 : 7,
    // paddingHorizontal: 5,
    bottom: Platform.OS == "ios" ? 33 : 28,
    //  top: -28,
    shadowOpacity: -80,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderColor: "#f2f2f2",
  },
  bottomTabBarButtonRightViewStyle: {
    //  backgroundColor: "#c6a5c4",
    height: 60,

    width: 60,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Dimensions.get("window").height < 600 ? 7 : 10,
  },
  bottomTabBarButtonLeftTextStyle: {
    // color: "#fff",
    fontSize: 11,
  },
  bottomTabBarButtonRightTextStyle: {
    color: "#a6a2a2",
    fontSize: 11,
    //  paddingHorizontal: 15,
  },

  // ********************************** Modal Styling Start ************************************************

  modalMessageContainer: {
    margin: 20,
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    elevation: 2,
  },
  modalButtonClose: {
    backgroundColor: "#d14e52",
  },
  modalTextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
