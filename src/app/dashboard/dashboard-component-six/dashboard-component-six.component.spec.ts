import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponentSixComponent } from './dashboard-component-six.component';

describe('DashboardComponentSixComponent', () => {
  let component: DashboardComponentSixComponent;
  let fixture: ComponentFixture<DashboardComponentSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponentSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponentSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
