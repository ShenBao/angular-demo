import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component012Component } from './component012.component';

describe('Component012Component', () => {
  let component: Component012Component;
  let fixture: ComponentFixture<Component012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
