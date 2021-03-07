import { TestBed } from '@angular/core/testing';

import { AllissuedService } from './allissued.service';

describe('AllissuedService', () => {
  let service: AllissuedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllissuedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
