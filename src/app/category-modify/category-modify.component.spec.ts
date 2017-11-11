import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryModifyComponent } from './category-modify.component';

describe('CategoryModifyComponent', () => {
  let component: CategoryModifyComponent;
  let fixture: ComponentFixture<CategoryModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
