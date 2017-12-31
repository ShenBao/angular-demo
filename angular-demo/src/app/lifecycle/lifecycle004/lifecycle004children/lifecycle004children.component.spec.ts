import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecycle004childrenComponent } from './lifecycle004children.component';

describe('Lifecycle004childrenComponent', () => {
  let component: Lifecycle004childrenComponent;
  let fixture: ComponentFixture<Lifecycle004childrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lifecycle004childrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifecycle004childrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
