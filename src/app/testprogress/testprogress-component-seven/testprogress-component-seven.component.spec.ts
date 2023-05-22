import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprogressComponentSevenComponent } from './testprogress-component-seven.component';

describe('TestprogressComponentSevenComponent', () => {
  let component: TestprogressComponentSevenComponent;
  let fixture: ComponentFixture<TestprogressComponentSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestprogressComponentSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestprogressComponentSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
