import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router011Component } from './router011.component';

describe('Router011Component', () => {
  let component: Router011Component;
  let fixture: ComponentFixture<Router011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
