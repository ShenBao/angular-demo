import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component009Component } from './component009.component';

describe('Component009Component', () => {
  let component: Component009Component;
  let fixture: ComponentFixture<Component009Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component009Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
