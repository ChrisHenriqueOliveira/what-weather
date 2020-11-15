import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Search: {
            screens: {
              Search: 'search',
              CityInfo: 'cityInfo',
            },
          },  
          Favorites: {
            screens: {
              Favorites: 'Favorites',
              CityInfo: 'cityInfo',
            },
          },     
        },
      },
      NotFound: '*',
    },
  },
};
