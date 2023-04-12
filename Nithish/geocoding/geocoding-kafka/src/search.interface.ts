export type SearchStatus = 'sucess' | 'failed';

export class Search {
  id?: number;
  zipcode: string;
  status: SearchStatus;
  timestamp: string;
}
