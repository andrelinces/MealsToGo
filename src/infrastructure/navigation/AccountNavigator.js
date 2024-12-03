// import React from "react";
// import { Text, View } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";

// const Stack = createStackNavigator();

// export const AccountNavigator = () => (
//   <Stack.Navigator headerMode="none">
//     <Stack.Screen
//       name="Main"
//       component={() => (
//         <View>
//           <Text>Account Screen</Text>
//         </View>
//       )}
//     />
//     <Stack.Screen
//       name="Login"
//       component={() => (
//         <View>
//           <Text>Login Screen</Text>
//         </View>
//       )}
//     />
//   </Stack.Navigator>
// );

import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen
      name="Main"
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Regiser" component={RegisterScreen} />
  </Stack.Navigator>
);
