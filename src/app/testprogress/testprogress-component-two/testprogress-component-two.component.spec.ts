import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprogressComponentTwoComponent } from './testprogress-component-two.component';

describe('TestprogressComponentTwoComponent', () => {
  let component: TestprogressComponentTwoComponent;
  let fixture: ComponentFixture<TestprogressComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestprogressComponentTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestprogressComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
