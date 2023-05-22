import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceothersComponentThreeComponent } from './guidanceothers-component-three.component';

describe('GuidanceothersComponentThreeComponent', () => {
  let component: GuidanceothersComponentThreeComponent;
  let fixture: ComponentFixture<GuidanceothersComponentThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidanceothersComponentThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidanceothersComponentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
