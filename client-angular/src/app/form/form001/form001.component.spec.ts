import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form001Component } from './form001.component';

describe('Form001Component', () => {
  let component: Form001Component;
  let fixture: ComponentFixture<Form001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
