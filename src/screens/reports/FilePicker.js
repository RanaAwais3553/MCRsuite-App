import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
} from "react-native";
import DocumentPicker from "react-native-document-picker";
import FileViewer from "react-native-file-viewer";
import ImagePicker from "react-native-image-crop-picker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import RNFS from "react-native-fs";
import axios from "axios";
import { hp, wp } from "../../common/styles/Dimensions";

const FilePicker = ({ fileHandler, attachments, update, id, type }) => {
  console.log("files in file handler is:!...", attachments.length, update, id);
  const [singleFile, setSingleFile] = useState([]);
  const [image, setImage] = useState([]);
  const [serverImage, setServerImage] = useState(attachments);
  const selectOneFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        allowMultiSelection: true,
        type: [
          DocumentPicker.types.images,
          DocumentPicker.types.pdf,
          DocumentPicker.types.docx,
          DocumentPicker.types.doc,
          DocumentPicker.types.ppt,
          DocumentPicker.types.xls,
        ],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      // console.log("reponse of image picker is:!..", res);
      setSingleFile([...singleFile, ...res]);
      setImage([...image, ...res]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert("Canceled from single doc picker");
      } else {
        alert("Unknown Error: " + JSON.stringify(err));
        throw err;
      }
    }
  };
  // console.log("single file images is:!...", singleFile, image);

  const takePhotoFromCamera = () => {
    //  PERMISSIONS.IOS.CAMERA == "ios.permission.CAMERA"
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,
    })
      .then((imag) => {
        const imagewithoutextension = imag.path.split("/").pop();
        const newImageUri = "file:///" + imag.path.split("file:///").join("");
        //       console.log(imag);

        setSingleFile([
          ...singleFile,
          {
            uri: imag.path,
            type: imag.mime,
            name: imagewithoutextension,
          },
        ]);
        setImage([...image, imag]);
        //  imageHandler(image);
      })
      .catch(() => console.log("Promiss cancel"));
  };
  // singleFile.length > 8 &&
  //   Alert.alert("", "Please Attach maximum 8 photos or Files");

  // image.length > 8 &&
  //   Alert.alert("", "Please Attach maximum 8 photos or Files");
  useEffect(() => {
    singleFile && fileHandler(singleFile);
  }, [singleFile]);
  const fileView = async (indx) => {
    console.log("image path is:!...", indx, image[0].path);
    // const uri = `${RNFS.DocumentDirectoryPath}/${indx}`;
    // console.log("uri is:!...........", uri);
    await FileViewer.open(indx)
      .then(() => console.log("success", indx))
      .catch((err) => console.log("error", err, indx));
  };
  const deleteFileFromArray = (indx) => {
    setSingleFile(singleFile.filter((value, index) => index != indx));
    setImage(image.filter((value, index) => index != indx));
  };
  console.log("image is:!...", image);
  const serverFileView = (attachment) => {
    const url = `https://mcrsuite.com/files/${attachment}`;
    const extension = getFileExtention(url);
    console.log("file extension is :!....", extension);
    const localFile = `${RNFS.DocumentDirectoryPath}/temporaryfile.${extension[0]}`;
    console.log("check permission in file downloading is:!...");
    const options = {
      fromUrl: url,
      toFile: localFile,
    };
    RNFS.downloadFile(options)
      .promise.then(() => FileViewer.open(localFile))
      .then(() => {
        // success
        console.log("success!...");
      })
      .catch((error) => {
        // error
        console.log(error);
      });
  };

  function getFileExtention(url) {
    // To get the file extension
    return /[.]/.exec(url) ? /[^.]+$/.exec(url) : undefined;
  }
  const deleteServerFileHandler = (file, indx) => {
    console.log("in delete incident report API:!..", file, indx);
    axios
      .get(
        `https://mcrsuite.com/api/deleteFile?type=${type}&id=${id}&fileName=${file}`
      )
      .then(() => {
        console.log("file delete success"),
          setServerImage(serverImage.filter((value, index) => value != file));
      })
      .catch((error) => console.log("file delete failed", error));
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      {/* <Text style={styles.titleText}>
        Example of File Picker in React Native
      </Text> */}
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={selectOneFile}
        >
          <Image
            source={{
              uri: "https://img.icons8.com/offices/40/000000/attach.png",
            }}
            style={styles.imageIconStyle}
          />
          <Text style={{ marginRight: 10, fontSize: 14, textAlign: "left" }}>
            {"Attach Document"}
          </Text>
        </TouchableOpacity>
        {/* <View
          style={{ flex: 0.6, justifyContent: "center", alignItems: "center" }}
        > */}
        <TouchableOpacity
          onPress={takePhotoFromCamera}
          style={styles.buttonStyle}
        >
          <Text>
            <Ionicons
              name="camera-outline"
              color={"#3155a5"}
              style={{}}
              size={22}
            />
            {"   "}
            Take Photo
          </Text>
        </TouchableOpacity>
        {/* </View> */}
      </View>

      <View
        style={{
          flex: 1,
          // flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f2f2f2",
          // padding: 19,
          paddingHorizontal: 16,
          marginTop: 5,
        }}
      >
        {/* <Text>{image[0].path}</Text> */}
        <FlatList
          horizontal={true}
          // scrollEnabled={false}
          style={{ flex: 1 }}
          data={image}
          renderItem={({ item, index }) => (
            <View
              // onPress={() =>
              //   fileView(
              //     image[index].path ? image[index].path : image[index].uri
              //   )
              // }
              // onLongPress={() => deleteFileFromArray(index)}
              // activeOpacity={0.6}
              key={index}
              style={{
                // flex: 0.4,
                marginTop: 9,
                flexDirection: "row",
                justifyContent: "center",
                // backgroundColor: "#121212",
                alignItems: "center",
                // flexDirection: "row",
              }}
            >
              {(image[index].path || image[index].uri) && (
                <View
                  style={{
                    flexDirection: "row",
                    margin: wp(0.5),
                    backgroundColor: "#fff",
                    padding: wp(1),
                    shadowColor: "#000",
                    shadowOpacity: 0.5,
                    shadowRadius: 3,
                    borderRadius: wp(1.5),
                    shadowOffset: {
                      height: 0,
                      width: 0,
                    },
                    elevation: 1,
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      fileView(
                        image[index].path ? image[index].path : image[index].uri
                      )
                    }
                    activeOpacity={0.6}
                  >
                    <Text
                      style={{
                        // flex: 1,
                        textAlign: "center",
                        padding: 6,
                        // backgroundColor: "#a6a2a2",
                      }}
                    >
                      <MaterialCommunityIcons
                        name="file-outline"
                        color={"#3155a5"}
                        style={{}}
                        size={18}
                      />
                      New File{index + 1}
                    </Text>
                  </TouchableOpacity>
                  <Entypo
                    name="cross"
                    color={"#3155a5"}
                    style={{}}
                    onPress={() => deleteFileFromArray(index)}
                    size={18}
                  />
                </View>
              )}
            </View>
          )}
          //Setting the number of column
          // numColumns={1}
          keyExtractor={(item, index) => index.toString()}
        />
        {update && (
          <FlatList
            horizontal={true}
            // scrollEnabled={false}
            style={{ flex: 1 }}
            data={serverImage}
            renderItem={({ item, index }) => (
              <View
                // onPress={() =>
                //   fileView(
                //     image[index].path ? image[index].path : image[index].uri
                //   )
                // }
                // onLongPress={() => deleteFileFromArray(index)}
                // activeOpacity={0.6}
                key={index}
                style={{
                  // flex: 0.4,
                  marginTop: 9,
                  flexDirection: "row",
                  justifyContent: "center",
                  // backgroundColor: "#121212",
                  alignItems: "center",
                  // flexDirection: "row",
                }}
              >
                {serverImage && (
                  <View
                    style={{
                      flexDirection: "row",
                      margin: wp(0.5),
                      backgroundColor: "#fff",
                      padding: wp(1),
                      shadowColor: "#000",
                      shadowOpacity: 0.5,
                      shadowRadius: 3,
                      borderRadius: wp(1.5),
                      shadowOffset: {
                        height: 0,
                        width: 0,
                      },
                      elevation: 1,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => serverFileView(serverImage[index])}
                      activeOpacity={0.6}
                    >
                      <Text
                        style={{
                          // flex: 1,
                          textAlign: "center",
                          padding: 6,
                          // backgroundColor: "#a6a2a2",
                        }}
                      >
                        <MaterialCommunityIcons
                          name="file-outline"
                          color={"#3155a5"}
                          style={{}}
                          size={18}
                        />
                        Old File{index + 1}
                      </Text>
                    </TouchableOpacity>
                    <Entypo
                      name="cross"
                      color={"#3155a5"}
                      style={{}}
                      onPress={() =>
                        deleteServerFileHandler(serverImage[index], index)
                      }
                      size={18}
                    />
                  </View>
                )}
              </View>
            )}
            //Setting the number of column
            // numColumns={1}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
        {/* {image.map((img, index) => (
          
        ))} */}
      </View>
    </SafeAreaView>
  );
};

export default FilePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    // padding: 19,
    height: hp(7),
    // paddingHorizontal: 16,
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    // paddingVertical: 20,
  },
  textStyle: {
    backgroundColor: "#fff",
    fontSize: 15,
    marginTop: 16,
    color: "black",
  },
  buttonStyle: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    padding: 5,
    marginRight: wp(1),
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    borderRadius: wp(1.5),
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
  },
  imageIconStyle: {
    height: 20,
    width: 20,
    resizeMode: "stretch",
    marginRight: wp(2),
    tintColor: "#3155a5",
  },
});
