import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprogressComponentNineComponent } from './testprogress-component-nine.component';

describe('TestprogressComponentNineComponent', () => {
  let component: TestprogressComponentNineComponent;
  let fixture: ComponentFixture<TestprogressComponentNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestprogressComponentNineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestprogressComponentNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
