import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Communication003children002Component } from './communication003children002.component';

describe('Communication003children002Component', () => {
  let component: Communication003children002Component;
  let fixture: ComponentFixture<Communication003children002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Communication003children002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Communication003children002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
