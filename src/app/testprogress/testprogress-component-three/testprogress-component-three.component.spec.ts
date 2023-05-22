import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprogressComponentThreeComponent } from './testprogress-component-three.component';

describe('TestprogressComponentThreeComponent', () => {
  let component: TestprogressComponentThreeComponent;
  let fixture: ComponentFixture<TestprogressComponentThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestprogressComponentThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestprogressComponentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
