import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  Modal,
  StyleSheet,
  Alert,
  FlatList,
} from "react-native";
import { ProfileStyle } from "../../styles/ProfileStyle";
import { SiteViewStyle } from "../../styles/SiteViewStyle";
import TextHeading from "../atom/TextHeading";
import { hp, wp } from "../../styles/Dimensions";
import Icon from "../atom/Icon";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
function TimeSlots({ callBackModal, sitesTimeSlotsArray }) {
  const [modalVisible, setModalVisible] = useState(true);
  if (sitesTimeSlotsArray.length == 0) {
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredViews}>
          <View
            style={{
              flex: 0.3,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f2f2f2",
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans-Bold",
                color: "#9E9E9E",
                fontSize: 18,
              }}
            >
              Time Slots is not Available
            </Text>
            {/* <TextHeading title={"Start Time"} /> */}
          </View>

          <Pressable
            style={{ ...styles.button, alignSelf: "center", marginTop: 10 }}
            onPress={() => {
              callBackModal();
              setModalVisible(false);
            }}
          >
            <Text style={{ ...ProfileStyle.textStyle, fontSize: 20 }}>
              Close
            </Text>
          </Pressable>
        </View>
      </Modal>
    );
  }
  const renderItem = (itemData) => {
    console.log("item data is ", itemData.item.id);
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredViews}>
          <View
            style={{
              ...styles.modalView,
              backgroundColor: "#f2f2f2",
            }}
          >
            <View style={styles.card}>
              <View style={styles.cardIcon}>
                <Icon
                  Type={Ionicons}
                  names={"today"}
                  sizes={22}
                  colors={"#3155A5"}
                />
                <TextHeading title={itemData.item.day} />
              </View>
              <View style={styles.cards}>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "OpenSans-Bold",
                      color: "#9E9E9E",
                    }}
                  >
                    Start Time
                  </Text>
                  {/* <TextHeading title={"Start Time"} /> */}
                  <Text
                    style={{
                      fontFamily: "OpenSans-Bold",
                      color: "#9E9E9E",
                    }}
                  >
                    {itemData.item.start_time}
                  </Text>
                  {/* <TextView text={l.start_time} /> */}
                  {/* </View> */}
                </View>
                <View
                  style={{
                    height: "100%",
                    width: "1%",
                    backgroundColor: "#E6E6E6",
                  }}
                ></View>
                <View
                  style={{
                    flex: 1,
                    // paddingLeft: 12,
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "green",
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "OpenSans-Bold",
                      color: "#9E9E9E",
                    }}
                  >
                    End Time
                  </Text>
                  {/* <TextHeading title={"Start Time"} /> */}
                  <Text
                    style={{
                      fontFamily: "OpenSans-Bold",
                      color: "#9E9E9E",
                    }}
                  >
                    {itemData.item.end_time}
                  </Text>
                  {/* <TextHeading title={"End Time"} />
                  <TextView text={l.end_time} /> */}
                </View>
              </View>
            </View>
            <Pressable
              style={styles.button}
              onPress={() => {
                callBackModal();
                setModalVisible(false);
              }}
            >
              <Text style={{ ...ProfileStyle.textStyle, fontSize: 20 }}>
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  };
  const renderItemEmptyTimeSlots = () => {
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredViews}>
          <View
            style={{
              ...styles.modalView,
              backgroundColor: "#f2f2f2",
            }}
          >
            <View style={styles.card}>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f2f2f2",
                }}
              >
                <Text
                  style={{
                    fontFamily: "OpenSans-Bold",
                    color: "#9E9E9E",
                  }}
                >
                  No Time Slots
                </Text>
                {/* <TextHeading title={"Start Time"} /> */}
              </View>
            </View>
            <Pressable
              style={styles.button}
              onPress={() => {
                callBackModal();
                setModalVisible(false);
              }}
            >
              <Text style={ProfileStyle.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      data={sitesTimeSlotsArray}
      renderItem={renderItem}
    />
  );
}
export default TimeSlots;
const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "white",
    justifyContent: "flex-end",
    paddingHorizontal: wp(2),
    backgroundColor: "#DBD9D9",
    borderTopRightRadius: wp(4),
    borderTopLeftRadius: wp(4),
    borderBottomLeftRadius: hp(2),
    borderBottomRightRadius: hp(2),
    marginHorizontal: wp(2),
  },
  button: {
    width: wp(25),
    height: hp(7),
    // padding: hp(2),
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    marginBottom: hp(2),
    backgroundColor: "#3155A5",
    borderRadius: wp(2),
    // margin: wp(1),
    alignSelf: "flex-end",
  },
  centeredViews: {
    flex: 1,
    // height: "30%",
    justifyContent: "center",
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
  },
  card: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: wp(5),
    marginVertical: hp(1),
    paddingVertical: hp(2),
    // paddingHorizontal: wp(3),
    backgroundColor: "#F2F2F2",
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
    backgroundColor: "#F2F2F2",
    // marginHorizontal: wp(6),
    borderRadius: wp(2),
  },
  cardIcon: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
