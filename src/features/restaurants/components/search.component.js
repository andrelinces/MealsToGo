import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

import { FavouritesBar } from "../../../services/favourites/favourites-bar.components";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const [isFavouritesVisible, setIsFavouritesVisible] = useState(false);
  const { favourites } = useContext(FavouritesContext);

  const handleIconPress = () => {
    console.log("Search bar icon clicked!", favourites);

    if (favourites.length !== 0) {
      setIsFavouritesVisible((prev) => !prev);
    } else {
      console.log("No favourites to display.");
    }
  };

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouritesVisible ? "heart" : "heart-outline"}
        onIconPress={handleIconPress}
        elevation={3}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
          console.log("onIconPress", onIconPress);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
      {isFavouritesVisible && favourites.length !== 0 && (
        <FavouritesBar favourites={favourites} />
      )}
    </SearchContainer>
  );
};
