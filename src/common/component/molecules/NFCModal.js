import React, { useState, useEffect } from "react";
import { View, Text, Modal, Platform } from "react-native";
import { ProfileStyle } from "../../styles/ProfileStyle";

import NfcManager, { NfcTech, NfcEvents } from "react-native-nfc-manager";
import NdefMessage from "./../atom/NFCAtom/NdefMessage";
// import { Ndef } from "react-native-nfc-manager";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import SCanView from "../atom/NFCAtom/ScanView";
import CheckButton from "../atom/NFCAtom/CheckButton";
import { hp } from "../../styles/Dimensions";
NfcManager.start()
  .then(() => console.log("NFC Supported NFC Supported"))
  .catch((err) => {
    console.log("NFC Does not support NFC Does not support", err);
  });

export default function ModalItem({
  isFocused,
  modalHandler,

  navigation,
}) {
  const [modalVisible, setModalVisible] = useState(true);
  const [uid, setUid] = useState("");
  const [ndefs, setNdef] = useState("");

  useEffect(() => {
    isFocused &&
      Platform.OS == "ios" &&
      ReadNdefIOS()
        .then(({ ndefMessage }) => {
          setNdef(ndefMessage[0]);
          setUid(ndefMessage[0].id);
          console.log("Data is", ndefMessage);
        })
        .catch(() => {
          navigation.navigate("Home");
        });

    console.log("Modal Open");
    Platform.OS == "android" && ReadNdefAndroid();
    return () => {
      console.log("Modal Close");

      Platform.OS == "android" && NfcManager.cancelTechnologyRequest();
    };
  }, []);
  useEffect(() => {
    if (uid) {
      modalHandler(uid);
      setModalVisible(false);
    }
  }, [uid]);

  const cleanUp = () => {
    NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    NfcManager.setEventListener(NfcEvents.SessionClosed, null);
  };
  const ReadNdefIOS = () => {
    return new Promise((resolve) => {
      let tagFound = null;

      NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag) => {
        tagFound = tag;
        console.log("Nfc Tag Scanned!...", tagFound.ndefMessage);
        // const ndef =
        //   Array.isArray(tagFound.ndefMessage) && tagFound.ndefMessage.length > 0
        //     ? tagFound.ndefMessage[0]
        //     : null;
        // // setNdef(ndef);
        // console.log(
        //   "Ndef Message is:!...*************************************************",
        //   ndef
        // );

        //  setUid(tagFound.id);
        resolve(tagFound);
        NfcManager.unregisterTagEvent().catch(() => {
          console.log("Tag Un regester");
        });
      });

      NfcManager.setEventListener(NfcEvents.SessionClosed, () => {
        cleanUp();
        if (!tagFound) {
          resolve();
        }
      });

      NfcManager.registerTagEvent();
    });
  };
  console.log("Ndef Message is in state is:!...", ndefs);
  async function ReadNdefAndroid() {
    try {
      console.log("Read Ndef Function Try Block Called");
      // let tech =
      //   Platform.OS == "ios" ? await NfcTech.MifareIOS : await NfcTech.Ndef;
      // nsole.log("Read Ndef Function Request to Technology Block Called", tech);
      await NfcManager.requestTechnology(NfcTech.Ndef, {
        alertMessage: "Some Function Called!",
      });
      console.log("Read Ndef Function Request to Technology Block Called");
      const tag = await NfcManager.getTag();
      const ndef =
        Array.isArray(tag.ndefMessage) && tag.ndefMessage.length > 0
          ? tag.ndefMessage[0]
          : null;
      setNdef(ndef);

      setUid(tag.id);
    } catch (ex) {
      console.log("Read Ndef Function Catch Block Called", ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
      console.log("Read Ndef Finally Function Called");
    }
  }
  const data = (ndef, rtd, text) => {
    console.log(text, "+++++++++++++++++++++++++++++++++++++++++++++++++++");
    setUid(text);
  };

  const modalVisibleScan = (t) => {
    setModalVisible(t);
  };

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "red",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 4.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          {Platform.OS == "android" && (
            <Modal
              // hardwareAccelerated={true}
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
                navigation.navigate("Home");

                // alert("data");
                // modalHandler();
              }}
            >
              {/* <Modals> */}
              <View style={ProfileStyle.centeredViews}>
                <View
                  style={{
                    ...ProfileStyle.modalView,
                    borderBottomLeftRadius: hp(2),
                    borderBottomRightRadius: hp(2),
                    backgroundColor: "white",
                  }}
                >
                  {!uid ? (
                    <SCanView
                      navigation={navigation}
                      modalVisibles={modalVisibleScan}
                    />
                  ) : (
                    <>
                      {/* <CheckButton modalVisible={modalVisibledata} /> */}
                      {!!ndefs ? (
                        <NdefMessage ndef={ndefs} data={data} />
                      ) : (
                        <Text></Text>
                      )}
                    </>
                  )}
                </View>
              </View>
            </Modal>
          )}
          {Platform.OS == "ios" && !!ndefs ? (
            <NdefMessage ndef={ndefs} data={data} />
          ) : (
            <View></View>
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
