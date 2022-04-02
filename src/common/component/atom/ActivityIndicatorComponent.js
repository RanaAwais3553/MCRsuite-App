import React, { memo } from "react";
import { View, ActivityIndicator } from "react-native";
function ActivityIndicatorComponent() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={"large"} color="#3155a5" />
    </View>
  );
}

export default memo(ActivityIndicatorComponent);
