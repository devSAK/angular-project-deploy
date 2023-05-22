import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardothersComponentEightComponent } from './dashboardothers-component-eight.component';

describe('DashboardothersComponentEightComponent', () => {
  let component: DashboardothersComponentEightComponent;
  let fixture: ComponentFixture<DashboardothersComponentEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardothersComponentEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardothersComponentEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
