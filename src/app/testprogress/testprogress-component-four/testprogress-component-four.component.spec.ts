import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprogressComponentFourComponent } from './testprogress-component-four.component';

describe('TestprogressComponentFourComponent', () => {
  let component: TestprogressComponentFourComponent;
  let fixture: ComponentFixture<TestprogressComponentFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestprogressComponentFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestprogressComponentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
