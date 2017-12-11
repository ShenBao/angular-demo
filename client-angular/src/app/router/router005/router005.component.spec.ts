import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router005Component } from './router005.component';

describe('Router005Component', () => {
  let component: Router005Component;
  let fixture: ComponentFixture<Router005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
