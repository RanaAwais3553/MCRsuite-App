import { StyleSheet } from "react-native";
import { hp, wp } from "./Dimensions";

const ProfileStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3155a5",
  },
  card: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    borderTopRightRadius: wp(6),
    borderTopLeftRadius: wp(6),
    // alignItems: "center",
    paddingHorizontal: wp(4),
    // paddingVertical: wp(2),
  },
  centeredView: {
    flex: 1,
    // height: "30%",
    justifyContent: "flex-end",
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
  },
  centeredViews: {
    flex: 1,
    // height: "30%",
    justifyContent: "center",
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
  },
  modalView: {
    flexGrow: 0.1,
    width: "100%",
    backgroundColor: "white",
    // padding: 35,
    justifyContent: "flex-end",
    // marginHorizontal: 10,
    paddingHorizontal: wp(6),
    paddingVertical: hp(1),
    backgroundColor: "#dbd9d9",
    borderTopRightRadius: wp(4),
    borderTopLeftRadius: wp(4),
  },
  button: {
    padding: hp(2),
    elevation: 2,
    marginBottom: hp(2),
  },
  //   buttonOpen: {
  //     backgroundColor: "#F194FF",
  //   },
  buttonClose: {
    backgroundColor: "#3155a5",
    borderRadius: wp(2),
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: hp(4),
    textAlign: "center",
  },
  avator: {
    marginTop: hp(3),
  },
});
export { ProfileStyle };
