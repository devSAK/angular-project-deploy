import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportothersComponentThreeComponent } from './reportothers-component-three.component';

describe('ReportothersComponentThreeComponent', () => {
  let component: ReportothersComponentThreeComponent;
  let fixture: ComponentFixture<ReportothersComponentThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportothersComponentThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportothersComponentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
