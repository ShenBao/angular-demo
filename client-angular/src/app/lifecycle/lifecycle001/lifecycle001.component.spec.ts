import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecycle001Component } from './lifecycle001.component';

describe('Lifecycle001Component', () => {
  let component: Lifecycle001Component;
  let fixture: ComponentFixture<Lifecycle001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lifecycle001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifecycle001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
