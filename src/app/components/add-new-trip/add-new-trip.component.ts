import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TripDate } from 'src/app/mocks/interfaces/trip-date';

@Component({
  selector: 'app-add-new-trip',
  templateUrl: './add-new-trip.component.html',
  styleUrls: ['./add-new-trip.component.css']
})
export class AddNewTripComponent implements OnChanges, OnInit, OnDestroy {

  @Input() isVisible !: boolean; 
  isStartDateShown = false;
  isEndDateShown = false;
  startDate !: any;
  endDate !: any;
  @Input() tripsList !: TripDate[];

  ngOnInit () {
    // console.log('add trip works');
  }

  onSubmit(tripForm: NgForm) {
    console.log(tripForm.value); 
    this.tripsList.push(tripForm.value);
    // tripForm.reset();
    this.isVisible = false;
  }

  showStartDate($event: Date) {    
    // this.startDate = $event.toISOString().slice(0, 10);
    this.startDate = $event;
    console.log($event);
    this.isStartDateShown = false;
  }

  showEndDate($event: Date) {
    this.endDate = $event;
    console.log($event);
    this.isEndDateShown = false;
  }

  ngOnChanges() {
    // console.log(this.tripsList);
    // console.log('add trip works');
    // console.log(this.tripsList);
    // console.log(this.isFormShown);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy works');
  }

}
