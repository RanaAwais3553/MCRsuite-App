import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { loginStyle } from "../../styles/LoginStyle";
import { hp, wp } from "../../styles/Dimensions";
import Icon from "react-native-dynamic-vector-icons";
export default function PswdInputText({
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
          height: hp(7),
          // backgroundColor: "green",
        }}
        onChangeText={onChangeTexts}
        value={values}
        placeholder={placeHolders}
        keyboardType={keyboardTypes}
        secureTextEntry={password ? secureTextEntries : false}
        rejectResponderTermination={true}
        spellCheck={true}
        editable={editables}
      />
      <Icon
        color={"#3155a5"}
        style={{
          paddingVertical: hp(1),
          // backgroundColor: "yellow",
          paddingRight: wp(3.5),
        }}
        name={eyeicons ? eyeIcon : ""}
        type={"Ionicons"}
        size={size}
        onPress={() => {
          changeIcon();
        }}
      />
    </View>
  );
}
