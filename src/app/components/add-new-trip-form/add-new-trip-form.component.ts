import { Component,  Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import { AddTripService } from 'src/app/services/add-trip/add-trip.service';

@Component({
  selector: 'app-add-new-trip-form',
  templateUrl: './add-new-trip-form.component.html',
  styleUrls: ['./add-new-trip-form.component.css']
})
export class AddNewTripFormComponent {

  myForm!: FormGroup;
  citiesList = ['Paris', 'London', 'Rome', 'Berlin', 'Madrid', 'Barcelona', 'Bucharest'];

  constructor(public dialogRef: MatDialogRef<AddNewTripFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, private fb: FormBuilder, 
    public addTrip: AddTripService) {

      this.myForm = fb.group({
        'city': ['', Validators.required],
        'startDate': ['', Validators.required],
        'endDate': ['', Validators.required]
      });

    }

    closeWindow(): void {
      this.dialogRef.close();
    }

    /*
    saveForm(data: any) {
      this.addTrip.setTripsList(data);
      this.dialogRef.close();
    }
    */

    saveForm(data: any) {
      this.addTrip.setTripsList(data);
      this.dialogRef.close();
    }
}
