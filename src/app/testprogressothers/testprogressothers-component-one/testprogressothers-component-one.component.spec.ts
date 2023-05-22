import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprogressothersComponentOneComponent } from './testprogressothers-component-one.component';

describe('TestprogressothersComponentOneComponent', () => {
  let component: TestprogressothersComponentOneComponent;
  let fixture: ComponentFixture<TestprogressothersComponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestprogressothersComponentOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestprogressothersComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
