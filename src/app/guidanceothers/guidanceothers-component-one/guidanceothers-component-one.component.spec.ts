import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceothersComponentOneComponent } from './guidanceothers-component-one.component';

describe('GuidanceothersComponentOneComponent', () => {
  let component: GuidanceothersComponentOneComponent;
  let fixture: ComponentFixture<GuidanceothersComponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidanceothersComponentOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidanceothersComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
