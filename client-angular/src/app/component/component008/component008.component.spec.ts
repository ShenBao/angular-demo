import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component008Component } from './component008.component';

describe('Component008Component', () => {
  let component: Component008Component;
  let fixture: ComponentFixture<Component008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
