import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chess1Component } from './chess1.component';

describe('Chess1Component', () => {
  let component: Chess1Component;
  let fixture: ComponentFixture<Chess1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chess1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chess1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
