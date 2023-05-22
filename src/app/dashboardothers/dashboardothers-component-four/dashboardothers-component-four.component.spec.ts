import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardothersComponentFourComponent } from './dashboardothers-component-four.component';

describe('DashboardothersComponentFourComponent', () => {
  let component: DashboardothersComponentFourComponent;
  let fixture: ComponentFixture<DashboardothersComponentFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardothersComponentFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardothersComponentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
