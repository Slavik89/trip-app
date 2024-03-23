import { Component,  Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-add-new-trip-form',
  templateUrl: './add-new-trip-form.component.html',
  styleUrls: ['./add-new-trip-form.component.css']
})
export class AddNewTripFormComponent {

  range = new FormGroup({
    city: new FormControl<string | null>(null),
    startDate: new FormControl<Date | null>(null),
    endDate: new FormControl<Date | null>(null),
  });

  citiesList = ['Paris', 'London', 'Rome', 'Berlin', 'Madrid'];

  constructor(public dialogRef: MatDialogRef<AddNewTripFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, private builder: FormBuilder) {}

    closeWindow(): void {
      this.dialogRef.close();
    }

    saveForm(data: any) {
      console.log(data);
      this.dialogRef.close();
    }

}
