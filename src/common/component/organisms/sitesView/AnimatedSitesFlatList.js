import React, { useState, useEffect } from "react";
import { ListItem, Avatar, SpeedDial } from "react-native-elements";
import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  Animated,
  Dimensions,
  LogBox,
} from "react-native";
import { Sitesdata } from "../../../../../data/ListData";
import AnimatedSitesList from "./AnimatedSitesList";
import { fetchSiteListData } from "../../../../store/action/siteListAction";
import ActivityIndicatorComponent from "../../atom/ActivityIndicatorComponent";
import { useDispatch, useSelector } from "react-redux";

const AnimatedSitesFlatList = ({ navigation }) => {
  LogBox.ignoreAllLogs();
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [fullData, setFullData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      Alert.alert("Request Failed!", error, [{ text: "Ok" }]);
    }
  }, [error]);

  useEffect(() => {
    const siteList = async () => {
      setError(null);
      setIsLoading(true);
      try {
        await dispatch(fetchSiteListData());
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    siteListArray.length === 0 && siteList();
  }, []);

  const siteListArray = useSelector((state) => state.siteList.siteListArray);
  useEffect(() => {
    siteListArray && setFullData(siteListArray);
  }, []);
  const handleSearch = (text) => {
    if (text) {
      const newData = siteListArray.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFullData(newData);
      setQuery(text);
    } else {
      setFullData(siteListArray);
      setQuery(text);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <ActivityIndicatorComponent />
      ) : (
        <Animated.FlatList
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          keyExtractor={(item) => item.id}
          removeClippedSubviews={false}
          ListHeaderComponent={
            <View
              style={{
                // backgroundColor: "#fff",
                padding: 10,
                marginVertical: 10,
                marginHorizontal: 10,
                borderRadius: 20,
                // height: 40,
              }}
            >
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                //  autoFocus={true}
                clearButtonMode="always"
                value={query}
                onChangeText={(text) => handleSearch(text)}
                placeholder="Search"
                placeholderTextColor="#fff"
                style={{
                  backgroundColor: "#3155a5",
                  paddingHorizontal: 20,
                  borderRadius: 20,
                  borderWidth: 2,
                  borderColor: "#fff",
                  height: 50,
                  color: "#fff",
                }}
              />
            </View>
          }
          stickyHeaderIndices={[0]}
          data={fullData}
          renderItem={(itemData) => (
            <AnimatedSitesList
              navigation={navigation}
              scrollY={scrollY}
              itemData={itemData}
              onSelect={() => {
                navigation.navigate("SitesDetail", {
                  name: itemData.item.name,
                  email: itemData.item.email,
                  address: itemData.item.address,
                  sitesTimeSlotsArray: itemData.item.sitecalendars,
                });
              }}
            />
          )}
        />
      )}
    </View>
  );
};
export default AnimatedSitesFlatList;
