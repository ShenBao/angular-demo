import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ts001Component } from './ts001.component';

describe('Ts001Component', () => {
  let component: Ts001Component;
  let fixture: ComponentFixture<Ts001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ts001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ts001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
