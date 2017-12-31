import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Communication002Component } from './communication002.component';

describe('Communication002Component', () => {
  let component: Communication002Component;
  let fixture: ComponentFixture<Communication002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Communication002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Communication002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
