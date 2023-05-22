import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceComponentFiveComponent } from './guidance-component-five.component';

describe('GuidanceComponentFiveComponent', () => {
  let component: GuidanceComponentFiveComponent;
  let fixture: ComponentFixture<GuidanceComponentFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidanceComponentFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidanceComponentFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
