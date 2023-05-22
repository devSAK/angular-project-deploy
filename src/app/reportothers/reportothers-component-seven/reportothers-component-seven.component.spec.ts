import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportothersComponentSevenComponent } from './reportothers-component-seven.component';

describe('ReportothersComponentSevenComponent', () => {
  let component: ReportothersComponentSevenComponent;
  let fixture: ComponentFixture<ReportothersComponentSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportothersComponentSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportothersComponentSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
