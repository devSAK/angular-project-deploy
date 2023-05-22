import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprogressothersComponentTwoComponent } from './testprogressothers-component-two.component';

describe('TestprogressothersComponentTwoComponent', () => {
  let component: TestprogressothersComponentTwoComponent;
  let fixture: ComponentFixture<TestprogressothersComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestprogressothersComponentTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestprogressothersComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
