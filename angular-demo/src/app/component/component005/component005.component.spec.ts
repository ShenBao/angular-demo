import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component005Component } from './component005.component';

describe('Component005Component', () => {
  let component: Component005Component;
  let fixture: ComponentFixture<Component005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
