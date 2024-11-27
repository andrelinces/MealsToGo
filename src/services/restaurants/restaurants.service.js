import camelize from 'camelize';
import { mocks, mockImages } from './mock';

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1) )]
        });
        // console.log("Mapped Results1=", mappedResults);
        return {
            ...restaurant,
            isOpenNow: restaurant.open_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "ClOSED_TEMPORARILY",
        };
    });
    // console.log("Mapped Results2=", mappedResults);
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