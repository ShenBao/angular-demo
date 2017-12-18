import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service001Component } from './service001.component';

describe('Service001Component', () => {
  let component: Service001Component;
  let fixture: ComponentFixture<Service001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
