import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponentThreeComponent } from './report-component-three.component';

describe('ReportComponentThreeComponent', () => {
  let component: ReportComponentThreeComponent;
  let fixture: ComponentFixture<ReportComponentThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportComponentThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportComponentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
