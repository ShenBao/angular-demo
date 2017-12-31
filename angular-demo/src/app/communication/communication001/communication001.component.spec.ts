import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Communication001Component } from './communication001.component';

describe('Communication001Component', () => {
  let component: Communication001Component;
  let fixture: ComponentFixture<Communication001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Communication001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Communication001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
