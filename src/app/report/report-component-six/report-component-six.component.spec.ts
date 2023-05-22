import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponentSixComponent } from './report-component-six.component';

describe('ReportComponentSixComponent', () => {
  let component: ReportComponentSixComponent;
  let fixture: ComponentFixture<ReportComponentSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportComponentSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportComponentSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
