import React, { useContext } from "react";

//Navigation - tab bar
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RestaurantsNavigator } from "./restaurants.navigator";

import { Ionicons } from "@expo/vector-icons";

import { MapScreen } from "../../features/map/screens/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

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

// const onLogout = async () => {
//   setIsLoading(true);
//   try {
//     await signOut(auth);
//     setUser(null);
//   } catch (err) {
//     setError(err.message);
//   } finally {
//     setIsLoading(false);
//   }
// };

// const Settings = () => {
//   const { onLogout } = useContext(AuthenticationContext);
//   return (
//     <View>
//       <Text>Settings</Text>

//       <Button title="logout" onPress={() => onLogout()}>
//         logout
//       </Button>
//     </View>
//   );
// };

// const Settings = () => {
//   const { onLogout } = useContext(AuthenticationContext);
//   return (
//     // <SafeArea>
//     <View>
//       <Text>Settings</Text>
//       <Button title="logout" onPress={() => onLogout()} />
//       {/* </SafeArea>  */}
//     </View>
//   );
// };

function Settings() {
  const navigation = useNavigation();
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
      <Button onPress={() => navigation.navigate("Restaurants")}>
        Go to Restaurant
      </Button>

      <Button title="logout" onPress={() => onLogout()}>
        Logout
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
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export const AppNavigator = () => <MyTabs />;
