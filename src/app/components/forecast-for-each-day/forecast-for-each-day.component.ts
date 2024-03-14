import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { TripDate } from 'src/app/mocks/interfaces/trip-date';
import { DayOfWeekService } from 'src/app/services/day-of-week/day-of-week.service';
import { ForecastService } from 'src/app/services/forecast.service';

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
  // timeDifference!: number;
  // daysdifference!: number;
  days!: any[];
  Math = Math;
  dayToday!: string;

  constructor(private httpService: ForecastService, public dayOfWeekService: DayOfWeekService) {}

  ngOnInit() {
    
  }

  /*

  countDays(startDate: Date, endDate: Date) {
    this.timeDifference = endDate.getTime() - startDate.getTime() + 1;
    console.log(Math.ceil(this.timeDifference / (1000 * 3600 * 24)));
  }

  */

  ngOnChanges()   {
    // console.log('forecast-for-each-day-component');
    // console.log(this.chosenTrip);
    // this.countDays(this.chosenTrip.startDate, this.chosenTrip.endDate);
    this.city = this.chosenTrip.city;
    this.startDate = this.chosenTrip.startDate;
    this.endDate = this.chosenTrip.endDate;
    
    this.httpService.getForecatForEachDay(this.city, this.startDate, this.endDate).subscribe(data => {
      // console.log(data.days);
      // console.log(Math.round(data.days[0].tempmax));
      this.days = data.days;
      // this.dayToday = this.dayOfWeekService.getDayOfWeek(this.days);
    });

  }

}
