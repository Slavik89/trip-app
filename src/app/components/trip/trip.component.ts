import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TripDate } from 'src/app/mocks/interfaces/trip-date';
import { TransferTripDataService } from 'src/app/services/transfer-trip-data/transfer-trip-data.service';
import { AddTripService } from 'src/app/services/add-trip/add-trip.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  @Input() trip!: TripDate;
  @Output() chosenTrip = new EventEmitter<TripDate>();

  constructor(private tripData: TransferTripDataService,
              private tripService: AddTripService
  ) {}

  ngOnInit() {
    
  }

  transferData(trip: TripDate) {
    this.tripData.obtainData(trip);

    this.chosenTrip.emit(trip);
  }

  convertSecondsToDate(timestamp: any) {
    
    let date = new Date(timestamp.seconds*1000);
    
    let convertedDate = 
      `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1).toString().padStart(2, "0")}.${date.getFullYear()}`
    return convertedDate;
  }

  deleteTrip(trip: TripDate) {
    this.tripService.deleteTrip(trip).then(
      data => {
        console.log('Inside Promise'),
        console.log(data)
      }
    ).
    catch(
      error => 'error is occured'
    );
  }

}
