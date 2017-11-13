import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderModifyComponent } from './work-order-modify.component';

describe('WorkOrderModifyComponent', () => {
  let component: WorkOrderModifyComponent;
  let fixture: ComponentFixture<WorkOrderModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrderModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrderModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
