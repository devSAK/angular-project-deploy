import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportothersComponentFourComponent } from './reportothers-component-four.component';

describe('ReportothersComponentFourComponent', () => {
  let component: ReportothersComponentFourComponent;
  let fixture: ComponentFixture<ReportothersComponentFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportothersComponentFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportothersComponentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
