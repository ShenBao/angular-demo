import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router010Component } from './router010.component';

describe('Router010Component', () => {
  let component: Router010Component;
  let fixture: ComponentFixture<Router010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
