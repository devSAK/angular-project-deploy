import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponentEightComponent } from './dashboard-component-eight.component';

describe('DashboardComponentEightComponent', () => {
  let component: DashboardComponentEightComponent;
  let fixture: ComponentFixture<DashboardComponentEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponentEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponentEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
