import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprogressothersComponentNineComponent } from './testprogressothers-component-nine.component';

describe('TestprogressothersComponentNineComponent', () => {
  let component: TestprogressothersComponentNineComponent;
  let fixture: ComponentFixture<TestprogressothersComponentNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestprogressothersComponentNineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestprogressothersComponentNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
