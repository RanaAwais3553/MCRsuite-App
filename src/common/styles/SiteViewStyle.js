import { Dimensions, StyleSheet } from "react-native";
import { hp, wp } from "./Dimensions";

const SiteViewStyle = StyleSheet.create({
  container: {
    paddingHorizontal: wp(6),
  },
  headerLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    // backgroundColor: "green",
  },
  userDetail: {
    flexGrow: 0.1,
    // backgroundColor: "#121212",
    // backgroundColor: "yellow",
    // justifyContent: "space-around",
    // alignItems: "center",
    paddingTop: hp(10),
  },
  card: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: wp(5),
    marginTop: hp(1),
    // marginBottom: hp(1),
    // marginVertical: hp(1),
    paddingVertical: hp(2),
    // paddingHorizontal: wp(3),
    backgroundColor: "#ffffff",
    // backgroundColor: "blue",
    // marginHorizontal: wp(6),
    borderRadius: wp(2),
    // marginVertical: 10,
  },
  cards: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "flex-start",
    // alignItems: "flex-end",
    // marginVertical: hp(1),
    backgroundColor: "#fff",
    // marginHorizontal: wp(6),
    borderRadius: wp(2),
  },
  cardIcon: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 5,
  },
  cardHeading: {
    color: "#9e9e9e",
    fontWeight: "700",
    // backgroundColor: "green",
  },
});
export { SiteViewStyle };
