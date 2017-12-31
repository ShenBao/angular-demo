import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router002Component } from './router002.component';

describe('Router002Component', () => {
  let component: Router002Component;
  let fixture: ComponentFixture<Router002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
