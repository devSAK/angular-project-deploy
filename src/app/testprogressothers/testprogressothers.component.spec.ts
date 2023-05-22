import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprogressothersComponent } from './testprogressothers.component';

describe('TestprogressothersComponent', () => {
  let component: TestprogressothersComponent;
  let fixture: ComponentFixture<TestprogressothersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestprogressothersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestprogressothersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
