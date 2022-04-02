import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import { Snackbar } from "react-native-paper";
import { hp } from "../../styles/Dimensions";
import { clearState } from "../../../store/action/reportAction";
import { useDispatch } from "react-redux";
function SnackMessage({ success, visible, error, setVisibleFunction }) {
  let timerID;
  const [state, setState] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    timerID = 3000;
    const clear = setTimeout(() => {
      setState(false);
      dispatch(clearState());
      setVisibleFunction();
      //   snackCallBack();
    }, timerID);
    return () => {
      dispatch(clearState());
      clearInterval();
      clearTimeout(clear);
      // callBackStateClearCall()
    };
  }, [success, visible, error]);
  return (
    <View style={{}}>
      {success || visible || error ? (
        <Snackbar
          visible={state}
          //  duration={timerID}
          style={{ backgroundColor: success ? "green" : "#d14e52" }}
          theme={{ colors: { surface: "white", accent: "red" } }}
          // onDismiss={onDismissSnackBar}
          action={{
            label: success && (
              <Icon
                color={"white"}
                name={"check"}
                type={"Entypo"}
                size={hp(3)}
                // style={{ position: "absolute" }}
                //           onPress={() => setVisible("")}
              />
            ),

            //  label: "",
            // onPress: () => {
            //   setVisible("");
            // },
          }}
        >
          {success ? success : visible ? visible : error}
        </Snackbar>
      ) : (
        <Text></Text>
      )}
    </View>
  );
}

export default SnackMessage;
