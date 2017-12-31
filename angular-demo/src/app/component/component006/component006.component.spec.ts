import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component006Component } from './component006.component';

describe('Component006Component', () => {
  let component: Component006Component;
  let fixture: ComponentFixture<Component006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
