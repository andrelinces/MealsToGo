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
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} Ionicons={"Home"} />
      <Tab.Screen name="Maps" component={MapsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function MapsScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Maps Screen </Text>
      <Button onPress={() => navigation.navigate('Settings')}>Go to Home</Button>
    </View>
  );
}

function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
    </View>
  );
}

//testing navigatio - tab bar

import {
useFonts as useOswald,
Oswald_400Regular,
} from '@expo-google-fonts/oswald'

import {
  useFonts as useLato,
  Lato_400Regular,
  } from '@expo-google-fonts/lato'

export default function App() {

  <NavigationContainer>
  <MyTabs />
  </NavigationContainer>

const [oswaldLoaded] = useOswald({
  Oswald_400Regular
})

const [latodLoaded] = useLato({
  Lato_400Regular
})

if (!oswaldLoaded || !latodLoaded) {
  return null;
}
<>
    <ThemeProvider theme={theme}>
    <RestaurantsScreen />
    </ThemeProvider>
    
    <ExpoStatusBar style="auto" />
    </>
  return (
    
    <>
    <ThemeProvider theme={theme}>
     {/* <RestaurantsScreen /> */}

     <NavigationContainer>
     <MyTabs />
     </NavigationContainer>

    </ThemeProvider>
    
    <ExpoStatusBar style="auto" />
    </>
    
  )
};
