import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponentFourComponent } from './dashboard-component-four.component';

describe('DashboardComponentFourComponent', () => {
  let component: DashboardComponentFourComponent;
  let fixture: ComponentFixture<DashboardComponentFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponentFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
