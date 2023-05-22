import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponentTwoComponent } from './dashboard-component-two.component';

describe('DashboardComponentTwoComponent', () => {
  let component: DashboardComponentTwoComponent;
  let fixture: ComponentFixture<DashboardComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponentTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
