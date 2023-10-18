import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerProgramForStaticsComponent } from './view-customer-program-for-statics.component';

describe('ViewCustomerProgramForStaticsComponent', () => {
  let component: ViewCustomerProgramForStaticsComponent;
  let fixture: ComponentFixture<ViewCustomerProgramForStaticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCustomerProgramForStaticsComponent]
    });
    fixture = TestBed.createComponent(ViewCustomerProgramForStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
