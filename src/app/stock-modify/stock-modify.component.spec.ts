import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockModifyComponent } from './stock-modify.component';

describe('StockModifyComponent', () => {
  let component: StockModifyComponent;
  let fixture: ComponentFixture<StockModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
