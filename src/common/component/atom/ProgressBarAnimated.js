import React, { memo, useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import * as Progress from "react-native-progress";
function ProgressBarAnimated() {
  const [counters, setCounter] = useState(0.2);
  useEffect(() => {
    // var counters = 0;
    var oneSecInterval = setInterval(() => {
      console.log("1 sec.");
      setCounter(counters + 1);
      console.log(counters);
      if (counters == 10) {
        clearInterval(oneSecInterval);
        setCounter(0);
      }
    }, 1000);
    return () => clearInterval(oneSecInterval);
  }, [counters]);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Progress.Bar progress={counters / 10} width={200} />
    </View>
  );
}

export default memo(ProgressBarAnimated);
