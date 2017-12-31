import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router009Children001Component } from './router009.children001.component';

describe('Router009.Children001Component', () => {
  let component: Router009Children001Component;
  let fixture: ComponentFixture<Router009Children001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router009Children001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router009Children001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
