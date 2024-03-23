import { Component, OnInit } from '@angular/core';
import { ForecastService } from './services/forecast.service';
import { mockTrip } from './mocks/models/trip-info';
import { TripDate } from './mocks/interfaces/trip-date';
import { kyivDateToday } from './mocks/models/kyiv-date-today';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddNewTripFormComponent } from './components/add-new-trip-form/add-new-trip-form.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'weather-forecast-app';  
  
  filteredCity: string = '';
  tripsList: TripDate[] = mockTrip;
  chosenTrip: TripDate = kyivDateToday;
  isFormShown = false;

  constructor(private httpService: ForecastService, public dialog: MatDialog) {}

  ngOnInit(): void {
    
  }

  getData() {
    // this.httpService.getForecast().subscribe(data => console.log(data));
    console.log('hello');
  }  

  transferChosenTrip(trip: TripDate) {
    // console.log(trip);
    this.chosenTrip = trip;
  }
  
  showForm() {
    this.isFormShown = true;
    // console.log('clicked');
    console.log(this.isFormShown);
  }

  openForm(): void {
    const dialogRef = this.dialog.open(AddNewTripFormComponent, {
      height: '250px',
      width: '400px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');      
    });
  }

}
