import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponentFiveComponent } from './dashboard-component-five.component';

describe('DashboardComponentFiveComponent', () => {
  let component: DashboardComponentFiveComponent;
  let fixture: ComponentFixture<DashboardComponentFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponentFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponentFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
