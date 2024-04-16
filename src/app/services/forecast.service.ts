import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection, getDoc, addDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient, public fireService: Firestore) { }
  
  urlForCity!: string;
  cityName!: string;
  API_KEY = '93WK3YZ2F8CZZV6F98WF4C2HX';
  url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Barcelona?unitGroup=metric&key=93WK3YZ2F8CZZV6F98WF4C2HX&contentType=json'; 
  urlForecastForEachDay!: string;
  startDateString!: string;
  endDateString!: string;

  item$ !: Observable<any[]>;
  firestore: Firestore = inject(Firestore);

  getForecast(): Observable<any> {
    return this.http
            .get<any>(this.url);
  }

  getForecastForToday(cityName: string): Observable<any> {
    this.cityName = cityName;
    this.urlForCity = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.cityName}/today?unitGroup=metric&include=days&key=${this.API_KEY}&contentType=json`;    
    return this.http
              .get<any>(this.urlForCity);
  }

  getForecatForEachDay(city: string, startDate: any, endDate: any) {
    this.startDateString = startDate.toISOString();
    this.endDateString = endDate.toISOString();
    // console.log(startDate.toISOString());
    // console.log(endDate.toISOString());
    this.urlForecastForEachDay = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${this.startDateString}/${this.endDateString}?unitGroup=metric&include=days&key=${this.API_KEY}&contentType=json`;
    return this.http
                .get<any>(this.urlForecastForEachDay);
  }


  /*
  getTrips() {
    const itemCollection = collection(this.firestore, 'trips');
    this.item$ = collectionData(itemCollection);
    return this.item$;
  }
  */


  /*
  getTripsId() {
    const itemCollection = collection(this.firestore, 'trips');   
    return collectionData(itemCollection, {idField: 'id'}) as Observable<any[]>;;
  }
  */

}
