import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component011Component } from './component011.component';

describe('Component011Component', () => {
  let component: Component011Component;
  let fixture: ComponentFixture<Component011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
