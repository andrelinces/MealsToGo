import React from "react";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
        options={{
          //   presentation: "modal", // Enables the modal style
          headerShown: false, // Optional: Hides the header for the modal
          //   ...TransitionPresets.ModalPresentationIOS, // Ensures iOS-like modal transition
        }}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
        options={{
          //   presentation: "modal", // Enables the modal style
          headerShown: false, // Optional: Hides the header for the modal
          ...TransitionPresets.ModalPresentationIOS, // Ensures iOS-like modal transition
        }}
      />
    </RestaurantStack.Navigator>
  );
};
