import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprogressComponentEightComponent } from './testprogress-component-eight.component';

describe('TestprogressComponentEightComponent', () => {
  let component: TestprogressComponentEightComponent;
  let fixture: ComponentFixture<TestprogressComponentEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestprogressComponentEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestprogressComponentEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
