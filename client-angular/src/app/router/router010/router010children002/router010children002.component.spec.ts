import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router010children002Component } from './router010children002.component';

describe('Router010children002Component', () => {
  let component: Router010children002Component;
  let fixture: ComponentFixture<Router010children002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router010children002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router010children002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
