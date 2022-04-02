import React, { useState, useEffect } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { hp, wp } from "../../styles/Dimensions";

export default function DropDown({
  dropdownhandler,
  item,
  setitem,
  site_Id,
  update,
  title,
  siteSearch,
}) {
  const dropDownValue = item.find((itm) => itm.value === site_Id);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(update ? dropDownValue.value : null);
  const [scrollEnabled, setscrollEnabled] = useState(true);

  useEffect(() => {
    dropdownhandler(scrollEnabled, value);
  }, [scrollEnabled]);
  return (
    <DropDownPicker
      listMode="SCROLLVIEW"
      open={open}
      value={value}
      autoScroll={true}
      items={item}
      onClose={() => setscrollEnabled(true)}
      onOpen={() => setscrollEnabled(false)}
      setOpen={setOpen}
      setValue={(item) => {
        // alert("dsfdsfs");
        setValue(item);
        // alert(item);
      }}
      searchable={siteSearch}
      max={1}
      setItems={setitem}
      placeholder={title}
      style={{
        borderColor: "#fff",
        // borderWidth: 0.8,
        shadowColor: "#000",
        borderRadius: wp(1.5),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
          height: 0,
          width: 0,
        },
        elevation: 2,
      }}
      placeholderStyle={{
        color: "grey",
      }}
      dropDownContainerStyle={
        Platform.OS == "ios"
          ? styles.dropdownContainerIOS
          : styles.dropdownContainerANDROID
      }
    />
    // </View>
  );
}
const styles = StyleSheet.create({
  dropdownContainerIOS: {
    backgroundColor: "#fff",
    position: "relative",
    marginTop: -50,
    zIndex: 1000,
    marginBottom: 50,
    borderWidth: 0.8,
    borderColor: "grey",
  },
  dropdownContainerANDROID: {
    // borderColor: "#fff",
    borderWidth: 0.8,
    borderColor: "grey",
  },
});
