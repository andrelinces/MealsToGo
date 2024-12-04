import React, { useContext } from "react";

//Navigation - tab bar
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { SettingsNavigator } from "./settings.navigator";

import { Ionicons } from "@expo/vector-icons";

import { MapScreen } from "../../features/map/screens/map.screen";

import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato", // Active tab color
    tabBarInactiveTintColor: "gray", // Inactive tab color
  };
};

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen
        name="Restaurants"
        component={RestaurantsNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Settings" component={SettingsNavigator} />
    </Tab.Navigator>
  );
}

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <MyTabs />
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
