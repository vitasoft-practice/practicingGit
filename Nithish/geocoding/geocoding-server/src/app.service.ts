import { Injectable } from '@nestjs/common';
import { getAddressComponents, getPlace } from './app.helpers';
export interface Place {
  locality: string;
  state: string;
  country: string;
}
@Injectable()
export class GeoCodeService {
  async getHello(postcode: string): Promise<Place> {
    const components = await getAddressComponents(postcode);
    const place = getPlace(components);
    return place;
  }
}
