import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router006Component } from './router006.component';

describe('Router006Component', () => {
  let component: Router006Component;
  let fixture: ComponentFixture<Router006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Router006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Router006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
