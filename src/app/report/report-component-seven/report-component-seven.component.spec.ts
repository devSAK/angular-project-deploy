import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponentSevenComponent } from './report-component-seven.component';

describe('ReportComponentSevenComponent', () => {
  let component: ReportComponentSevenComponent;
  let fixture: ComponentFixture<ReportComponentSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportComponentSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportComponentSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
