import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprogressothersComponentEightComponent } from './testprogressothers-component-eight.component';

describe('TestprogressothersComponentEightComponent', () => {
  let component: TestprogressothersComponentEightComponent;
  let fixture: ComponentFixture<TestprogressothersComponentEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestprogressothersComponentEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestprogressothersComponentEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
