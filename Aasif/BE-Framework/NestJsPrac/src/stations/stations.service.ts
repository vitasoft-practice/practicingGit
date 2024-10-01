import { Injectable } from '@nestjs/common';

@Injectable()
export class StationsService {
  private stations = [];

  create(station) {
    this.stations.push(station);
  }

  findAll() {
    return this.stations;
  }

  findOne(id: number) {
    return this.stations.find(station => station.id === id);
  }

  update(id: number, updatedStation) {
    const stationIndex = this.stations.findIndex(station => station.id === id);
    if (stationIndex > -1) {
      this.stations[stationIndex] = updatedStation;
    }
  }

  remove(id: number) {
    this.stations = this.stations.filter(station => station.id !== id);
  }
}
