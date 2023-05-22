import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceothersComponent } from './guidanceothers.component';

describe('GuidanceothersComponent', () => {
  let component: GuidanceothersComponent;
  let fixture: ComponentFixture<GuidanceothersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidanceothersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidanceothersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
