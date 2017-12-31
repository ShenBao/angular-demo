import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Http004Component } from './http004.component';

describe('Http004Component', () => {
  let component: Http004Component;
  let fixture: ComponentFixture<Http004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Http004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Http004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
