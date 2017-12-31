import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router009Component } from './router009.component';

describe('Router009Component', () => {
  let component: Router009Component;
  let fixture: ComponentFixture<Router009Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router009Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
