import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportothersComponentOneComponent } from './reportothers-component-one.component';

describe('ReportothersComponentOneComponent', () => {
  let component: ReportothersComponentOneComponent;
  let fixture: ComponentFixture<ReportothersComponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportothersComponentOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportothersComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
