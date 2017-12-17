import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Http003Component } from './http003.component';

describe('Http003Component', () => {
  let component: Http003Component;
  let fixture: ComponentFixture<Http003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Http003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Http003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
