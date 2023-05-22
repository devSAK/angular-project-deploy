import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprogressothersComponentFourComponent } from './testprogressothers-component-four.component';

describe('TestprogressothersComponentFourComponent', () => {
  let component: TestprogressothersComponentFourComponent;
  let fixture: ComponentFixture<TestprogressothersComponentFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestprogressothersComponentFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestprogressothersComponentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
