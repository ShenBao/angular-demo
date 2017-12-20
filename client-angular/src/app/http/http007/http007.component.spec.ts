import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Http007Component } from './http007.component';

describe('Http007Component', () => {
  let component: Http007Component;
  let fixture: ComponentFixture<Http007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Http007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Http007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
