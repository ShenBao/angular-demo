import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecycle005Component } from './lifecycle005.component';

describe('Lifecycle005Component', () => {
  let component: Lifecycle005Component;
  let fixture: ComponentFixture<Lifecycle005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lifecycle005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifecycle005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
