import React, { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  Pressable,
  View,
  TextInput,
  Picker,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import DropDownItem from "../../molecules/DropDownItems";
import CheckBoxItem from "../../molecules/CheckBoxItem";
import MultilineText from "../../molecules/MultiLineText";
import { ReportFormStyle } from "../../../styles/ReportFormStyle";
import FilePicker from "../../../../screens/reports/FilePicker";

const ReportForm = () => {
  // const [products, setProducts] = useState(data);
  const [hide, setHide] = useState(false);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [fileUri, setFile] = useState("");
  //   const handleChange = (id) => {
  //     alert(id);
  //     let temp = products.map((product) => {
  //       if (id === product.id) {
  //         return { ...product, isChecked: !product.isChecked };
  //       }
  //       return product;
  //     });
  //     setProducts(temp);
  //   };
  const fileHandler = (fileuri) => {
    setFile(fileuri);
  };
  // console.log("file uri in parent component is:!...", fileUri);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={ReportFormStyle.container}
    >
      <View
        style={{
          flex: 3,
          backgroundColor: "white",
          marginHorizontal: 20,
          // backgroundColor: "green",
        }}
      >
        <View style={{ paddingVertical: 10 }}>
          <DropDownItem />
        </View>
        <CheckBoxItem />
      </View>
      <FilePicker fileHandler={fileHandler} />
      <MultilineText />
    </KeyboardAvoidingView>
  );
};

export default ReportForm;
