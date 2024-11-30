import React, { useContext, useState, useEffect } from "react";
import MapView, { Marker, Callout } from "react-native-maps";

import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { Search } from "../components/search.components";

import { Platform } from "react-native";

import { MapCallout } from "../components/map-callout.component";
import { useNavigation } from "@react-navigation/native";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const isAndroid = Platform.OS === "android";

// onPress={() =>
//     navigation.navigate("RestaurantDetail", { restaurant })
//   }

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;
  const navigation = useNavigation();
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
              key={restaurant.name}
              title={restaurant.name}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("Restaurants", {
                    screen: "RestaurantDetail",
                    params: { restaurant },
                  })
                }
                // onPress={() =>
                //   navigation.navigate("Restaurants", {
                //     restaurant,
                //   })
                // }
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
