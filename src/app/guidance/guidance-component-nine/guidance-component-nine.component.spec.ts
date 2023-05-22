import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceComponentNineComponent } from './guidance-component-nine.component';

describe('GuidanceComponentNineComponent', () => {
  let component: GuidanceComponentNineComponent;
  let fixture: ComponentFixture<GuidanceComponentNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidanceComponentNineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidanceComponentNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
