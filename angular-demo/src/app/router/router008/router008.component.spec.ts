import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router008Component } from './router008.component';

describe('Router008Component', () => {
  let component: Router008Component;
  let fixture: ComponentFixture<Router008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
