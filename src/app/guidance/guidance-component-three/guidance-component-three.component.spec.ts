import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceComponentThreeComponent } from './guidance-component-three.component';

describe('GuidanceComponentThreeComponent', () => {
  let component: GuidanceComponentThreeComponent;
  let fixture: ComponentFixture<GuidanceComponentThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidanceComponentThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidanceComponentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
