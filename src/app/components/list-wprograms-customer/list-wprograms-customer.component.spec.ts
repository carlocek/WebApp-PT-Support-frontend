import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWprogramsCustomerComponent } from './list-wprograms-customer.component';

describe('ListWprogramsCustomerComponent', () => {
  let component: ListWprogramsCustomerComponent;
  let fixture: ComponentFixture<ListWprogramsCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListWprogramsCustomerComponent]
    });
    fixture = TestBed.createComponent(ListWprogramsCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
