import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecycle005children002Component } from './lifecycle005children002.component';

describe('Lifecycle005children002Component', () => {
  let component: Lifecycle005children002Component;
  let fixture: ComponentFixture<Lifecycle005children002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lifecycle005children002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifecycle005children002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
