import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherForTodayComponent } from './components/weather-for-today/weather-for-today.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { TripComponent } from './components/trip/trip.component';
import { ForecastForEachDayComponent } from './components/forecast-for-each-day/forecast-for-each-day.component';
import { AddNewTripComponent } from './components/add-new-trip/add-new-trip.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { AddNewTripMaterialComponent } from './components/add-new-trip-material/add-new-trip-material.component';
import { AddNewTripFormComponent } from './components/add-new-trip-form/add-new-trip-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, NativeDateAdapter} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForTodayComponent,
    FilterPipe,
    TripComponent,
    ForecastForEachDayComponent,
    AddNewTripComponent,
    CalendarComponent,
    AddNewTripMaterialComponent,
    AddNewTripFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatCardModule
  ],
  providers: [NativeDateAdapter],
  bootstrap: [AppComponent]
})
export class AppModule { }
