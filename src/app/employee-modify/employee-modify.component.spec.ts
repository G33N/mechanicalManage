import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeModifyComponent } from './employee-modify.component';

describe('EmployeeModifyComponent', () => {
  let component: EmployeeModifyComponent;
  let fixture: ComponentFixture<EmployeeModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
