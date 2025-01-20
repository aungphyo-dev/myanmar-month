import { TestBed } from '@angular/core/testing';

import { MyanmarmonthService } from './myanmarmonth.service';

describe('MyanmarmonthService', () => {
  let service: MyanmarmonthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyanmarmonthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
