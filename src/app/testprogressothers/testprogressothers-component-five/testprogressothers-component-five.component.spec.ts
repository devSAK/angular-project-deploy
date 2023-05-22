import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprogressothersComponentFiveComponent } from './testprogressothers-component-five.component';

describe('TestprogressothersComponentFiveComponent', () => {
  let component: TestprogressothersComponentFiveComponent;
  let fixture: ComponentFixture<TestprogressothersComponentFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestprogressothersComponentFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestprogressothersComponentFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
