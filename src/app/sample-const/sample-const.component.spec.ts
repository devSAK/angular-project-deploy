import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleConstComponent } from './sample-const.component';

describe('SampleConstComponent', () => {
  let component: SampleConstComponent;
  let fixture: ComponentFixture<SampleConstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleConstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleConstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
