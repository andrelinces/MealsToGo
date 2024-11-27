import React, { useContext } from "react";
import { Searchbar } from 'react-native-paper';
import { StatusBar, SafeAreaView, FlatList } from 'react-native';
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components";
import { Spacer } from "../components/spacer/spacer.components";

// import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SafeArea = styled(SafeAreaView)`
flex: 1;
margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
padding: ${props => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
flex: 1;
padding: ${props => props.theme.space[3]};
background-color: ${props => props.theme.colors.bg.primary};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})
``;

export const RestaurantsScreen = () => {
  // const restaurantContext = useContext(restaurantContext);
  // console.log(restaurantContext);
  return (
    <SafeArea>
        <SearchContainer>
          <Searchbar elevation={3}/>
        </SearchContainer>

        <RestaurantList
          data={[ {name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}, {name: 6}, {name: 7}, {name: 8} ]}
          // data={restaurantContext.restaurants}
          
          renderItem={() => (
          
          <Spacer position="bottom" size="large" >
          <RestaurantInfoCard />
          </Spacer>
          
        )}
        keyExtractor={(item) => item.name}
        />
    </SafeArea>
  )
};