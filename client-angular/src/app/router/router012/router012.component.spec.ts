import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router012Component } from './router012.component';

describe('Router012Component', () => {
  let component: Router012Component;
  let fixture: ComponentFixture<Router012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
