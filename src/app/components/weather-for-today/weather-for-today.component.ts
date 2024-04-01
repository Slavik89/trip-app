import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TripDate } from 'src/app/mocks/interfaces/trip-date';
import { ForecastService } from 'src/app/services/forecast.service';
import { DayOfWeekService } from 'src/app/services/day-of-week/day-of-week.service';

@Component({
  selector: 'app-weather-for-today',
  templateUrl: './weather-for-today.component.html',
  styleUrls: ['./weather-for-today.component.css']
})
export class WeatherForTodayComponent implements OnInit, OnChanges, AfterViewInit {
 
  @Input() chosenTrip!: TripDate;  
  weather = 'clear-day';
  dayToday!: string;
  startDate!: Date;
  temperature !: number;
  Math = Math;

  @ViewChild('childElement', {static: true}) childElement!: ElementRef;

  constructor(private httpService: ForecastService, private dayOfWeekService: DayOfWeekService,
              private renderer: Renderer2) {}

  ngOnInit() {   
   
  }  

  ngOnChanges() {
    this.showWeatherForToday();
    this.startDate = this.chosenTrip.startDate;
    this.dayToday = this.dayOfWeekService.getDayOfWeek(this.startDate);    
    // console.log(this.chosenTrip.startDate);
    // console.log(this.dayOfWeekService.getDayOfWeek());
  }

  showWeatherForToday() {
    this.httpService.getForecastForToday(this.chosenTrip.city).subscribe(data => {      
    this.weather = data.days[0].icon;
    // console.log(data.days[0].temp);
    this.temperature = data.days[0].temp;
    });    
  }

  ngAfterViewInit(): void {
    // const childWidth = this.childElement.nativeElement.offsetWidth;
    // console.log(childWidth);
  }

}
