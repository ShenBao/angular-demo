import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router001Component } from './router001.component';

describe('Router001Component', () => {
  let component: Router001Component;
  let fixture: ComponentFixture<Router001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
