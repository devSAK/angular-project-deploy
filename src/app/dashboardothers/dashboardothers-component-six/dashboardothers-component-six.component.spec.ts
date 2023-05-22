import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardothersComponentSixComponent } from './dashboardothers-component-six.component';

describe('DashboardothersComponentSixComponent', () => {
  let component: DashboardothersComponentSixComponent;
  let fixture: ComponentFixture<DashboardothersComponentSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardothersComponentSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardothersComponentSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
