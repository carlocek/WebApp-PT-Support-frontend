import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Customer } from 'src/app/model/customer';
import { PersonalTrainer } from 'src/app/model/personal-trainer';
import { PERSONAL_TRAINERS } from 'src/app/mocks/personal-trainer-mock';
import { PersonalTrainerService } from 'src/app/services/personal-trainer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})

export class CreateCustomerComponent {
  customerForm: FormGroup;
  personalTrainer: PersonalTrainer = PERSONAL_TRAINERS[0];

  constructor(private fb: FormBuilder, private ptService: PersonalTrainerService, private _snackBar: MatSnackBar) {
    this.customerForm = this.fb.group({
      id: Math.floor(Math.random() * 100000),
      personalTrainerId: this.personalTrainer.id,
      name: '',
      surname: '',
      email: '',
      dateOfBirth: null,
      password: '',
      personalTrainer: this.personalTrainer.name,
      workoutProgramList: null
    });
  }


  onSubmit() {
    this.customerForm.value.dateOfBirth = this.dateFormatter(this.customerForm.value.dateOfBirth)
    const customer = this.customerForm.value as Customer
    console.log(customer)

    const response = this.ptService.insertCustomer(customer).subscribe()
    console.log(response)
    if(response){
      this.openSnackBar('Customer salvato', 'Ok')
      this.customerForm.reset()
    }
    else
      this.openSnackBar('Errore nel salvataggio del customer', 'Ok')
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  dateFormatter(date: Date){
    const m = date.getMonth() + 1
    let month
    if(m < 10){
      month = "0" + m.toString()
    }
    else{
      month = m.toString()
    }

    let day
    if(date.getDate() < 10){
      day = "0" + date.getDate().toString()
    }else{
      day = date.getDate().toString()
    }

    const formattedDate = date.getFullYear() + "-" + month + "-" + day
    return formattedDate
  }
}