import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form003Component } from './form003.component';

describe('Form003Component', () => {
  let component: Form003Component;
  let fixture: ComponentFixture<Form003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
