import { Component, OnInit } from '@angular/core';

interface Day {
  dayOfMonth: number | null;
  
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {

  daysOfWeek: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  weeks: Day[][] = [];  
  currentWeek: Day[] = [];
  currentDay = 0;
  count = 0;
  dayOfWeekNumber!: number;
  firstWeekCount = 0;

  ngOnInit(): void {    
    this.generateCalendar();
  }



  generateCalendar(): void {
    for (let i = 0; i < 3; i++) {
      if( i === 0 && (new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate() + this.count)).getDay() !== 0 ) {
        let dayOfWeekNumber = (new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate() + this.count)).getDay();
        for (let m = 0; m < 7; m++) {          
          if (this.firstWeekCount < dayOfWeekNumber ) {
            this.currentWeek.push({ dayOfMonth: null });
            this.firstWeekCount++;
          } else {            
            let dayOfMonth = (new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate() + this.count)).getDate();
            this.currentWeek.push({ dayOfMonth: dayOfMonth });
            this.count++;            
          }                 
        } 
      }  else {        
          for (let k = 0; k < 7; k++) {
            let dayOfMonth = (new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate() + this.count)).getDate();            
            this.currentWeek.push({ dayOfMonth: dayOfMonth });
              this.count++;
              if (this.count >= 15) {
                break;
              }
          }
      }
      
      this.weeks.push(this.currentWeek);
      this.currentWeek = [];
      if (this.count >= 15) {
        break;
      }
    } 
    console.log(this.weeks);
  }

  


}
