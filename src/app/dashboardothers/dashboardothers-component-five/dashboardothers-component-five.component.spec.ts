import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardothersComponentFiveComponent } from './dashboardothers-component-five.component';

describe('DashboardothersComponentFiveComponent', () => {
  let component: DashboardothersComponentFiveComponent;
  let fixture: ComponentFixture<DashboardothersComponentFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardothersComponentFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardothersComponentFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
