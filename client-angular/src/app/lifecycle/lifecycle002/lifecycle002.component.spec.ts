import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecycle002Component } from './lifecycle002.component';

describe('Lifecycle002Component', () => {
  let component: Lifecycle002Component;
  let fixture: ComponentFixture<Lifecycle002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lifecycle002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifecycle002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
