// import { View, Text } from "react-native";
// import React, { useState } from "react";
// import { hp, wp } from "../../../styles/Dimensions";
// import Buttons from "../Button";

// export default function CheckButton({ modalVisible }) {
//   return (
//     <View
//       style={{
//         height: hp(30),
//         alignItems: "center",

//         alignSelf: "stretch",
//         justifyContent: "center",
//       }}
//     >
//       <View
//         style={{
//           marginVertical: hp(2),
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Buttons
//           bg={"#3155a5"}
//           onPresses={() => {
//             modalVisible(false, "Check In");
//           }}
//           title={"CHECK IN"}
//           heights={hp(7)}
//           widths={wp(60)}
//           border={wp(2)}
//         />
//       </View>
//       <View
//         style={{
//           marginVertical: hp(2),
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Buttons
//           bg={"#d14e52"}
//           onPresses={() => {
//             modalVisible(false, "Check Out");
//             // , modalHandler(uid);
//           }}
//           title={"CHECK OUT"}
//           heights={hp(7)}
//           widths={wp(60)}
//           border={wp(2)}
//         />
//       </View>
//     </View>
//   );
// }
