import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router15Component } from './router15.component';

describe('Router15Component', () => {
  let component: Router15Component;
  let fixture: ComponentFixture<Router15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
