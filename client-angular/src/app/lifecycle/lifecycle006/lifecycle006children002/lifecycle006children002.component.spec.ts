import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecycle006children002Component } from './lifecycle006children002.component';

describe('Lifecycle006children002Component', () => {
  let component: Lifecycle006children002Component;
  let fixture: ComponentFixture<Lifecycle006children002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lifecycle006children002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifecycle006children002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
