import React, { useContext } from "react";
import {
  StatusBar,
  SafeAreaView,
  FlatList,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components";
import { Spacer } from "../components/spacer/spacer.components";

import { Search } from "../components/search.component";

import { ActivityIndicator, MD2Colors } from "react-native-paper";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { Text } from "react-native-paper";
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

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const navigation22 = useNavigation();
  console.log("navigation= ", navigation22.navigate);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          // console.log("Item From RestaurantScreen =",item.name);
          return (
            <TouchableOpacity
              onPress={() => navigation22.navigate("RestaurantDetail")}
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
