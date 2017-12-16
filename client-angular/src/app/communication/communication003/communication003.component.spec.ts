import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Communication003Component } from './communication003.component';

describe('Communication003Component', () => {
  let component: Communication003Component;
  let fixture: ComponentFixture<Communication003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Communication003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Communication003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
