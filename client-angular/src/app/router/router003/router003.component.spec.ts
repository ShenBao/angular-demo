import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router003Component } from './router003.component';

describe('Router003Component', () => {
  let component: Router003Component;
  let fixture: ComponentFixture<Router003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
