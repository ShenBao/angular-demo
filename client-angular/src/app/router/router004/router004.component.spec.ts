import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router004Component } from './router004.component';

describe('Router004Component', () => {
  let component: Router004Component;
  let fixture: ComponentFixture<Router004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
