import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, View } from "react-native";

import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { Text } from "../../restaurants/components/typography/text.component";
import { Spacer } from "../../restaurants/components/spacer/spacer.components";

import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.components";
import { useNavigation } from "@react-navigation/native";

const NoFavouritesArea = styled.View`
  align-items: center;
  justify-content: center;
`;
export const FavouritesScreen = ({}) => {
  const { favourites } = useContext(FavouritesContext);
  const navigation = useNavigation();
  console.log("navigation state=", navigation.getState());
  console.log("Favourites", favourites.length);
  return favourites.length ? (
    <RestaurantList
      data={favourites}
      renderItem={({ item }) => {
        console.log("Item From FavouritesScreen =", item.name);
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Restaurants", {
                screen: "RestaurantDetail",
                params: { restaurant: item },
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
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
