import React, { useState } from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { hp, wp } from "../../styles/Dimensions";
import MaterialIcons from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "../../styles/DimensionsTool";
import Testmodel from "./Testmodel";
let { width: screenWidth, height: screenHeight } = Dimensions.get("window");
function Sites({ title }) {
  const [modalVisible, setModalVisible] = useState(false);
  const callBackModal = () => {
    setModalVisible(false);
  };
  let strippedHtmlInfo = title.replace(/<[^>]+>/g, "");
  return (
    <>
      <TouchableOpacity
        // style={styles.button}

        style={styles.card}
        activeOpacity={0.7}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View
          style={{
            flexDirection: "column",
            margin: 8,
            padding: 8,
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            // backgroundColor: "yellow",
          }}
        >
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={{ ...styles.title, width: screenWidth / 1.4 }}
          >
            {" "}
            {strippedHtmlInfo}strippedHtmlInfo strippedHtmlInfo strippedHtmlInfo
          </Text>
          <Text style={styles.code}> </Text>
        </View>

        <View style={styles.price}>
          <MaterialIcons
            name="eye"
            // onPress={onSelect}
            color="#3155a5"
            size={35}
          />
        </View>
      </TouchableOpacity>
      {modalVisible && (
        <Testmodel
          callBackModal={callBackModal}
          data={
            <Text
              style={{
                fontSize: 16,
                fontFamily: "OpenSans-Bold",
                textAlign: "center",
              }}
            >
              {strippedHtmlInfo}strippedHtmlInfo strippedHtmlInfo
              strippedHtmlInfo
            </Text>
          }
        />
      )}
    </>
    // <View
    //   style={{
    //     flex: 1,
    //     marginTop: 10,
    //     // marginLeft: 5,
    //     alignSelf: "center",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     //  backgroundColor: "#121212",
    //     width: "100%",
    //   }}
    // >
    //   <TouchableNativeFeedback onPress={onSelect} style={{ flex: 1 }}>
    //     <View
    //       style={{
    //         height: hp(9),
    //         width: wp(38),
    //         backgroundColor: "#3155a5",
    //         paddingHorizontal: 5,
    //         elevation: 5,
    //         borderRadius: 12,
    //         justifyContent: "center",
    //       }}
    //     >
    //       <Text
    //         numberOfLines={2}
    //         ellipsizeMode={"tail"}
    //         style={{
    //           textAlign: "center",
    //           color: "#fbfbfb",
    //           fontFamily: "Avenir-Heavy",
    //           fontWeight: "900",
    //           fontSize: wp(3.7),
    //         }}
    //       >
    //         {title}
    //       </Text>
    //     </View>
    //   </TouchableNativeFeedback>
    // </View>
  );
}
const styles = StyleSheet.create({
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
    end: 5,
    bottom: 10,
    padding: 10,
    margin: 8,
    // fontSize: 16,
    fontFamily: "Avenir-Heavy",
    color: "#EE5A55",
    // backgroundColor: "red",
  },
});
export default Sites;
