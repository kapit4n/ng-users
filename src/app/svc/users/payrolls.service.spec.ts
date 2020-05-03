import { TestBed } from '@angular/core/testing';

import { PayrollsService } from './payrolls.service';

describe('PayrollsService', () => {
  let service: PayrollsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayrollsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
