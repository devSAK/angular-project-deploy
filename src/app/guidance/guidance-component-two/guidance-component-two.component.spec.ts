import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceComponentTwoComponent } from './guidance-component-two.component';

describe('GuidanceComponentTwoComponent', () => {
  let component: GuidanceComponentTwoComponent;
  let fixture: ComponentFixture<GuidanceComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidanceComponentTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidanceComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
