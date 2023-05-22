import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportothersComponentEightComponent } from './reportothers-component-eight.component';

describe('ReportothersComponentEightComponent', () => {
  let component: ReportothersComponentEightComponent;
  let fixture: ComponentFixture<ReportothersComponentEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportothersComponentEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportothersComponentEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
