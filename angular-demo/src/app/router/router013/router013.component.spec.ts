import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router013Component } from './router013.component';

describe('Router013Component', () => {
  let component: Router013Component;
  let fixture: ComponentFixture<Router013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
