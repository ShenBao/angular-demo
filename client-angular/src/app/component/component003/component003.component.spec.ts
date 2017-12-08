import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component003Component } from './component003.component';

describe('Component003Component', () => {
  let component: Component003Component;
  let fixture: ComponentFixture<Component003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
