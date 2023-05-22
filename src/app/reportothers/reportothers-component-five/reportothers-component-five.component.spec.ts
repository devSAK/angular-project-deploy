import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportothersComponentFiveComponent } from './reportothers-component-five.component';

describe('ReportothersComponentFiveComponent', () => {
  let component: ReportothersComponentFiveComponent;
  let fixture: ComponentFixture<ReportothersComponentFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportothersComponentFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportothersComponentFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
