import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Communication003childrenComponent } from './communication003children.component';

describe('Communication003childrenComponent', () => {
  let component: Communication003childrenComponent;
  let fixture: ComponentFixture<Communication003childrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Communication003childrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Communication003childrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
