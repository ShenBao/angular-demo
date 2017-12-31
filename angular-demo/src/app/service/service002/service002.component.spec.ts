import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service002Component } from './service002.component';

describe('Service002Component', () => {
  let component: Service002Component;
  let fixture: ComponentFixture<Service002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
