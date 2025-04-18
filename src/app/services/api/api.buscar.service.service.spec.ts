import { TestBed } from '@angular/core/testing';

import { ApiBuscarServiceService } from './api.buscar.service.service';

describe('ApiBuscarServiceService', () => {
  let service: ApiBuscarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBuscarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
