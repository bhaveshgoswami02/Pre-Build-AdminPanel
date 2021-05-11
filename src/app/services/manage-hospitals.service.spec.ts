import { TestBed } from '@angular/core/testing';

import { ManageHospitalsService } from './manage-hospitals.service';

describe('ManageHospitalsService', () => {
  let service: ManageHospitalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageHospitalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
