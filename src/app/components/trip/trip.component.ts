import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TripDate } from 'src/app/mocks/interfaces/trip-date';
import { TransferTripDataService } from 'src/app/services/transfer-trip-data/transfer-trip-data.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

@Input() trip!: TripDate;
@Output() chosenTrip = new EventEmitter<TripDate>();

constructor(private tripData: TransferTripDataService) {}

ngOnInit() {
  
}

transferData(trip: TripDate) {
  this.tripData.obtainData(trip);

  this.chosenTrip.emit(trip);
}

}
