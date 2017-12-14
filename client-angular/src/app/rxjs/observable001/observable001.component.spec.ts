import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable001Component } from './observable001.component';

describe('Observable001Component', () => {
  let component: Observable001Component;
  let fixture: ComponentFixture<Observable001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Observable001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Observable001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
