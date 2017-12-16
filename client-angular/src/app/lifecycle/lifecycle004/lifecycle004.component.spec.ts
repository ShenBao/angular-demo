import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecycle004Component } from './lifecycle004.component';

describe('Lifecycle004Component', () => {
  let component: Lifecycle004Component;
  let fixture: ComponentFixture<Lifecycle004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lifecycle004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifecycle004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
