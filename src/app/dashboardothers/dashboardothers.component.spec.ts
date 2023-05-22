import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardothersComponent } from './dashboardothers.component';

describe('DashboardothersComponent', () => {
  let component: DashboardothersComponent;
  let fixture: ComponentFixture<DashboardothersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardothersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardothersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
