import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecycle005childrenComponent } from './lifecycle005children.component';

describe('Lifecycle005childrenComponent', () => {
  let component: Lifecycle005childrenComponent;
  let fixture: ComponentFixture<Lifecycle005childrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lifecycle005childrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifecycle005childrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
