import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportothersComponentTwoComponent } from './reportothers-component-two.component';

describe('ReportothersComponentTwoComponent', () => {
  let component: ReportothersComponentTwoComponent;
  let fixture: ComponentFixture<ReportothersComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportothersComponentTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportothersComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
