import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router014children002Component } from './router014children002.component';

describe('Router014children002Component', () => {
  let component: Router014children002Component;
  let fixture: ComponentFixture<Router014children002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router014children002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router014children002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
