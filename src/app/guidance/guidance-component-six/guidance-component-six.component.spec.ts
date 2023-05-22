import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceComponentSixComponent } from './guidance-component-six.component';

describe('GuidanceComponentSixComponent', () => {
  let component: GuidanceComponentSixComponent;
  let fixture: ComponentFixture<GuidanceComponentSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidanceComponentSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidanceComponentSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
