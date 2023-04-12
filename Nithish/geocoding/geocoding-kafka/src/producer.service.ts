import { Injectable } from '@nestjs/common';
import { Search } from './search.interface';

@Injectable()
export class Producer {
  private readonly search: Search[] = [];

  log(newsearch: Search) {
    this.search.push({ ...newsearch, id: this.search.length + 1 });
    return this.search;
  }

  findlog(id: number) {
    console.log('Id number', id);
    console.log(this.search);
    return this.search.filter((el) => el.id === id);
  }
}
