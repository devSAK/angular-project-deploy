import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponentTwoComponent } from './report-component-two.component';

describe('ReportComponentTwoComponent', () => {
  let component: ReportComponentTwoComponent;
  let fixture: ComponentFixture<ReportComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportComponentTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
