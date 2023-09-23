import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomerComponent } from './list-customer.component';

describe('CustomerListComponent', () => {
  let component: ListCustomerComponent;
  let fixture: ComponentFixture<ListCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCustomerComponent]
    });
    fixture = TestBed.createComponent(ListCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
