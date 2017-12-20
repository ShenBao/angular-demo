import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router014Component } from './router014.component';

describe('Router014Component', () => {
  let component: Router014Component;
  let fixture: ComponentFixture<Router014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
