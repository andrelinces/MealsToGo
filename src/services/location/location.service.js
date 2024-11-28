import camelize from "camelize";

import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
    return new Promise((resolve, reject) => {
        const locationMock = locations[searchTerm];
        if (!locationMock) {
            reject("not found");
        }
        resolve(locationMock);
    });
};

export const locationTransform = (result) => {
    const formattedResponse = camelize(result);
    const { geometry = {} } = formattedResponse.results[0];
    const { lat, log } = geometry.location;
    console.log("Location =",location);

    return { lat, log };
};
