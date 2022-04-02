import { Dimensions, StyleSheet } from "react-native";
import { hp, wp } from "./Dimensions";

const SiteViewStyle = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 2,
    backgroundColor: "#f2f2f2",
    // backgroundColor: "yellow",
    // justifyContent: "space-around",
    // alignItems: "center",
    paddingVertical: hp(10),
  },
  card: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: wp(5),
    marginVertical: hp(1),
    paddingVertical: hp(2),
    // paddingHorizontal: wp(3),
    backgroundColor: "#ffffff",
    // backgroundColor: "blue",
    // marginHorizontal: wp(6),
    borderRadius: wp(2),
    // marginVertical: 10,
  },
  cards: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: hp(1),
    backgroundColor: "#ffffff",
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
