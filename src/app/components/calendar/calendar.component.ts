import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Day {
  dayOfMonth: number | null;
  date: Date;
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
  @Input() isStartDateShown!: boolean;
  @Input() isEndDateShown!: boolean;
  @Output() chosenDate = new EventEmitter<Date>;

  ngOnInit(): void {    
    this.generateCalendar();
  }



  generateCalendar(): void {
    let date = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate() + this.count);
    for (let i = 0; i < 3; i++) {
      
      if( i === 0 && (new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate() + this.count)).getDay() !== 0 ) {
        let dayOfWeekNumber = (new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate() + this.count)).getDay();
        let date = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate() + this.count);
        for (let m = 0; m < 7; m++) {          
          if (this.firstWeekCount < dayOfWeekNumber ) {
            this.currentWeek.push({ dayOfMonth: null, date: date });
            this.firstWeekCount++;
          } else {            
            let dayOfMonth = (new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate() + this.count)).getDate();
            let date = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate() + this.count);
            this.currentWeek.push({ dayOfMonth: dayOfMonth, date: date });
            this.count++;            
          }                 
        } 
      }  else {        
          for (let k = 0; k < 7; k++) {
            let dayOfMonth = (new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate() + this.count)).getDate();            
            let date = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate() + this.count);
            this.currentWeek.push({ dayOfMonth: dayOfMonth, date: date });
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
    // console.log(this.weeks);
  }


  choseDate(date: Date) {
    // console.log(date);
    this.chosenDate.emit(date);
  }
  
}
