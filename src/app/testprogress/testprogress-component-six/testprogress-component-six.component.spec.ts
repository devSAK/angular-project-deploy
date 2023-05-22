import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprogressComponentSixComponent } from './testprogress-component-six.component';

describe('TestprogressComponentSixComponent', () => {
  let component: TestprogressComponentSixComponent;
  let fixture: ComponentFixture<TestprogressComponentSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestprogressComponentSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestprogressComponentSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
