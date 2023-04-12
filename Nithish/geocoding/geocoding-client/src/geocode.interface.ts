import { Observable } from 'rxjs';

export interface Place {
  locality: string;
  state: string;
  country: string;
}

export interface GeoCodeControllerRequest {
  postcode: string;
}

export interface GeoCodeControllerService {
  getPlace(request: GeoCodeControllerRequest): Observable<Place>;
}
