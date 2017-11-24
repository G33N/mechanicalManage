import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderPrintComponent } from './work-order-print.component';

describe('WorkOrderPrintComponent', () => {
  let component: WorkOrderPrintComponent;
  let fixture: ComponentFixture<WorkOrderPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrderPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrderPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
