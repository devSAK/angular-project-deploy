import { TestBed } from '@angular/core/testing';

import { DashboardothersSharedService } from './dashboardothers-shared.service';

describe('DashboardothersSharedService', () => {
  let service: DashboardothersSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardothersSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
