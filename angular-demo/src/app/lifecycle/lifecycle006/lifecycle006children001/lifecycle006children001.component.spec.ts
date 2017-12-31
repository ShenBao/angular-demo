import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecycle006children001Component } from './lifecycle006children001.component';

describe('Lifecycle006children001Component', () => {
  let component: Lifecycle006children001Component;
  let fixture: ComponentFixture<Lifecycle006children001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lifecycle006children001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifecycle006children001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
