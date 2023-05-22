import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponentOneComponent } from './report-component-one.component';

describe('ReportComponentOneComponent', () => {
  let component: ReportComponentOneComponent;
  let fixture: ComponentFixture<ReportComponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportComponentOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
