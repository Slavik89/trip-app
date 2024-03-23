import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTripFormComponent } from './add-new-trip-form.component';

describe('AddNewTripFormComponent', () => {
  let component: AddNewTripFormComponent;
  let fixture: ComponentFixture<AddNewTripFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewTripFormComponent]
    });
    fixture = TestBed.createComponent(AddNewTripFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
