import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponentFiveComponent } from './report-component-five.component';

describe('ReportComponentFiveComponent', () => {
  let component: ReportComponentFiveComponent;
  let fixture: ComponentFixture<ReportComponentFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportComponentFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportComponentFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
