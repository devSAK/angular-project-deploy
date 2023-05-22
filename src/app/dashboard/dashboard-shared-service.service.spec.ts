import { TestBed } from '@angular/core/testing';
import { DashboardSharedServiceService } from './dashboard-shared-service.service';

describe('DashboardSharedServiceService', () => {
  let service: DashboardSharedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardSharedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
