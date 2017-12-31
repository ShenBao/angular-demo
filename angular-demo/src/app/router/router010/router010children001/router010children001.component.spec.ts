import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router010children001Component } from './router010children001.component';

describe('Router010children001Component', () => {
  let component: Router010children001Component;
  let fixture: ComponentFixture<Router010children001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router010children001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router010children001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
