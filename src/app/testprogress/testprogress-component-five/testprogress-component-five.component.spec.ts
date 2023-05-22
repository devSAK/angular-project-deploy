import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprogressComponentFiveComponent } from './testprogress-component-five.component';

describe('TestprogressComponentFiveComponent', () => {
  let component: TestprogressComponentFiveComponent;
  let fixture: ComponentFixture<TestprogressComponentFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestprogressComponentFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestprogressComponentFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
