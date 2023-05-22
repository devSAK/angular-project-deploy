import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponentEightComponent } from './report-component-eight.component';

describe('ReportComponentEightComponent', () => {
  let component: ReportComponentEightComponent;
  let fixture: ComponentFixture<ReportComponentEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportComponentEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportComponentEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
