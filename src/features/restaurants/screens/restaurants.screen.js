import React from "react";
import { Searchbar, Card, Avatar } from 'react-native-paper';
import { StatusBar, SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components";

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

export const RestaurantsScreen = () => (
    <SafeArea>
        <SearchContainer>
          <Searchbar elevation={3}/>
        </SearchContainer>
        <RestaurantListContainer>
          <RestaurantInfoCard />
        </RestaurantListContainer>
    </SafeArea>
);
