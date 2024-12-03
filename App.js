import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components/native";
import { theme } from ".";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructure/navigation";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// Firebase Configuration.
const firebaseConfig = {
  apiKey: "AIzaSyDTSe-hnz6F0Ij6kZs1aarDnpaM-_4uAI4",
  authDomain: "mealstogo-bb5fe.firebaseapp.com",
  projectId: "mealstogo-bb5fe",
  storageBucket: "mealstogo-bb5fe.firebasestorage.app",
  messagingSenderId: "838171958522",
  appId: "1:838171958522:web:8f34ab26d04c428e507d43",
};

// firebase.config.js
import { initializeApp } from "firebase/app";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

export { auth };

export default function App() {
  // Authentication with firebase
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const auth = getAuth();
  // signInWithEmailAndPassword(auth, "test@test.com", "123456")
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     console.log("User logged:", user.email);
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latodLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latodLoaded) {
    return null;
  }

  //testing firebase
  // if (!isAuthenticated) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
