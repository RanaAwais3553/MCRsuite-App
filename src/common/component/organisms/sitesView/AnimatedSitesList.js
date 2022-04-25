import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  Text,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import {
  hideOrShowBottomTabBarAction,
  showBottomTabBarAction,
} from "../../../../store/action/hideOrShowBottomTabBarAction";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "../../../styles/DimensionsTool";
let { height: screenHeight, width: screenWidth } = Dimensions.get("window");
function AnimatedSitesList({ itemData, navigation, scrollY, onSelect }) {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(hideOrShowBottomTabBarAction());
  //   return () => {
  //     dispatch(showBottomTabBarAction());
  //   };
  // }, [dispatch]);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "column" }}>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.7}
            onPress={onSelect}
          >
            <View
              style={{
                flexDirection: "column",
                margin: 8,
                padding: 8,
                justifyContent: "space-evenly",
                alignItems: "flex-start",
              }}
            >
              <Text style={styles.title}> {itemData.item.name}</Text>
              <Text style={styles.code}> </Text>
            </View>
            <View style={styles.price}>
              <MaterialIcons
                name="rightcircle"
                onPress={onSelect}
                color="#D14E52"
                size={25}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
  },
  name: {
    fontFamily: "Verdana",
    fontSize: 18,
  },
  card: {
    // opacity: 15%, y-asix: 4, blur: 15
    flexDirection: "row",
    marginBottom: 8,
    padding: 5,
    height: 93,
    width: widthPercentageToDP("100%") * 0.98,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 8,
    shadowColor: "#000",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 4,
    zIndex: 5,
  },

  title: { fontSize: 16, fontFamily: "Avenir-Heavy", color: "#042C5C" },
  code: { fontSize: 13, fontFamily: "Avenir-Heavy", color: "#77869E" },
  price: {
    position: "absolute",
    end: 0,
    bottom: 0,
    padding: 10,
    margin: 8,
    // fontSize: 16,
    fontFamily: "Avenir-Heavy",
    color: "#EE5A55",
  },
});
export default AnimatedSitesList;
