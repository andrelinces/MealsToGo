import React from "react";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

import { createStackNavigator } from "@react-navigation/stack";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen
        name="Restaurants2"
        component={RestaurantsScreen}
        options={{ headerShown: false }} // Hide header for this screen only
      />
    </RestaurantStack.Navigator>
  );
};
