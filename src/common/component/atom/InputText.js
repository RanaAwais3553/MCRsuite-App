import React, { useState } from "react";
import { View, Text, Platform, TextInput } from "react-native";
import { hp, wp } from "../../styles/Dimensions";
import { loginStyle } from "../../styles/LoginStyle";
import Icon from "react-native-dynamic-vector-icons";

export default function InputTexts({
  placeHolders,
  keyboardTypes,
  values,
  onChangeTexts,
  secureTextEntries,
  editables,
  IconName,
  IconType,
  size,
  eyeicons,
  types,
}) {
  const [eyeIcon, setEyeIcon] = useState("eye-outline");
  const [password, setPassword] = useState(true);
  const changeIcon = () => {
    setPassword(!password);
    {
      eyeIcon == "eye-outline"
        ? setEyeIcon("eye-off-outline")
        : setEyeIcon("eye-outline");
    }
  };
  return (
    <View style={{ ...loginStyle.input }}>
      <Icon
        color={"#3155a5"}
        name={IconName}
        type={IconType}
        size={size}
        onPress={() => {}}
      />

      <TextInput
        style={{
          paddingHorizontal: wp(2),
          paddingRight: wp(5),
          width: "84%",
          color: "#636262",
          // height: wp(7),
        }}
        // style={Platform.OS == "ios" ? loginStyle.inputIos : loginStyle.input}
        onChangeText={onChangeTexts}
        value={values}
        placeholderTextColor={"grey"}
        placeholder={placeHolders}
        keyboardType={keyboardTypes}
        secureTextEntry={password ? secureTextEntries : false}
        rejectResponderTermination={true}
        spellCheck={true}
        editable={editables}
      />
      {/* <Icon
        // name={eyeicons ? eyeIcon : ""}
        type={types}
        size={size}
        style={{ paddingVertical: hp(2), paddingRight: wp(3.5) }}
        onPress={() => {
          changeIcon();
        }}
      /> */}
    </View>
  );
}
