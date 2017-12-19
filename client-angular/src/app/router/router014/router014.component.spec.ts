import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router14Component } from './router014.component';

describe('Router014Component', () => {
  let component: Router14Component;
  let fixture: ComponentFixture<Router14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
