import React, { useContext, useState } from "react";
import {
  StatusBar,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components";
import { Spacer } from "../components/spacer/spacer.components";

import { Search } from "../components/search.component";

import { ActivityIndicator, MD2Colors } from "react-native-paper";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../services/favourites/favourites-bar.components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  marginleft: -25px;
`;

const LoadingContainer = styled.View`
  position: "absolute";
  top: "50%";
  left: "50%";
`;

import { useNavigation } from "@react-navigation/native";

//testing....

// const [isFavouritesToggled, setIsToggled] = useState(false);
const onFavouritesToggle = () => {
  setIsToggled(!isToggled);
};

export const RestaurantsScreen = () => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  const navigation = useNavigation();
  // console.log("favourites= ", favourites);

  return (
    <SafeArea>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      isToggled && <FavouritesBar favourites={favourites} />
      {isLoading && (
        // <LoadingContainer>
        //   <Loading size={50} animating={true} color={MD2Colors.blue300} />
        // </LoadingContainer>
        <View style={styles.container}>
          {/* Top Activity Indicator */}
          <View style={styles.top}>
            <ActivityIndicator size={50} color={MD2Colors.blue300} />
          </View>

          {/* Center Activity Indicator */}
          <View style={styles.center}>
            <ActivityIndicator size={50} color={MD2Colors.blue300} />
          </View>

          {/* Bottom Activity Indicator */}
          <View style={styles.bottom}>
            <ActivityIndicator size={50} color={MD2Colors.blue300} />
          </View>
        </View>
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          // console.log("Item From RestaurantScreen =",item.name);
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between", // Distributes the children evenly
    alignItems: "center", // Center horizontally
  },
  top: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 10, // Adjust as needed
  },
  center: {
    flex: 1,
    justifyContent: "center",
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: -100, // Adjust as needed
  },
});
