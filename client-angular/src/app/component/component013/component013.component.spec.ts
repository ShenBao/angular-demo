import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component013Component } from './component013.component';

describe('Component013Component', () => {
  let component: Component013Component;
  let fixture: ComponentFixture<Component013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
