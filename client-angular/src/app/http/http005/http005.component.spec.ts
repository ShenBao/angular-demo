import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Http005Component } from './http005.component';

describe('Http005Component', () => {
  let component: Http005Component;
  let fixture: ComponentFixture<Http005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Http005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Http005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
