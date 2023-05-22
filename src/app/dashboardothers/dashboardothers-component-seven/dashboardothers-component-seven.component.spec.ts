import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardothersComponentSevenComponent } from './dashboardothers-component-seven.component';

describe('DashboardothersComponentSevenComponent', () => {
  let component: DashboardothersComponentSevenComponent;
  let fixture: ComponentFixture<DashboardothersComponentSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardothersComponentSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardothersComponentSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
