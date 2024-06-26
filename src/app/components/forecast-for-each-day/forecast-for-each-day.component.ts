import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { TripDate } from 'src/app/mocks/interfaces/trip-date';
import { DayOfWeekService } from 'src/app/services/day-of-week/day-of-week.service';
import { ForecastService } from 'src/app/services/forecast.service';
import { ConvertDateService } from 'src/app/services/convert-date/convert-date.service';

@Component({
  selector: 'app-forecast-for-each-day',
  templateUrl: './forecast-for-each-day.component.html',
  styleUrls: ['./forecast-for-each-day.component.css']
})
export class ForecastForEachDayComponent implements OnInit, OnChanges {

  @Input() chosenTrip!: TripDate;
  city!: string;
  startDate!: Date;
  endDate!: Date;  
  days!: any[];
  Math = Math;
  dayToday!: string;

  constructor(private httpService: ForecastService, 
              public dayOfWeekService: DayOfWeekService,
              public convertDateService: ConvertDateService) {}

  ngOnInit() {
    
  }  

  ngOnChanges()   {

    this.city = this.chosenTrip.city;
    this.startDate = this.convertDateService.convertSecondsToDate(this.chosenTrip.startDate);
    this.endDate = this.convertDateService.convertSecondsToDate(this.chosenTrip.endDate);
    
    this.httpService.getForecatForEachDay(this.city, this.startDate, this.endDate).subscribe(data => {      
      this.days = data.days;
    });

  }

}
