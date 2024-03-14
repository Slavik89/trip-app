import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherForTodayComponent } from './components/weather-for-today/weather-for-today.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { TripComponent } from './components/trip/trip.component';
import { ForecastForEachDayComponent } from './components/forecast-for-each-day/forecast-for-each-day.component';
import { AddNewTripComponent } from './components/add-new-trip/add-new-trip.component';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForTodayComponent,
    FilterPipe,
    TripComponent,
    ForecastForEachDayComponent,
    AddNewTripComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
