import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Communication001childrenComponent } from './communication001children.component';

describe('Communication001childrenComponent', () => {
  let component: Communication001childrenComponent;
  let fixture: ComponentFixture<Communication001childrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Communication001childrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Communication001childrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
