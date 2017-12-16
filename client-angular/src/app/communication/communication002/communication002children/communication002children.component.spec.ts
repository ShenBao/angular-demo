import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Communication002childrenComponent } from './communication002children.component';

describe('Communication002childrenComponent', () => {
  let component: Communication002childrenComponent;
  let fixture: ComponentFixture<Communication002childrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Communication002childrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Communication002childrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
