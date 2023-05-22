import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportothersComponentSixComponent } from './reportothers-component-six.component';

describe('ReportothersComponentSixComponent', () => {
  let component: ReportothersComponentSixComponent;
  let fixture: ComponentFixture<ReportothersComponentSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportothersComponentSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportothersComponentSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
