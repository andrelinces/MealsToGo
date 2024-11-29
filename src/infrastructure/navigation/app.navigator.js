import React from "react";

//Navigation - tab bar
import { Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RestaurantsNavigator } from "./restaurants.navigator";

import { Ionicons } from "@expo/vector-icons";

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

function MapScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Map Screen </Text>
      <Button onPress={() => navigation.navigate("Settings")}>
        Go to Settings
      </Button>
    </View>
  );
}

function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
      <Button onPress={() => navigation.navigate("Restaurants")}>
        Go to Restaurant
      </Button>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen
        name="Restaurants"
        component={RestaurantsNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export const AppNavigator = () => (
  <NavigationContainer>
    <MyTabs />
  </NavigationContainer>
);