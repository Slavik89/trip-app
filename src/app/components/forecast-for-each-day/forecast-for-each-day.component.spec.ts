import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastForEachDayComponent } from './forecast-for-each-day.component';

describe('ForecastForEachDayComponent', () => {
  let component: ForecastForEachDayComponent;
  let fixture: ComponentFixture<ForecastForEachDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastForEachDayComponent]
    });
    fixture = TestBed.createComponent(ForecastForEachDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
