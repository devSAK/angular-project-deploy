import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardothersComponentThreeComponent } from './dashboardothers-component-three.component';

describe('DashboardothersComponentThreeComponent', () => {
  let component: DashboardothersComponentThreeComponent;
  let fixture: ComponentFixture<DashboardothersComponentThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardothersComponentThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardothersComponentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
