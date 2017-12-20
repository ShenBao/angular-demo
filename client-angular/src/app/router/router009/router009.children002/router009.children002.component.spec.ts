import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router009Children002Component } from './router009.children002.component';

describe('Router009.Children002Component', () => {
  let component: Router009Children002Component;
  let fixture: ComponentFixture<Router009Children002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router009Children002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router009Children002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
