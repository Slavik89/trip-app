import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertDateService {

  constructor() { }

  convertSecondsToDate(timestamp: any) {

    if (timestamp instanceof Date) {
      return timestamp;
    } 
    else {
      let date = new Date(timestamp.seconds*1000);
      return date;
    }    

  }

}
