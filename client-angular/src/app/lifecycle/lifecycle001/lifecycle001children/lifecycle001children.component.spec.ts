import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecycle001childrenComponent } from './lifecycle001children.component';

describe('Lifecycle001childrenComponent', () => {
  let component: Lifecycle001childrenComponent;
  let fixture: ComponentFixture<Lifecycle001childrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lifecycle001childrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifecycle001childrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
