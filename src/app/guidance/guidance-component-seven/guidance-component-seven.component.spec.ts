import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceComponentSevenComponent } from './guidance-component-seven.component';

describe('GuidanceComponentSevenComponent', () => {
  let component: GuidanceComponentSevenComponent;
  let fixture: ComponentFixture<GuidanceComponentSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidanceComponentSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidanceComponentSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
