import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportothersComponentNineComponent } from './reportothers-component-nine.component';

describe('ReportothersComponentNineComponent', () => {
  let component: ReportothersComponentNineComponent;
  let fixture: ComponentFixture<ReportothersComponentNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportothersComponentNineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportothersComponentNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
