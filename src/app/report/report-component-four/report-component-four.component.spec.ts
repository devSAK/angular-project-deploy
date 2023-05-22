import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponentFourComponent } from './report-component-four.component';

describe('ReportComponentFourComponent', () => {
  let component: ReportComponentFourComponent;
  let fixture: ComponentFixture<ReportComponentFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportComponentFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportComponentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
