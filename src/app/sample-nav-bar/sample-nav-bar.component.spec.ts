import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleNavBarComponent } from './sample-nav-bar.component';

describe('SampleNavBarComponent', () => {
  let component: SampleNavBarComponent;
  let fixture: ComponentFixture<SampleNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
