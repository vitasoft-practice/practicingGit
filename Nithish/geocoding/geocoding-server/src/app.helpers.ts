import axios from 'axios';
import { Place } from './app.service';

export const getAddressComponents = async (postcode: string) => {
  const { data } = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${postcode}&key=AIzaSyCD79UZVT5D6VegMsFD_n1P9z7rOfzOAg4`,
  );
  return data.results[0].address_components;
};

export const getPlace = (components: any): Place => {
  const place = {} as Place;
  for (const component of components) {
    const type = component.types[0];
    switch (type) {
      case 'locality': {
        place.locality = component.long_name;
        break;
      }
      case 'administrative_area_level_1': {
        place.state = component.long_name;
        break;
      }
      case 'country': {
        place.country = component.long_name;
        break;
      }
    }
  }
  const outputdata: Place = {
    locality: place.locality,
    state: place.state,
    country: place.country,
  };
  return outputdata;
};
