import { TestBed } from '@angular/core/testing';

import { MetodService } from './metod.service';

describe('MetodService', () => {
  let service: MetodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
