import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Communication004Component } from './communication004.component';

describe('Communication004Component', () => {
  let component: Communication004Component;
  let fixture: ComponentFixture<Communication004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Communication004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Communication004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
