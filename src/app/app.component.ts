import { Component, OnInit } from '@angular/core';
import { ForecastService } from './services/forecast.service';
import { mockTrip } from './mocks/models/trip-info';
import { TripDate } from './mocks/interfaces/trip-date';
import { kyivDateToday } from './mocks/models/kyiv-date-today';
import { NgForm } from '@angular/forms';

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

  constructor(private httpService: ForecastService) {}

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
  }  

  onSubmit(tripForm: NgForm) {
    console.log(tripForm.value);
    this.isFormShown = false;
  }
  


}
