import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecycle003Component } from './lifecycle003.component';

describe('Lifecycle003Component', () => {
  let component: Lifecycle003Component;
  let fixture: ComponentFixture<Lifecycle003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lifecycle003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifecycle003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
