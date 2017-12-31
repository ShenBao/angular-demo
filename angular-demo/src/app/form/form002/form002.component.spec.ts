import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form002Component } from './form002.component';

describe('Form002Component', () => {
  let component: Form002Component;
  let fixture: ComponentFixture<Form002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
