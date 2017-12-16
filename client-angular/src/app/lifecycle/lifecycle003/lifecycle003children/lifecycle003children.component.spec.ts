import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecycle003childrenComponent } from './lifecycle003children.component';

describe('Lifecycle003childrenComponent', () => {
  let component: Lifecycle003childrenComponent;
  let fixture: ComponentFixture<Lifecycle003childrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lifecycle003childrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifecycle003childrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
