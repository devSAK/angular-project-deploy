import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprogressothersComponentThreeComponent } from './testprogressothers-component-three.component';

describe('TestprogressothersComponentThreeComponent', () => {
  let component: TestprogressothersComponentThreeComponent;
  let fixture: ComponentFixture<TestprogressothersComponentThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestprogressothersComponentThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestprogressothersComponentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
