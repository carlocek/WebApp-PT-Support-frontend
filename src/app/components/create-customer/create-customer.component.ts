import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Customer } from 'src/app/model/customer';
import { PersonalTrainer } from 'src/app/model/personal-trainer';
import { CUSTOMERS } from 'src/app/mocks/customer-mock';
import { PERSONAL_TRAINERS } from 'src/app/mocks/personal-trainer-mock';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})

export class CreateCustomerComponent {
  customerForm: FormGroup;
  personalTrainer: PersonalTrainer = PERSONAL_TRAINERS[0];

  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      id: -1, 
      name: '',
      surname: '',
      email: '',
      dateOfBirth: null,
      password: '',
      personalTrainer: this.personalTrainer
    });
  }


onSubmit() {
  const customer = this.customerForm.value as Customer;
  CUSTOMERS.push(customer)
  console.log(CUSTOMERS)
}
}
