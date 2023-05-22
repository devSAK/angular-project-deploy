import { TestBed } from '@angular/core/testing';

import { DataloadService } from './dataload.service';

describe('DataloadService', () => {
  let service: DataloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
