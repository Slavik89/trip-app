import { Injectable } from '@angular/core';
import { TripDate } from 'src/app/mocks/interfaces/trip-date';

@Injectable({
  providedIn: 'root'
})
export class TransferTripDataService {

  city!: string;
  startDate!: Date;
  endDate!: Date;

  constructor() { }

  obtainData(trip: TripDate) {
    
    this.city = trip.city;
    this.startDate = trip.startDate;
    this.endDate = trip.endDate;
    // console.log(this.city);
    this.giveCityName();
  }

  giveCityName(): string {
    return this.city;
  }

}
