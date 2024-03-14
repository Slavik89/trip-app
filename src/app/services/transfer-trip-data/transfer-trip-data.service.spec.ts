import { TestBed } from '@angular/core/testing';

import { TransferTripDataService } from './transfer-trip-data.service';

describe('TransferTripDataService', () => {
  let service: TransferTripDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferTripDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
