import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable002Component } from './observable002.component';

describe('Observable002Component', () => {
  let component: Observable002Component;
  let fixture: ComponentFixture<Observable002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Observable002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Observable002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
