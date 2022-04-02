import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, FlatList } from "react-native";
import Sites from "../../atom/Sites";
let { width: screenWidth, height: screenHeight } = Dimensions.get("window");
import { fetchSiteListData } from "../../../../store/action/siteListAction";
import ActivityIndicatorComponent from "../../atom/ActivityIndicatorComponent";
import { useDispatch, useSelector } from "react-redux";
import AntDesign from "react-native-vector-icons/AntDesign";
import SitesListHeader from "./SitesListHeader";
import ModalResponse from "../../molecules/ModalResponse";
function VisitSitesFlatList({ navigation }) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    siteList();
  }, []);
  const siteList = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(fetchSiteListData());
      setRefresh(false);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };
  const siteListArray = useSelector((state) => state.siteList.siteListArray);
  const modalToggleState = () => {
    setRefresh(false);
    setError("");
  };
  const renderItem = (itemData) => {
    let num = 0;
    return (
      <View style={{ flex: 1, width: "100%" }}>
        <Sites
          title={itemData.item.name}
          onSelect={() => {
            navigation.navigate("SitesDetail", {
              name: itemData.item.name,
              email: itemData.item.email,
              address: itemData.item.address,
              sitesTimeSlotsArray: itemData.item.sitecalendars,
            });
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: "#121212",
        width: "100%",
      }}
    >
      {isLoading ? (
        <ActivityIndicatorComponent />
      ) : (
        <>
          <View
            style={{
              flex: 0.3,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              // backgroundColor: "#121212",
            }}
          >
            <SitesListHeader
              navigation={navigation}
              siteListArray={siteListArray}
            />
          </View>
          <View style={{ flex: 1 }}>
            {siteListArray.length === 0 ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign
                  //  type="AntDesign"
                  name="reload1"
                  size={25}
                  color="#d14e52"
                  onPress={() => siteList()}
                />
              </View>
            ) : (
              <FlatList
                data={siteListArray}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                //        horizontal={true}
                numColumns={2}
                //   ListHeaderComponent={sitesListHeader}
                // stickyHeaderIndices={[0]}
                // ListHeaderComponentStyle={{
                //   flex: 1,
                //   width: "95%",
                //   marginBottom: 20,
                //   // backgroundColor: '#121212',
                //   alignSelf: "flex-end",
                // }}
              />
            )}
          </View>
        </>
      )}
      {!!error && (
        <ModalResponse message={error} modalToggleState={modalToggleState} />
      )}
    </View>
  );
}

export default VisitSitesFlatList;
