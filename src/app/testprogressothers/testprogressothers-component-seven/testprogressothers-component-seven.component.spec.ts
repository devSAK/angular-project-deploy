import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprogressothersComponentSevenComponent } from './testprogressothers-component-seven.component';

describe('TestprogressothersComponentSevenComponent', () => {
  let component: TestprogressothersComponentSevenComponent;
  let fixture: ComponentFixture<TestprogressothersComponentSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestprogressothersComponentSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestprogressothersComponentSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
