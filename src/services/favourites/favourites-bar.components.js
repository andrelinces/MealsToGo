import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../../features/restaurants/components/spacer/spacer.components";
import { CompactRestaurantInfo } from "../../features/restaurants/components/restaurant/compact-restaurant-info.component";
import { useNavigation } from "@react-navigation/native";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites }) => {
  const navigation = useNavigation();
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

// export const FavouritesBar = () => {
//   return (
//     <View style={styles.favouritesBar}>
//       <Text>Favourites Bar</Text>
//     </View>
//   );
// };
