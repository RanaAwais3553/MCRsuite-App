import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  View,
  Image,
  FlatList,
  Alert,
  StyleSheet,
  Platform,
  TouchableOpacity,
  PermissionsAndroid,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import RNFetchBlob from "rn-fetch-blob";
import { hp } from "../../styles/Dimensions";
import FileViewer from "react-native-file-viewer";
import { showMessage, hideMessage } from "react-native-flash-message";
const DownloadFile = ({ attachments }) => {
  const [isLoading, setIsLoading] = useState(false);
  const jsons = attachments ? JSON.parse(attachments) : [];
  console.log("attachement file in download component is:!...", jsons);
  const checkPermission = async (attachment) => {
    let imageName = attachment.replace(/(\r\n\s|\n|\r|\s)/gm, "");
    console.log("file name without space is:!...", imageName);
    const url = `https://mcrsuite.tk/files/${imageName}`;

    if (Platform.OS === "ios") {
      downloadImage(url, imageName);
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Storage Permission Required",
            message: "App needs access to your storage to download Photos",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Once user grant the permission start downloading
          console.log("Storage Permission Granted.");
          downloadImage(url, imageName);
        } else {
          // If permission denied then show alert
          alert("Storage Permission Not Granted");
        }
      } catch (err) {
        // To handle permission related exception
        console.warn(err);
      }
    }
  };
  const downloadImage = (url, imageName) => {
    // Main function to download the image

    // To add the time suffix in filename
    let date = new Date();
    // Image URL which we want to download
    //  let image_URL = REMOTE_IMAGE_PATH;
    // Getting the extention of the file
    let ext = getExtention(url);
    ext = "." + ext[0];
    // Get config and fs from RNFetchBlob
    // config: To pass the downloading related options
    // fs: Directory path where we want our image to download
    const { config, fs } = RNFetchBlob;
    let DownloadDir =
      Platform.OS == "ios" ? fs.dirs.DocumentDir : fs.dirs.DownloadDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        // Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          DownloadDir +
          "/Downloads_MCR_File_" +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: "File",
      },
    };
    const configfb = {
      fileCache: true,
      useDownloadManager: true,
      notification: true,
      mediaScannable: true,
      title: imageName,
      path: `${DownloadDir}/${imageName}`,
    };
    const configOptions = Platform.select({
      ios: {
        fileCache: configfb.fileCache,
        title: configfb.title,
        path: configfb.path,
        appendExt: ext,
      },
    });
    Platform.OS == "android" &&
      showMessage({
        message: "Downloading start...",
        type: "success",
        autoHide: true,
      });
    config(Platform.OS == "android" ? options : configOptions)
      .fetch("GET", url)
      .then(({ data }) => {
        // Showing alert after successful downloading
        // let img = JSON.stringify(res);
        console.log("res -> ", data);
        Platform.OS == "ios" && FileViewer.open(data);
        // Alert.alert("Success", "File Downloaded Successfully.");
        // setIsLoading(false);
      })
      .catch(() => {
        Alert.alert("Downloading Failed");
        setIsLoading(false);
      });
  };

  const getExtention = (filename) => {
    // To get the file extension
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };
  return (
    <>
      {jsons.length > 0 ? (
        <View style={styles.container}>
          <FlatList
            horizontal={true}
            // scrollEnabled={false}
            style={{ flex: 1 }}
            data={jsons}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => {
                  attachments
                    ? checkPermission(jsons[index])
                    : Alert.alert(" ", "File Not Found!", [
                        {
                          text: "Okay",
                          onPress: () => {},
                        },
                      ]);
                }}
              >
                <Text style={styles.text}>
                  <Ionicons
                    name="download"
                    color={"#3155a5"}
                    style={{}}
                    size={18}
                  />
                  Download File{index + 1}
                </Text>
              </TouchableOpacity>
            )}
            //Setting the number of column
            // numColumns={1}
            keyExtractor={(item, index) => index.toString()}
          />
          {/* )} */}
        </View>
      ) : (
        <View>
          <Text>File Not Found</Text>
        </View>
      )}
    </>
  );
};

export default DownloadFile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp(3),
    marginVertical: 5,
    // flexDirection: "row",
    //  justifyContent: "flex-start",
    //  alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  text: {
    color: "#a6a2a2",
    fontSize: 12,
    marginHorizontal: 10,
    // marginVertical: 10,
    fontFamily: "OpenSans-Bold",
    textAlign: "center",
    // padding: 2,
  },
  button: {
    // width: "100%",
    //  justifyContent: "flex-start",
    //  alignItems: "flex-start",
    // padding: 10,
    // borderRadius: 10,
    backgroundColor: "#ffff",
    // margin: 10,
  },
});
