import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardothersComponentNineComponent } from './dashboardothers-component-nine.component';

describe('DashboardothersComponentNineComponent', () => {
  let component: DashboardothersComponentNineComponent;
  let fixture: ComponentFixture<DashboardothersComponentNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardothersComponentNineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardothersComponentNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
