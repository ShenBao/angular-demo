import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecycle006Component } from './lifecycle006.component';

describe('Lifecycle006Component', () => {
  let component: Lifecycle006Component;
  let fixture: ComponentFixture<Lifecycle006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lifecycle006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifecycle006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
