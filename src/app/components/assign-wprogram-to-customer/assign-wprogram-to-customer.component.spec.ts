import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignWprogramToCustomerComponent } from './assign-wprogram-to-customer.component';

describe('AssignWprogramToCustomerComponent', () => {
  let component: AssignWprogramToCustomerComponent;
  let fixture: ComponentFixture<AssignWprogramToCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignWprogramToCustomerComponent]
    });
    fixture = TestBed.createComponent(AssignWprogramToCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
