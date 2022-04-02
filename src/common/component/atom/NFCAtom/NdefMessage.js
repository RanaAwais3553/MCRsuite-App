import React, { useEffect } from "react";
import { View, Text, Alert, TouchableOpacity, Linking } from "react-native";
import { Ndef } from "react-native-nfc-manager";
export default function NdefMessage({ ndef, data }) {
  const TNF_MAP = {
    EMPTY: 0x0,
    WELL_KNOWN: 0x01,
    MIME_MEDIA: 0x02,
    ABSOLUTE_URI: 0x03,
    EXTERNAL_TYPE: 0x04,
    UNKNOWN: 0x05,
    UNCHANGED: 0x06,
    RESERVED: 0x07,
  };
  const RTD_MAP = {
    TEXT: "T", // [0x54]
    URI: "U", // [0x55]
    SMART_POSTER: "Sp", // [0x53, 0x70]
    ALTERNATIVE_CARRIER: "ac", //[0x61, 0x63]
    HANDOVER_CARRIER: "Hc", // [0x48, 0x63]
    HANDOVER_REQUEST: "Hr", // [0x48, 0x72]
    HANDOVER_SELECT: "Hs", // [0x48, 0x73]
  };
  console.log(ndef, "0000000000000000000000000000000000000000");
  function tnfValueToName(value) {
    for (let name in TNF_MAP) {
      if (value === TNF_MAP[name]) {
        return name;
      }
    }
    return null;
  }
  function rtdValueToName(value) {
    value = value.reduce((acc, byte) => acc + String.fromCharCode(byte), "");
    for (let name in RTD_MAP) {
      if (value === RTD_MAP[name]) {
        return name;
      }
    }
  }
  const renderPayload = () => {
    const tnfName = tnfValueToName(ndef.tnf);
    const rtdName = rtdValueToName(ndef.type);
    if (ndef.tnf === Ndef.TNF_WELL_KNOWN) {
      if (rtdName === "URI") {
        let uri = Ndef.uri.decodePayload(ndef.payload);
        data(tnfName, rtdName, uri);
        return uri;
      } else if (rtdName === "TEXT") {
        console.log("Ndef Message in Ndef Component is:!....", ndef.payload);
        let text = Ndef.text.decodePayload(ndef.payload);
        console.log(
          "Ndef Message in Ndef Component is.....................................:!....",
          text
        );
        data(tnfName, rtdName, text);
        return text;
      }
    } else {
      return null;
    }
    return null;
  };
  useEffect(() => {
    renderPayload();
    // alert("data");
  }, []);
  return <View style={{}}>{/* <Text></Text> */}</View>;
}
