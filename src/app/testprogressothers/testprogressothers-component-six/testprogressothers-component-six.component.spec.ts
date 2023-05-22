import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprogressothersComponentSixComponent } from './testprogressothers-component-six.component';

describe('TestprogressothersComponentSixComponent', () => {
  let component: TestprogressothersComponentSixComponent;
  let fixture: ComponentFixture<TestprogressothersComponentSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestprogressothersComponentSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestprogressothersComponentSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
