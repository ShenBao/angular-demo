import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Communication004childrenComponent } from './communication004children.component';

describe('Communication004childrenComponent', () => {
  let component: Communication004childrenComponent;
  let fixture: ComponentFixture<Communication004childrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Communication004childrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Communication004childrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
