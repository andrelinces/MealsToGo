import React from "react";

import { RestaurantInfoCard } from "../components/restaurant-info-card.components";

import { SafeAreaView } from "react-native";

import styled from "styled-components";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    // <SafeAreaView>
    <RestaurantInfoCard restaurant={restaurant} />
    // </SafeAreaView>
  );
};
