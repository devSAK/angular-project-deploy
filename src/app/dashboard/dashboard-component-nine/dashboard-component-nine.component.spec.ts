import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponentNineComponent } from './dashboard-component-nine.component';

describe('DashboardComponentNineComponent', () => {
  let component: DashboardComponentNineComponent;
  let fixture: ComponentFixture<DashboardComponentNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponentNineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponentNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
