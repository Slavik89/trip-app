import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTripComponent } from './add-new-trip.component';

describe('AddNewTripComponent', () => {
  let component: AddNewTripComponent;
  let fixture: ComponentFixture<AddNewTripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewTripComponent]
    });
    fixture = TestBed.createComponent(AddNewTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
