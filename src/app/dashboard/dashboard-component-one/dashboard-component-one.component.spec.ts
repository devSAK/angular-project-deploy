import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponentOneComponent } from './dashboard-component-one.component';

describe('DashboardComponentOneComponent', () => {
  let component: DashboardComponentOneComponent;
  let fixture: ComponentFixture<DashboardComponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponentOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
