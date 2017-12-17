import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form005Component } from './form005.component';

describe('Form005Component', () => {
  let component: Form005Component;
  let fixture: ComponentFixture<Form005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
