import React, { useContext } from "react";
import { StatusBar, SafeAreaView, FlatList, View } from 'react-native';
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components";
import { Spacer } from "../components/spacer/spacer.components";

import { Search } from "../components/search.component";

import { ActivityIndicator, MD2Colors } from 'react-native-paper';

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SafeArea = styled(SafeAreaView)`
flex: 1;
margin-top: ${StatusBar.currentHeight}px;
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

const Loading = styled(ActivityIndicator)`
  marginLeft: -25px;
`;

const LoadingContainer = styled.View`
  position: "absolute";
  top: "50%";
  left: "50%";
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading
          size={50}
          animating={true}
          color={MD2Colors.blue300}
          />
        </LoadingContainer>
      )}

        {/* <SearchContainer>
          <Searchbar elevation={3}/>
        </SearchContainer> */}
        <Search />
        <RestaurantList
          
          data={restaurants}
          
          renderItem={({ item }) => {
            // console.log("Item From RestaurantScreen =",item.name);
           return (
          
          <Spacer position="bottom" size="large" >
          <RestaurantInfoCard restaurant={item}/>
          </Spacer>
            );
          }}
        keyExtractor={(item) => item.name}
        />
    </SafeArea>
  )
};