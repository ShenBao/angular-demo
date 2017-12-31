import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Http002Component } from './http002.component';

describe('Http002Component', () => {
  let component: Http002Component;
  let fixture: ComponentFixture<Http002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Http002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Http002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
