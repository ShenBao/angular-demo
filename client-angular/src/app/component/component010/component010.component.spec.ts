import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component010Component } from './component010.component';

describe('Component010Component', () => {
  let component: Component010Component;
  let fixture: ComponentFixture<Component010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
