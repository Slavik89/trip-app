import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DayOfWeekService {
  
  dayOfWeek !: number;
  dayOfWeekString !: string;   

  getDayOfWeek(date: Date): string {  
    
    this.dayOfWeek = new Date(date).getDay();
    switch (this.dayOfWeek) {
      case 0:
        this.dayOfWeekString = "Sunday";
        break;
      case 1:
        this.dayOfWeekString = "Monday";
        break;
      case 2:
        this.dayOfWeekString = "Tuesday";
        break;
      case 3:
        this.dayOfWeekString = "Wednesday";
        break;
      case 4:
        this.dayOfWeekString = "Thursday";
        break;
      case 5:
        this.dayOfWeekString = "Friday";
        break;
      case 6:
        this.dayOfWeekString = "Saturday";
        break;
      default:
        console.log("Error: Unknown day of the week");
    }    
    return this.dayOfWeekString;
  }
  
}
