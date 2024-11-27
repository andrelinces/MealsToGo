import camelize from 'camelize';
import { mocks } from './mock';

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        return {
            ...restaurant,
            isOpenNow: restaurant.open_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "ClOSED_TEMPORARILY",
        };
    });
    console.log(mappedResults);
    return camelize(mappedResults);
};

// restaurantsRequest()
// .then(restaurantTransform)
// .then(transformedResponse => {
//     console.log(transformedResponse);
// })
//   .catch((err) => {
//     console.log("error");
//   });