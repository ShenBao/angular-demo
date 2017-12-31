import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router007Component } from './router007.component';

describe('Router007Component', () => {
  let component: Router007Component;
  let fixture: ComponentFixture<Router007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
