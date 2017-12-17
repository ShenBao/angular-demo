import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form004Component } from './form004.component';

describe('Form004Component', () => {
  let component: Form004Component;
  let fixture: ComponentFixture<Form004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
