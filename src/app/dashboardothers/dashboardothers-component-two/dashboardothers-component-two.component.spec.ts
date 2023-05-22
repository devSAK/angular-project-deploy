import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardothersComponentTwoComponent } from './dashboardothers-component-two.component';

describe('DashboardothersComponentTwoComponent', () => {
  let component: DashboardothersComponentTwoComponent;
  let fixture: ComponentFixture<DashboardothersComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardothersComponentTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardothersComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
