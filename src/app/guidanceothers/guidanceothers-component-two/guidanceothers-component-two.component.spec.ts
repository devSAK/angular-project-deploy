import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceothersComponentTwoComponent } from './guidanceothers-component-two.component';

describe('GuidanceothersComponentTwoComponent', () => {
  let component: GuidanceothersComponentTwoComponent;
  let fixture: ComponentFixture<GuidanceothersComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidanceothersComponentTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidanceothersComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
