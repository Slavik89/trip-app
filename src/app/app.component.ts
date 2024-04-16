import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ForecastService } from './services/forecast.service';
import { mockTrip } from './mocks/models/trip-info';
import { TripDate } from './mocks/interfaces/trip-date';
import { kyivDateToday } from './mocks/models/kyiv-date-today';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddNewTripFormComponent } from './components/add-new-trip-form/add-new-trip-form.component';
import { AddTripService } from './services/add-trip/add-trip.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  // title = 'weather-forecast-app';  
  
  filteredCity: string = '';
  tripsList: any[] = mockTrip;
  chosenTrip: TripDate = kyivDateToday;
  isFormShown = false;
  
  trips !: any[];

  constructor(private httpService: ForecastService, public dialog: MatDialog, public addTrip: AddTripService) {}

  ngOnInit(): void {
    
    this.addTrip.getTripsList().subscribe(data => {
      this.tripsList = data;
      // console.log(this.tripsList);
    });
  }

  ngOnChanges(): void {
    // this.tripsList = this.addTrip.getTripsList(); 
    
    this.addTrip.getTripsList().subscribe(data => {
      this.tripsList = data
    });
      
  }

  openForm(): void {
    const dialogRef = this.dialog.open(AddNewTripFormComponent, {
      height: '250px',
      width: '400px',      
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');      
    });
  }

  transferChosenTrip(trip: TripDate) {    
    this.chosenTrip = trip;
  }

  /*
  getData() {    
    console.log('hello');
  }
  
  showForm() {
    this.isFormShown = true;    
    console.log(this.isFormShown);
  }
  */

}
