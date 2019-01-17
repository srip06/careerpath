import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerpathdraftComponent } from './careerpathdraft.component';

describe('CareerpathdraftComponent', () => {
  let component: CareerpathdraftComponent;
  let fixture: ComponentFixture<CareerpathdraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerpathdraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerpathdraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
