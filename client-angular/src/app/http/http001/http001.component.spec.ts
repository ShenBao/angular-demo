import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Http001Component } from './http001.component';

describe('Http001Component', () => {
  let component: Http001Component;
  let fixture: ComponentFixture<Http001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Http001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Http001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
