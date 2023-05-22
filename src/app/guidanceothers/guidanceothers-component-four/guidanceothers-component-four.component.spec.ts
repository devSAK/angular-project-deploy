import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceothersComponentFourComponent } from './guidanceothers-component-four.component';

describe('GuidanceothersComponentFourComponent', () => {
  let component: GuidanceothersComponentFourComponent;
  let fixture: ComponentFixture<GuidanceothersComponentFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidanceothersComponentFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidanceothersComponentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
