import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGymMachineComponent } from './create-gym-machine.component';

describe('CreateGymMachineComponent', () => {
  let component: CreateGymMachineComponent;
  let fixture: ComponentFixture<CreateGymMachineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateGymMachineComponent]
    });
    fixture = TestBed.createComponent(CreateGymMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
