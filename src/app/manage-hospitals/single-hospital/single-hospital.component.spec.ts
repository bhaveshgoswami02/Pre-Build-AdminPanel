import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHospitalComponent } from './single-hospital.component';

describe('SingleHospitalComponent', () => {
  let component: SingleHospitalComponent;
  let fixture: ComponentFixture<SingleHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
