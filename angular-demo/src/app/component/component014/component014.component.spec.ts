import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component014Component } from './component014.component';

describe('Component014Component', () => {
  let component: Component014Component;
  let fixture: ComponentFixture<Component014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
