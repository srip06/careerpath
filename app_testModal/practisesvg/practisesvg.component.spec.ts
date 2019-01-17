import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractisesvgComponent } from './practisesvg.component';

describe('PractisesvgComponent', () => {
  let component: PractisesvgComponent;
  let fixture: ComponentFixture<PractisesvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractisesvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractisesvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
