import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceComponentOneComponent } from './guidance-component-one.component';

describe('GuidanceComponentOneComponent', () => {
  let component: GuidanceComponentOneComponent;
  let fixture: ComponentFixture<GuidanceComponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidanceComponentOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidanceComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
