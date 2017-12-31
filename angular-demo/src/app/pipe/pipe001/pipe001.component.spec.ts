import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipe001Component } from './pipe001.component';

describe('Pipe001Component', () => {
  let component: Pipe001Component;
  let fixture: ComponentFixture<Pipe001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pipe001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pipe001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
