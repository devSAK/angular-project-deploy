import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponentNineComponent } from './report-component-nine.component';

describe('ReportComponentNineComponent', () => {
  let component: ReportComponentNineComponent;
  let fixture: ComponentFixture<ReportComponentNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportComponentNineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportComponentNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
