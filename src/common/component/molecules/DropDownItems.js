import React from "react";
import { View, Text } from "react-native";
import { hp } from "../../styles/Dimensions";
import DropDown from "../atom/DropDown";
import TextHeading from "../atom/TextHeading";

export default function DropDownItem({
  dropdownhandler,
  item,
  setitem,
  site_Id,
  update,
  title,
  siteSearch,
}) {
  return (
    <View style={{}}>
      <DropDown
        dropdownhandler={dropdownhandler}
        item={item}
        setitem={setitem}
        site_Id={site_Id}
        update={update}
        title={title}
        siteSearch={siteSearch}
      />

      {/* <
       /> */}
    </View>
  );
}
