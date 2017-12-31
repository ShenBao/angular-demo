import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Http006Component } from './http006.component';

describe('Http006Component', () => {
  let component: Http006Component;
  let fixture: ComponentFixture<Http006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Http006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Http006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
