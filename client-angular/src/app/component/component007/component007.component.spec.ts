import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component007Component } from './component007.component';

describe('Component007Component', () => {
  let component: Component007Component;
  let fixture: ComponentFixture<Component007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
