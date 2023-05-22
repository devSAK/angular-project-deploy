import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprogressComponentOneComponent } from './testprogress-component-one.component';

describe('TestprogressComponentOneComponent', () => {
  let component: TestprogressComponentOneComponent;
  let fixture: ComponentFixture<TestprogressComponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestprogressComponentOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestprogressComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
