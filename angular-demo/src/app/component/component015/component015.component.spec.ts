import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component015Component } from './component015.component';

describe('Component015Component', () => {
  let component: Component015Component;
  let fixture: ComponentFixture<Component015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
