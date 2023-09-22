import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGymMachinesComponent } from './list-gym-machines.component';

describe('ListGymMachinesComponent', () => {
  let component: ListGymMachinesComponent;
  let fixture: ComponentFixture<ListGymMachinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListGymMachinesComponent]
    });
    fixture = TestBed.createComponent(ListGymMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
