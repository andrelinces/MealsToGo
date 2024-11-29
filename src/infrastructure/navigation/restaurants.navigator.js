import React from "react";

import { Text } from "react-native";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

const RestaurantStack = createStackNavigator();

const RestaurantDetailScreen = () => {
  return <Text>Restaurant Detail</Text>;
};

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
        component={() => <Text Restaurant Detail></Text>}
        options={{
          //   presentation: "modal", // Enables the modal style
          //   headerShown: false, // Optional: Hides the header for the modal
          ...TransitionPresets.ModalPresentationIOS, // Ensures iOS-like modal transition
        }}
      />
    </RestaurantStack.Navigator>
  );
};
