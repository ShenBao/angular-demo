import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Http000Component } from './http000.component';

describe('Http000Component', () => {
  let component: Http000Component;
  let fixture: ComponentFixture<Http000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Http000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Http000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
