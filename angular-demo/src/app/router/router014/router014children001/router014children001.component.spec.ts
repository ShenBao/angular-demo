import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router014children001Component } from './router014children001.component';

describe('Router014children001Component', () => {
  let component: Router014children001Component;
  let fixture: ComponentFixture<Router014children001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router014children001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router014children001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
