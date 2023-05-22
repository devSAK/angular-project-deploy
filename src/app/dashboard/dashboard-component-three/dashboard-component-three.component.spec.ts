import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponentThreeComponent } from './dashboard-component-three.component';

describe('DashboardComponentThreeComponent', () => {
  let component: DashboardComponentThreeComponent;
  let fixture: ComponentFixture<DashboardComponentThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponentThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
