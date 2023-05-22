import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardothersComponentOneComponent } from './dashboardothers-component-one.component';

describe('DashboardothersComponentOneComponent', () => {
  let component: DashboardothersComponentOneComponent;
  let fixture: ComponentFixture<DashboardothersComponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardothersComponentOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardothersComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
