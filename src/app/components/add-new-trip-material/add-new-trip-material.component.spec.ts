import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTripMaterialComponent } from './add-new-trip-material.component';

describe('AddNewTripMaterialComponent', () => {
  let component: AddNewTripMaterialComponent;
  let fixture: ComponentFixture<AddNewTripMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewTripMaterialComponent]
    });
    fixture = TestBed.createComponent(AddNewTripMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
