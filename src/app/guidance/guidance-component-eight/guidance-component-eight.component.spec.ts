import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceComponentEightComponent } from './guidance-component-eight.component';

describe('GuidanceComponentEightComponent', () => {
  let component: GuidanceComponentEightComponent;
  let fixture: ComponentFixture<GuidanceComponentEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidanceComponentEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidanceComponentEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
