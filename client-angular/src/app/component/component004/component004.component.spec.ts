import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component004Component } from './component004.component';

describe('Component004Component', () => {
  let component: Component004Component;
  let fixture: ComponentFixture<Component004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
