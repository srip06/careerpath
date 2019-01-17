import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestgoComponent } from './testgo.component';

describe('TestgoComponent', () => {
  let component: TestgoComponent;
  let fixture: ComponentFixture<TestgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
