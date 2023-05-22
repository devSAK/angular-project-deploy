import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceComponentFourComponent } from './guidance-component-four.component';

describe('GuidanceComponentFourComponent', () => {
  let component: GuidanceComponentFourComponent;
  let fixture: ComponentFixture<GuidanceComponentFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidanceComponentFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidanceComponentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
