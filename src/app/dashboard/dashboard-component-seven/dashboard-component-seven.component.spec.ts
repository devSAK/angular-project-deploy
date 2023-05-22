import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponentSevenComponent } from './dashboard-component-seven.component';

describe('DashboardComponentSevenComponent', () => {
  let component: DashboardComponentSevenComponent;
  let fixture: ComponentFixture<DashboardComponentSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponentSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponentSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
