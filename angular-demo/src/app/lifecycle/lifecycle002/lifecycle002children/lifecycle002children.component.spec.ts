import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecycle002childrenComponent } from './lifecycle002children.component';

describe('Lifecycle002childrenComponent', () => {
  let component: Lifecycle002childrenComponent;
  let fixture: ComponentFixture<Lifecycle002childrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lifecycle002childrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifecycle002childrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
