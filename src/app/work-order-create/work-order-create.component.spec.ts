import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderCreateComponent } from './work-order-create.component';

describe('WorkOrderCreateComponent', () => {
  let component: WorkOrderCreateComponent;
  let fixture: ComponentFixture<WorkOrderCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrderCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
