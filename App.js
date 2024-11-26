import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '.';

//testing navigation - tab bar
import { Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Ionicons} from '@expo/vector-icons';

// import { restaurantsRequest } from './src/services/restaurants/restaurants.service';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings"
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
    <Tab.Navigator
      screenOptions={createScreenOptions}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function MapScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Map Screen </Text>
      <Button onPress={() => navigation.navigate('Settings')}>Go to Settings</Button>
    </View>
  );
}

function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button onPress={() => navigation.navigate('Restaurant')}>Go to Restaurant</Button>
    </View>
  );
}

import {
useFonts as useOswald,
Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import {
  useFonts as useLato,
  Lato_400Regular,
  } from '@expo-google-fonts/lato';

export default function App() {

const [oswaldLoaded] = useOswald({
  Oswald_400Regular
})

const [latodLoaded] = useLato({
  Lato_400Regular
})

if (!oswaldLoaded || !latodLoaded) {
  return null;
}
  
  return (
    
    <>
    <ThemeProvider theme={theme}>

      <RestaurantsContextProvider>
      <NavigationContainer>
          <MyTabs />
      </NavigationContainer>
     </RestaurantsContextProvider>/
     
    </ThemeProvider>
    <ExpoStatusBar style="auto" />
    </>
    
  )
};

// export default function App() {
//   return (
//     <RestaurantContextProvider>
//       {/* <DebugRestaurants /> */}
//     </RestaurantContextProvider>
//   );
// }

