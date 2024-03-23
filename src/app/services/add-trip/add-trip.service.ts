import { Injectable } from '@angular/core';
import { TripDate } from 'src/app/mocks/interfaces/trip-date';
import { mockTrip } from 'src/app/mocks/models/trip-info';

@Injectable({
  providedIn: 'root'
})
export class AddTripService {

  tripsList: TripDate[] = mockTrip;

  constructor() { }

  getTripsList() {
    console.log(this.tripsList);
    return this.tripsList;
  }

  setTripsList(trip: TripDate) {
    this.tripsList.push(trip);
  }
  
}
