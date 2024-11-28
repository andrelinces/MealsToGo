import React, { createContext, useState, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";
import { isLoading } from "expo-font";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setkeyword] = useState("san francisco");
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState([false]);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword = "Antwerp") => {
        console.log("SearchKeyword=",searchKeyword);
        setIsLoading(true);
        setkeyword(searchKeyword);
        console.log(searchKeyword);
        locationRequest(searchKeyword.toLowerCase())
        .then(locationTransform)
        .then(result => {
            setIsLoading(false);
            setLocation(result);
            console.log("Location context=",result);
        })
        .catch((err) => {
            setIsLoading(false);
            setError(err);
        })
    };

    return (
    <LocationContext.Provider
    value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
    }}
    >
        {children}
    </LocationContext.Provider>
    );
}