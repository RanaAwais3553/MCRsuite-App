import React, { useEffect, useState } from "react";
import { PermissionsAndroid, Linking, Alert, Platform } from "react-native";
// import Geolocation from "react-native-geolocation-service";
import AndroidOpenSettings from "react-native-android-open-settings";
import GetLocation from "react-native-get-location";
let timer;
const getlocationLongHook = (navigation) => {
  const [long, setLong] = useState(null);
  const [lat, setLat] = useState(null);
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the Location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.log("location error is:!.......", err);
    }
  };
  useEffect(() => {
    if (lat == null || long == null) {
      Platform.OS == "android" ? requestLocationPermission() : null;
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      })
        .then((location) => {
          setLat(location.latitude);
          setLong(location.longitude);
          console.log("geo location services data is:!...", location);
        })
        .catch((error) => {
          const { code, message } = error;
          console.log(code, message);
          if (code == "UNAVAILABLE") {
            Alert.alert(
              "Turn on your location",
              "Please Turn on your location to continue...",
              [
                {
                  text: "Ok",
                  onPress: () => {
                    AndroidOpenSettings.locationSourceSettings();
                    navigation.goBack();
                  },
                },
              ]
            );
          }
          console.log("geo location services error is:!...", message, code);
        });
    }
    return () => {
      clearTimeout();
      clearInterval();
    };
  }, [lat, long]);
  return { lat, long };
};
export default getlocationLongHook;

// Geolocation.getCurrentPosition(
//   (position) => {
//     setLat(position.coords.latitude);
//     setLong(position.coords.longitude);
//   },
//   (error) => {
//     // See error code charts below.
//     console.log(error.code, error.message);
//   },
//   { enableHighAccuracy: true, timeout: 150000, maximumAge: 10000 }
// );
// if (success) {
//   Alert.alert("Success!", success, [
//     {
//       text: "Okay",
//       onPress: () => {
//         navigation.navigate("Home");
//         setScanData(null);
//       },
//     },
//   ]);
// }
