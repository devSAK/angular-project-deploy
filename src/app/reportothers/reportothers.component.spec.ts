import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportothersComponent } from './reportothers.component';

describe('ReportothersComponent', () => {
  let component: ReportothersComponent;
  let fixture: ComponentFixture<ReportothersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportothersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportothersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
