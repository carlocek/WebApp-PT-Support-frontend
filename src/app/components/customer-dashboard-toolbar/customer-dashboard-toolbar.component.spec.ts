import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDashboardToolbarComponent } from './customer-dashboard-toolbar.component';

describe('CustomerDashboardToolbarComponent', () => {
  let component: CustomerDashboardToolbarComponent;
  let fixture: ComponentFixture<CustomerDashboardToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDashboardToolbarComponent]
    });
    fixture = TestBed.createComponent(CustomerDashboardToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
